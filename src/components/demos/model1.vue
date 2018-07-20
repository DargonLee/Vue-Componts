<template>
    <div class="hello">
        <button class="btn--default" @click="showModel">showModel</button>
        <m-model v-model="show" title="测试" @okClick="okClick" @cancelClick="cancelClick">
            自定义内容
        </m-model>
        <h3>使用方法</h3>
        <v-subtitle>这个章节假设你已经对 Vue 组件有一定的了解。当然你也可以先跳过这里，稍后再回过头来看。</v-subtitle>
        <v-coder>
            &lt;m-model v-model=&quot;show&quot; title=&quot;测试&quot; @okClick=&quot;okClick&quot; @cancelClick=&quot;cancelClick&quot;&gt;
                自定义内容
            &lt;/m-model&gt;
        </v-coder>
        <pre v-highlight>
            <code>
                methods: {
                    showModel() {
                        this.show = true;
                    },
                    okClick() {
                    },
                    cancelClick() {
                    }
                } 
            </code>
        </pre>
    </div>
</template>

<script>
import mModel from "../model/m-model";
export default {
  name: "Model1",
  data() {
    return {
      msg: "Demo 使用用例",
      show: false,
      htmls: `methods: {
                    showModel() {
                    this.show = true;
                    },
                    okClick() {

                    },
                    cancelClick() {
                    }
                } `
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
a {
  color: #42b983;
}
h3 {
  text-align: left;
}
</style>