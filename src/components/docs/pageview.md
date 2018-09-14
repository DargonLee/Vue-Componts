# pageview

<br>

## 使用示例

```html
<template>
    <div>
        <pageView total="20" @pagechange="pagechange"></pageView>
    </div>
</template>
```

```js
<script>
    import pageView from "../customPage/customPage"
    export default {
        name: "pageview",
        data(){
            return {
                currentPage: '1'
            }
        },
        methods: {
            pagechange(page){
                this.currentPage = page
            }
        },
        components: {
            'pageView':pageView
        }
    }
</script>
```

### methods
<br>

| 方法名   |      说明      |  返回值 |
|----------|:-------------:|:------:|
| resetCurrent |  重新设置当前页码 |  - |

### events
<br>

| 事件名   |      说明      |  返回值 |
|----------|:-------------:|:------:|
| pagechange |  页数更改的的回调方法 |  页码 |

<br>

### props
| 属性名   |      说明      |  类型 |  默认值 |
|----------|:-------------:|:----:|:------:|
| total |  页码总数 | Number - String |  0 |
| currentPage |  当前页码 | Number |  1 |
| pagegroup |  页码条数 | Number |  10 |