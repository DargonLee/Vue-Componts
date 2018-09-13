<template>
    <div id="app">
        <nav>
            <img src="./assets/logo.png">
            <h2>myView组件库</h2>
        </nav>
        <div class="menu">
            <div class="menuItem" v-for="item in menuList">
                <router-link class="item" active-class="selectedItem" :to="item.path">{{item.value}}</router-link>
            </div>
        </div>
        <div class="content">
            <router-view/>
        </div>
        <footer>&copy2018myView</footer>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            selectedItem: '',
            menuList: [
                {
                    value: '概述',
                    path: "/overview"
                },
                {
                    value: 'Model 对话框(组件)',
                    path: "/model1"
                },
                {
                    value: 'Confirm 对话框(组件)',
                    path: "/confirm1"
                }
            ]
        }
    },
    methods: {
        
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 40px;
    background: rgb(234, 234, 234);
}
nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    background: white;
    margin-bottom: 15px;
    padding: 10px;
}
img {
    width: 60px;
    height: 60px;
}
.menu {
    padding: 10px;
    background-color:white;
    height:900px;
    width:200px;
    border-right: 1px solid rgb(234, 234, 234);
    float:left;
}
.menuItem {
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    height: 40px;
}
.selectedItem {
    border-right: 3px solid #2d8cf0;
    padding-right: 8px;
    color: #2d8cf0;
    display: block;
    line-height: 40px;
    margin-right: -12px;
}
.menuItem:hover {
    cursor: pointer;
    background: rgb(234, 234, 234);
}
.content {
    background: white;
    padding: 15px;
    padding-left: 230px;
    margin-left: 15px;
}
footer {
    clear: both;
    text-align: center;
    color: #2d8cf0;
    line-height: 44px;
}

</style>
