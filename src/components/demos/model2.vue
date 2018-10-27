<template>
    <div class="hello">
        <v-subtitle>  使用Vue 新增的model属性实现  </v-subtitle>
        <h3 style="margin-top: 20px;">例子:</h3><br>
        <button class="btn--default" @click="showModel">showModel</button>
        <v-model v-model="show" title="测试" @okClick="okClick" @cancelClick="cancelClick">
            自定义内容(可以填充自定义内容)
        </v-model>
        <!--使用文档说明-->
        <!--<h3>使用方法</h3>-->
        <!--<v-subtitle>这个章节假设你已经对 Vue 组件有一定的了解。当然你也可以先跳过这里，稍后再回过头来看。</v-subtitle>-->
        <model-mark v-highlight></model-mark>
    </div>
</template>

<script>
    import vModel from "../model/v-model";
    import modelMark from "../docs/model.md"
    export default {
        name: "Model2",
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
            "v-model": vModel,
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