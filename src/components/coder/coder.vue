<template>
    <div>
        <pre v-highlight>
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
