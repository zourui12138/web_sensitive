<template>
    <div id="container">
        <aside class="aside"></aside>
        <router-view class="main"/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">@import "./assets/css/index";</style>

<style lang="scss" scoped>
    #container{
        height: calc(100%);
        .aside{
            height: calc(100%);
            width: 250px;
            background-color: #208e9d;
            position: fixed;
            left: 0;
            top: 0;
        }
        .main{
            margin-left: 250px;
            padding: 0 37px 37px;
            height: calc(100% - 37px);
            background-color: #f1f7fb;
        }
    }
</style>
