
# Model
<br>

## 使用示例

 ```html
 //使用
 <template>
    <button @click="showModel">showModel</button>
    <m-model v-model="show" title="测试" @okClick="okClick" @cancelClick="cancelClick">
                    自定义内容(可以填充自定义内容)
    </m-model>
</template>

 ```  
 
          
 ```js
<script>
    import mModel from "../model/m-model";
    export default {
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
            "m-model": mModel
        }
    };
</script>
```

## API

### events
<br>

| 事件名   |      说明      |  返回值 |
|----------|:-------------:|:------:|
| okClick |  确定事件 |  - |
| cancelClick |    取消事件   |  - |

<br>

### props
| 属性名   |      说明      |  默认值 |
|----------|:-------------:|:------:|
| title |  设置title |  Model title |