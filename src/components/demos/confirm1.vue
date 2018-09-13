<template>
    <div>
        <h3 style="margin-top: 20px;">例子:</h3><br>
        <button class="btn--default" @click="showConfirm">showConfirm</button>
        <confirm-mark v-highlight></confirm-mark>
    </div>
</template>

<script>
    import confirmMark from "../docs/confirm.md"
    export default {
        name: "confirm1",
        methods: {
            showConfirm(){
                this.$msgBox.showMsgBox({
                    title: '添加分类',
                    content: '请填写分类名称',
                    isShowInput: true
                }).then(async (val) => {
                    console.log('点击了确定')
                }).catch(() => {
                    console.log('点击了取消')
                });
            }
        },
        components: {
            'confirm-mark': confirmMark
        }
    }
</script>

<style scoped>

</style>