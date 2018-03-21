<template>
    <div class="sensitive">
        <header class="header">
            <h1>智能数据脱敏</h1>
            <el-menu
                :default-active="sensitiveNav"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#208e9d"
                text-color="#fff"
                router
                active-text-color="#ffd04b">
                <el-menu-item index="createSensitive">创建脱敏任务</el-menu-item>
                <el-menu-item index="taskManage">脱敏任务管理</el-menu-item>
                <el-menu-item index="algorithmManage">脱敏算法管理</el-menu-item>
                <el-menu-item index="sensitiveWordsManage">敏感词管理</el-menu-item>
            </el-menu>
        </header>
        <VuePerfectScrollbar v-scroll class="container-scrollbar"><router-view/></VuePerfectScrollbar>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "sensitive",
        components: {VuePerfectScrollbar},
        data() {
            return{
                sensitiveNav: null
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        beforeMount() {
            this.sensitiveNav = this.$route.name;
        }
    }
</script>

<style lang="scss" scoped>
    .sensitive{
        .header h1{
            height: 59px;
            line-height: 59px;
            font-size: 16px;
            color: #208e9d;
        }
        /*.container-scrollbar*/
        .container-scrollbar {
            height: calc(100% - 120px);
        }
    }
</style>
