<template>
    <div class="watermark">
        <header class="header">
            <h1>智能数据水印</h1>
            <el-menu
                :default-active="watermarkNav"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#208e9d"
                text-color="#fff"
                router
                active-text-color="#ffd04b">
                <el-menu-item index="createWatermark">数据水印系统</el-menu-item>
                <el-menu-item index="watermarkTaskManage">水印任务管理</el-menu-item>
            </el-menu>
        </header>
        <VuePerfectScrollbar v-scroll class="container-scrollbar"><router-view/></VuePerfectScrollbar>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "watermark",
        components: {VuePerfectScrollbar},
        data() {
            return{
                watermarkNav: null
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        beforeMount() {
            this.watermarkNav = this.$route.name;
        }
    }
</script>

<style lang="scss" scoped>
    .watermark{
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
