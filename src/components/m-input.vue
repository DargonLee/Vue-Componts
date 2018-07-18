<template>
    <div>
        <div class="box">
            <input v-bind:value="value" v-on:input="$emit('input',$event.target.value)"
                   :class="{verify:isVerify==true}" name="text" :type="type"
                   :placeholder="placeholder"  @input="search($event)">
            <a v-show="isShowClear" href="javascript:void(0)" @click="clear">x</a>
            <span v-show="isVerify" @click="getVerifyCode">{{verifyString}}</span>
            <i v-show="isShowEyes" @click="showEyes"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-input",
        props:{
            isVerify:{
                type:Boolean,
                default:false
            },
            placeholder:String,
            type:{
                type:String,
                default:'text'
            },
            verifyString:{
                type:[String, Number],
                default:'发送验证码'
            },
            value:String
        },
        data(){
            return {
                isShowEyes: false,
                isShowClear:false
            }
        },
        created(){
            this.isShowEyes = !this.isVerify
            if (this.isShowEyes == false && this.type == 'password'){this.isShowEyes = true};
        },
        methods: {
            search(event){
                if(event.data!=null){
                    this.isShowClear = true
                    // this.value = event.data;
                }else {
                    this.isShowClear = false
                }
            },
            getVerifyCode(){
                this.$emit('VerifyCodeAction')
            },
            showEyes(){
                if (this.type == 'text'){
                    this.type = 'password'
                }else if (this.type == 'password'){
                    this.type = 'text'
                };
            },
            clear(){
                this.$emit('input','')
                this.value = ''
                this.isShowClear = false
            }
        }
    };
</script>

<style scoped>
.box{
    background: rosybrown;
    padding: 5px 5px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 20px 0 20px;
}
.box i{
    width: 23px;
    height: 15px;
    background: red;
    background: url("../../static/images/eyes.png");
    background-position: center;
    background-size: cover;
}
input{
    width: 100%;
    font-size: 15px;
    height: 25px;
}
.box::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 5px;
    transform: scaleY(0.5);
    right: 0;
    transform-origin: 0 0;
    border-top: 1px solid #d9d9d9;
    height: 1px;
    color: #d9d9d9;
}
span{
    font-size: 14px;
    padding-left: 15px;
    width: 30%;
    color: #5987FF;
    border-left: 1px solid #d9d9d9;
}
.verify{
    width: 70%;
}
.reset{
    width: 20px;
    height: 18px;
    background: white;
}
a{
    margin: 0 5px;
}
</style>