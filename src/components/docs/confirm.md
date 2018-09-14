# confirm

<br>

## 使用示例

```js
//在main.js文件中 写下面代码
import MessageBox from "./components/confirm/index"
Vue.use(MessageBox)
```


```html
<template>
    <div>
        <button @click="showConfirm">showConfirm</button>
    </div>
</template>
```

```js

<script>
    export default {
        methods: {
            showConfirm(){
                this.$msgBox.showMsgBox({
                    title: '添加分类',
                    content: '请填写分类名称',
                    isShowInput: true
                }).then(async (val) => {
                    console.log('点击了确定')
                }).catch(() => {
                    console.log('点击了取消')
                });
            }
        }
    }
</script>

```

<br>

## API


### props
| 属性名   |      说明      | 类型 |  默认值 |
|----------|:-------------:|:----:|:------:|
| title |  设置title | String | 标题 |
| content |  弹框内容 | String | 弹框内容 |
| smalldesc |  这是输入框描述 | String | 输入框描述 |
| isShowInput |  是否显示输入框 | Boolean |false |
| isShowCancelBtn |  是否显示取消按钮 | Boolean | true |
| isShowConfimrBtn |  是否显示确定按钮 | Boolean |  true |
| cancelBtnText |  取消按钮文本 | String | 取消 |
| confirmBtnText |  确定按钮文本 | String | 确定 |