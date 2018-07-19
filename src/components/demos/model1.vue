<template>
    <div class="hello">
        <button class="btn--default" @click="showModel">showModel</button>
        <m-model v-model="show" title="测试" @okClick="okClick" @cancelClick="cancelClick">
            自定义内容
        </m-model>
        <v-coder>
            &lt;!DOCTYPE html&gt;
 
            &lt;html lang="en" xmlns="http://www.w3.org/1999/xhtml"&gt;
            &lt;head&gt;
                &lt;meta charset="utf-8" /&gt;
                &lt;title&gt;测试页面&lt;/title&gt;
            &lt;/head&gt;
            &lt;body&gt;
            &lt;div&gt;代码片段高亮效果&lt;/div&gt;
            &lt;/body&gt;
            &lt;/html&gt;
        </v-coder>
 

    </div>
</template>

<script>
import mModel from "../model/m-model";
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
    okClick() {},
    cancelClick() {}
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