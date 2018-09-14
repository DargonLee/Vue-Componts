<template>
    <div>
        <h3 style="margin-top: 20px;">例子:</h3><br>
        <p>输入的内容：<strong>{{inputValue}}</strong></p>
        <m-input v-model="inputValue"></m-input>
        <input-mark v-highlight></input-mark>
    </div>
</template>

<script>
    import inputMark from "../docs/input.md"
    import inputView from "../input/m-input"
    export default {
        name: "input1",
        data(){
            return {
                inputValue: ''
            }
        },
        components: {
            'input-mark': inputMark,
            'm-input': inputView
        }
    }
</script>

<style scoped>

</style>