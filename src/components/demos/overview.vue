<template>
    <div>
        <h1>概述</h1>
        <overview-mark v-highlight></overview-mark>
    </div>
</template>

<script>
    import overviewMark from "../docs/overview.md"
    export default {
        name: "overview",
        components: {
            'overview-mark': overviewMark
        }
    }
</script>

<style scoped>

</style>