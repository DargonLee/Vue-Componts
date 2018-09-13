<template>
    <div class="hello">
        <h3 style="margin-top: 20px;">例子:</h3><br>
        <button class="btn--default" @click="showModel">showModel</button>
        <m-model v-model="show" title="测试" @okClick="okClick" @cancelClick="cancelClick">
            自定义内容(可以填充自定义内容)
        </m-model>
        <!--使用文档说明-->
        <!--<h3>使用方法</h3>-->
        <!--<v-subtitle>这个章节假设你已经对 Vue 组件有一定的了解。当然你也可以先跳过这里，稍后再回过头来看。</v-subtitle>-->
        <model-mark v-highlight></model-mark>
    </div>
</template>

<script>
    import mModel from "../model/m-model";
    import modelMark from "../docs/model.md"
    export default {
        name: "Model1",
        data() {
            return {
                msg: "Demo 使用用例",
                show: false
            };
        },
        methods: {
            showModel() {
                this.show = true;
            },
            okClick() {
                console.log('点击了确定')
            },
            cancelClick() {
                console.log('点击了取消')
            }
        },
        components: {
            "m-model": mModel,
            'model-mark': modelMark
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a {
        color: #42b983;
    }

    h3 {
        text-align: left;
    }
</style>