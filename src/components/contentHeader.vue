<template>
    <div class="contentHeader">
        <span>{{title}}</span>
        <strong @click="callback"></strong>
    </div>
</template>

<script>
    export default {
        name: "content-header",
        props: ['callback','title']
    }
</script>

<style lang="scss" scoped>
    .contentHeader{
        background-color: #fff;
        text-align: center;
        height:48px;
        line-height: 48px;
        color: #7a899d;
        position: relative;
        border:1px solid #d0e0e4;
        margin-bottom: 20px;
        strong{
            position: absolute;
            width:75px;
            height:16px;
            background: url('../assets/img/back.png') no-repeat center;
            border-right: 1px solid #7a899d;
            top:13px;
            left:0;
            cursor: pointer;
        }
    }
</style>
