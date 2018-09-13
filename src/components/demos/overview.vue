<template>
    <div>
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