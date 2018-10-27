<template>
    <transition name="fade">
        <div class="model-mask" v-show="checked" >
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
                        <button class="btn--default marginRight" @click="cancelClick">取消</button>
                        <button class="btn--default btn--success" @click="okClick">确定</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "v-model",
        model:{ //使用model的说明
            prop: "checked",//组件被使用的时候 v-model 所能接收到的值
            event: "change"//当你emit change的时候 参数值就是父组件v-model所能接收到的值
        },
        props: {
            checked: {//控制视图显示和隐藏的属性
                type: Boolean,
                default: false
            },
            title: { //默认标题
                type: String,
                default: "Model title"
            },
            width: { //默认宽度
                type: Number,
                default: 600
            }
        },
        data() {
            return {
                defaultShow: false
            };
        },
        methods: {
            okClick() {
                window.document.body.style.overflow = ''
                this.checked = false
                this.$emit("change",this.checked);
            },
            cancelClick() {
                window.document.body.style.overflow = ''
                this.checked = false
                this.$emit("change",this.checked);
            }
        }
    }
</script>

<style scoped>
    .model-content {
        padding:15px;
    }

    .model-wrapper-top {
        position: relative;
        height: 100%;
        overflow: hidden;
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
        margin: 0 0 15px 0;
        height: 50px;
        background: white;
        text-align: right;
        line-height: 50px;
    }

    .marginRight {
        margin-right: 20px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>