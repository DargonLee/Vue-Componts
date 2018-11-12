import axios from 'axios'
import qs from 'qs'


export function axiosfetch(options) {
    return new Promise((resolve, reject) => {
        //获取token
        var token = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : "";
        console.log(token)
        const instance = axios.create({
            //instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
            //所有的请求都会带上这些配置，比如全局都要用的身份信息等。
            // headers: {
            //     'Content-Type': 'application/json',
            //     "Authorization": token
            // },
            // timeout: 30 * 1000 //30秒超时
        });

        let httpDefaultOpts = { //http默认配置
            method:options.method,
            url: options.url,
            timeout: 10000,
            params:Object.assign(options.params),
            data:qs.stringify(Object.assign(options.params)),
            headers: options.method=='get'?{
                'X-Requested-With': 'XMLHttpRequest',
                "Accept": "application/json",
                "Content-Type": "application/json; charset=UTF-8",
                "Authorization": token
            }:{
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "Authorization": token
            }
        }

        if(options.method=='get'){
            delete httpDefaultOpts.data
        }else{
            delete httpDefaultOpts.params
        }
        document.getElementById('loading').style.display=""
        instance(httpDefaultOpts)
            .then(response => {//then 请求成功之后进行什么操作
                console.log('参数：' + options.params + '\n' + '响应' + response)
                if(response.data.errno == 401){
                    alert(response.data.errmsg)
                    window.location.href = window.location.protocol + "//" +window.location.host + '/#/login'
                    return
                }
                document.getElementById('loading').style.display="none"
                resolve(response)//把请求到的数据发到引用请求的地方
            })
            .catch(error => {
                //加载等待视图
                document.getElementById('loading').style.display="none"
                console.log('请求异常信息=>：' + options.params + '\n' + '响应' + error)
                reject(error)
            })
    })
}

/**上传图片的方法*/
export function getUploadImage(url,options) {
    return new Promise((resolve,reject) => {
        var token = window.localStorage.getItem('token') ? window.localStorage.getItem('token') : "";
        console.log(token+'============')
        const instance = axios.create({
            //instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
            //所有的请求都会带上这些配置，比如全局都要用的身份信息等。
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token
            },
            timeout: 30 * 1000 //30秒超时
        });
        document.getElementById('loading').style.display=""
        instance.post(url,options)
            .then(response => {
                if(response.data.errno == 403){
                    alert(response.data.errmsg)
                    return
                }
                document.getElementById('loading').style.display="none"
                resolve(response)
            })
            .catch(error => {
                document.getElementById('loading').style.display="none"
                console.log('上传图片异常=>'+error);
                reject(error)
            })
    })
}