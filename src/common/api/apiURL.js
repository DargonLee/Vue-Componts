
let service = 'dev';
// let service = 'prod';
let api = '';
if (service === 'dev') {
  /**dev开发**/
  api = 'http://jtatlas.haorenpin.com';
} else if (service === 'prod') {
  /**prod部署**/
  api = 'https://jtatlas.haorenpin.com';
}


export default {
    /**登录**/
    loginAPI:`${api}/Admin/Account/login`
}