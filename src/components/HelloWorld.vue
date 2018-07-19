<template>
    <div class="hello">
        <button class="btn--default" @click="showModel">showModel</button>
        <m-model v-model="show" title="测试" @okClick="okClick" @cancelClick="cancelClick">
            自定义内容
        </m-model>
        <code>
            <m-model v-model="show" title="测试" @okClick="okClick" @cancelClick="cancelClick">
            自定义内容
            </m-model>
        </code>
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
              
        },
        cancelClick(){
            
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