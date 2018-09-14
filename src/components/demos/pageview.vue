<template>
    <div>
        <h3 style="margin-top: 20px;">例子:</h3><br>
        <p>当前页码为：<strong>{{currentPage}}</strong></p>
        <pageView total="20" @pagechange="pagechange"></pageView>
        <pageview-mark v-highlight></pageview-mark>
    </div>
</template>

<script>
    import pageViewmd from "../docs/pageview.md"
    import pageView from "../customPage/customPage"
    export default {
        name: "pageview",
        data(){
            return {
                currentPage: '1'
            }
        },
        methods: {
            pagechange(page){
                this.currentPage = page
            }
        },
        components: {
            'pageView':pageView,
            'pageview-mark': pageViewmd
        }
    }
</script>

<style scoped>

</style>