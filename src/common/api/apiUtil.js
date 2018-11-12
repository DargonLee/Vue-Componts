import {axiosfetch} from "./ajxa";
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
/*
* 用法
* import {userid} from "../../../api/apiUtil";
* created() {
            userid("lee").then(res => {
                console.log(res,'请求成功')
            }).catch(err => {
                console.log(err,'请求失败')
            })
        }
* */