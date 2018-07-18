<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <button class="btn--default" @click="showModel">showModel</button>
        <m-model :defaultShow="show" title="测试" @okClick="okClick" @cancelClick="cancelClick">
            自定义内容
        </m-model>
    </div>
</template>

<script>
import mModel from "./model/m-model"
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Demo 使用用例",
            show: false
        };
    },
    methods: {
        showModel(){
            this.show = true
        },
        okClick(){
            this.show = false    
        },
        cancelClick(){
            this.show = false
        }
    },
    components: {
        "m-model": mModel
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>