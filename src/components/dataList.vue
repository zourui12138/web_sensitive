<template>
    <div class="dataList">
        <header>{{title}}<span>{{'----'+currentNode}}</span></header>
        <section class="dataListContent">
            <VuePerfectScrollbar v-scroll class="container-scrollbar">
                <el-tree
                    :data="data"
                    node-key="id"
                    @node-click="getCurrentNode"
                    highlight-current
                    accordion>
                    <div slot-scope="{ node, data }">
                        <h1 class="treeList" :class="[data.type]"><span >{{ node.label }}</span></h1>
                    </div>
                </el-tree>
            </VuePerfectScrollbar>
        </section>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "data-list",
        components: {VuePerfectScrollbar},
        props: ['title','data','listType'],
        data() {
            return{
                currentNode : '暂无数据'
            }
        },
        methods: {
            getCurrentNode(data) {
                if(this.listType === 'source'){
                    (data.type === 'file' || data.type === 'table') && (this.currentNode = data.label);
                    (data.type === 'folder' || data.type === 'database') && (this.currentNode = '暂无数据');
                }else if(this.listType === 'target'){
                    this.currentNode = data.label;
                }
            }
        }
    }
</script>

<style lang="scss">
    .el-tree-node__content{
        height: 50px;
    }
    .el-tree-node__content:hover, .el-tree-node:focus > .el-tree-node__content, .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content{
        background-color: #208e9d;
        color: #fff;
    }
</style>

<style lang="scss" scoped>
    .dataList{
        header{
            border: 1px solid #d0e0e4;
            border-bottom: none;
            background-color: #eceff2;
            height: 49px;
            line-height: 49px;
            color: #7a899d;
            padding-left: 30px;
            font-size: 14px;
            span {
                color: #f44c4c;
            }
        }
        .dataListContent{
            border: 1px solid #d0e0e4;
            height: 548px;
            background-color: #fff;
            .treeList{
                height: 50px;
                line-height: 50px;
                padding-left: 40px;
            }
            .folder{
                background: url('../assets/img/folder_icon.png') no-repeat 0 center;
            }
            .file{
                background: url('../assets/img/file_icon.png') no-repeat 0 center;
            }
            .database{
                background: url('../assets/img/database_icon.png') no-repeat 0 center;
            }
            .table{
                background: url('../assets/img/table_icon.png') no-repeat 0 center;
            }
            /*.container-scrollbar*/
            .container-scrollbar {
                height: calc(100%);
            }
        }
    }
</style>
