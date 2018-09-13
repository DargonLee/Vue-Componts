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

### props
| 属性名   |      说明      |  默认值 |
|----------|:-------------:|:------:|
| title |  设置title |  标题 |
| content |  弹框内容 |  弹框内容 |
| smalldesc |  这是输入框描述 |  输入框描述 |
| isShowInput |  是否显示输入框 |  false |
| isShowCancelBtn |  是否显示取消按钮 |  true |
| isShowConfimrBtn |  是否显示确定按钮 |  true |
| cancelBtnText |  取消按钮文本 |  取消 |
| confirmBtnText |  确定按钮文本 |  确定 |