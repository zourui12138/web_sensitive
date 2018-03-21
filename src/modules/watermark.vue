<template>
    <div class="watermark">
        <header class="header">
            <h1>智能水印追溯</h1>
            <el-menu
                :default-active="watermarkNav"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#208e9d"
                text-color="#fff"
                router
                active-text-color="#ffd04b">
                <el-menu-item index="createWatermark">创建水印任务</el-menu-item>
                <el-menu-item index="watermarkRecordDatabase">水印记录(数据库)</el-menu-item>
                <el-menu-item index="watermarkRecordFile">水印记录(文件)</el-menu-item>
                <el-menu-item index="tracedTask">创建溯源任务</el-menu-item>
            </el-menu>
        </header>
        <VuePerfectScrollbar v-scroll class="container-scrollbar"><div class="container"><router-view/></div></VuePerfectScrollbar>
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
        .container{
            background-color: #fff;
            padding: 20px;
        }
    }
</style>
