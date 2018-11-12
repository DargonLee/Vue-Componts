<template>
    <div>
        <v-subtitle>  使用Promise 封装解耦合的API网络接口调用  </v-subtitle>
        <axios-mark v-highlight></axios-mark>
    </div>
</template>

<script>
    import Axios from "../docs/axios.md"
    export default {
        name: "axios",
        components: {
            'axios-mark': Axios
        }
    }
</script>

<style scoped>

</style>