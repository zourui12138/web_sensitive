<template>
    <div id="container">
        <aside class="aside">
            <div class="logo"><img src="./assets/img/logo.png" alt=""></div>
            <ul>
                <li @click="selectAsideNav('/sensitive/createSensitive')" :class="{ current : asideNav === '/sensitive/createSensitive' }"><i class="el-icon-refresh"></i>智能数据脱敏</li>
                <li @click="selectAsideNav('/watermark/createWatermark')" :class="{ current : asideNav === '/watermark/createWatermark' }"><i class="el-icon-printer"></i>智能数据水印</li>
            </ul>
        </aside>
        <router-view class="main"/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return{
                asideNav: null
            }
        },
        methods: {
            selectAsideNav(arg) {
                if(this.asideNav !== arg){
                    this.asideNav = arg;
                    this.$router.push({ path: arg });
                }
            }
        },
        beforeMount() {
            this.$route.path.indexOf('sensitive') !== -1 && (this.asideNav = '/sensitive/createSensitive');
            this.$route.path.indexOf('watermark') !== -1 && (this.asideNav = '/watermark/createWatermark');
        }
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
            .logo{
                width: calc(100%);
                height: 100px;
                text-align: center;
                img{
                    vertical-align: top;
                    margin-top: 30px;
                }
            }
            ul{
                margin-top: 20px;
                background-color: #208e9d;
                li{
                    height: 80px;
                    line-height: 80px;
                    border-left: 6px solid transparent;
                    padding-left: 30px;
                    font-size: 18px;
                    cursor: pointer;
                    color: #fff;
                    transition: all .2s;
                    i{
                        margin: 0 10px;
                    }
                }
                li.current{
                    border-left-color: #ffd04b;
                    color: #ffd04b;
                }
                li:hover{
                    background-color: #1A727E;
                }
                li:not(:last-child){
                    margin-bottom: 20px;
                }
            }
        }
        .main{
            margin-left: 250px;
            padding: 0 37px 37px;
            height: calc(100% - 37px);
            background-color: #f1f7fb;
        }
    }
</style>
