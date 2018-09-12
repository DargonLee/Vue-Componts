
# Model
<br>

## 使用步骤
```js
//引用
    import mModel from "../model/m-model";

```

```js
//注册
    components: {
            "m-model": mModel,
            'model-mark': modelMark
    }
```

 ```html
 //使用
    <m-model v-model="show" title="测试" @okClick="okClick" @cancelClick="cancelClick">
                    自定义内容(可以填充自定义内容)
    </m-model>
 ```  
 
          
 ```js
 //方法实现
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
    } 
```