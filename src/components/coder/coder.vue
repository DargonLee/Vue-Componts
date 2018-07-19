<template>
    <div>
        <pre v-highlight class="coder">
            <code class="html coder">
                <slot></slot>
            </code>
        </pre>   
    </div>
</template>

<script>
    export default {
        name: "coder"
    }
</script>

<style scoped>

</style>
