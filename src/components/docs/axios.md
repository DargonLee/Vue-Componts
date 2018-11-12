# Axios

## 使用步骤

### step one
在apiUrl 配置请求的URL地址
```js
export default {
    /**登录**/
    loginAPI:`${api}/Admin/Account/login`,
    //如果有其他的API 也都在在这里配置
    ...
}
```
### step two
在apiUtil.js文件中配置要请求的方法
```js
import api from './apiURL'

export function userid(name) {
    return axiosfetch({
        url:api.getClientInfo,
        method: "get",
        params: {
            nickname: name
        }
    })
}
```

### step three
在要使用的vue文件中 按照下面要求
```js

import { userid } from "../../../api/apiUtil";
//在created方法中调用网络请求方法
created(){
    userid("lee").then(res => {
        console.log(res,'请求成功')
    }).catch(err => {
        console.log(err,'请求失败')
    })
}
```
