<template>
    <div v-show="defaultShow" class="model-mask" transition="fade">
        <div class="model-wrapper-top">
            <div class="model-container-top" :style="{width:width + 'px'}">
                <div class="model-header">
                    <span>{{title}}</span>
                    <i class="close-empty"></i>
                </div>
                <div class="model-content">
                    <slot></slot>
                </div>
                <div class="model-footer">
                    <button class="btn--default" style="margin-right: 20px;" @click="okClick">确定</button>
                    <button class="btn--default" v-show="width != 400" @click="cancelClick">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "m-model",
  props: {
    title: {
      type: String,
      default: "Model title"
    },
    defaultShow: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 400
    }
  },
  data() {
    return {};
  },
  methods: {
    okClick() {
        this.defaultShow = false
        this.$emit("okClick");
    },
    cancelClick() {
      this.defaultShow = false;
      this.$emit("cancelClick");
    }
  }
};
</script>

<style scoped>
.model-content {
  padding: 0px 15px;
}
.model-wrapper-top {
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
}
.model-container-top {
  margin: 100px auto;
  background-color: white;
  text-align: left;
  box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  overflow: hidden;
}
.model-mask {
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
.close-empty {
  position: absolute;
  right: 16px;
  top: 10px;
  overflow: hidden;
  cursor: pointer;
  z-index: 1100;
}
.model-header {
  position: relative;
  height: 45px;
  line-height: 45px;
  padding: 0 20px;
  font-size: 14px;
  color: #999;
  border-bottom: 1px solid #eee;
}
.model-footer {
  border-top: 1px solid #eee;
  padding-top: 8px;
  margin: 20px 0;
  height: 50px;
  background: white;
  text-align: center;
  line-height: 50px;
}
.fade-enter .fade-container,
.fade-leave .fade-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
<!--
用法
1.导入组件
import mModel from "../../../commonViews/m-model"

2.注册组件
components:{
            'm-model':mModel
        }
3.使用
 <m-model :defaultShow="show" title="测试">
    //something
</m-model>

4.在点击事件中 加入以下代码
if (this.show == true){
   this.show = false
}
this.show = true
-->