# input 

<br>

## 使用示例

```html
<template>
    <div>
        <p>输入的内容：<strong>{{inputValue}}</strong></p>
        <m-input v-model="inputValue"></m-input>
    </div>
</template>
```

```js
<script>
    import inputView from "../input/m-input"
    export default {
        name: "input1",
        data(){
            return {
                inputValue: ''
            }
        },
        components: {
            'm-input': inputView
        }
    }
</script>
```

<br>

## API

### props
| 属性名   |      说明      | 类型 |  默认值 |
|----------|:-------------:|:----:|:------:|
| isVerify |  是否显示验证码 | Boolean | false |
| placeholder |  占位符 | String | - |
| isShowEyes |  是否显示眼睛图标 | Boolean | false |
| type |  输入框类型 | String | text |
| verifyString |  验证码文本 | String | 发送验证码 |