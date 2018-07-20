<!--  -->
<template>
   <div class="box">
       <slot></slot>
   </div>
</template>

<script>
export default {
   data () {
       return {

       }
   }
}
</script>

<style scoped>
.box {
    padding: 10px;
    text-align: left;
    border-left: 4px solid #42b983;
    margin: 10px 0;
    font-weight: 600px;
    font-size: 14px;
}
</style>
