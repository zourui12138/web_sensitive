<template>
    <div class="contentFooter clear">
        <span class="fl">请选择脱敏数据(装载位置)</span>
        <div class="fr">
            <el-button type="primary" size="small" round icon="el-icon-caret-left">上一步</el-button>
            <el-button type="primary" size="small" round>开始分析<i class="el-icon-caret-right el-icon--right"></i></el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "content-footer"
    }
</script>

<style lang="scss" scoped>
    .contentFooter{
        height:50px;
        line-height: 50px;
        background-color: #eceff2;
        padding:0 30px;
        span{
            background: url('../assets/img/error.png') no-repeat 0 center;
            color: #f44c4c;
            font-size: 12px;
            padding-left: 30px;
        }
    }
</style>
