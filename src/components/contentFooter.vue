<template>
    <div class="contentFooter clear">
        <span class="fl">{{error}}</span>
        <div class="fr">
            <el-button type="primary" size="small" round v-for="i in btnObj" :key="i.id" @click="i.btnFun">
                <i class="el-icon-caret-left" v-if="i.btnIcon === 'left'"></i>{{i.btnName}}<i class="el-icon-caret-right" v-if="i.btnIcon === 'right'"></i>
            </el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "content-footer",
        props: ['error','btnObj']
    }
</script>

<style lang="scss" scoped>
    .contentFooter{
        height:48px;
        line-height: 48px;
        background-color: #eceff2;
        padding:0 30px;
        border: 1px solid #d0e0e4;
        margin-top: 20px;
        span{
            background: url('../assets/img/error.png') no-repeat 0 center;
            color: #f44c4c;
            font-size: 12px;
            padding-left: 30px;
        }
    }
</style>
