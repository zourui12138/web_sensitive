<template>
    <div class="dataList">
        <header>脱敏数据<span>----暂无脱敏数据</span></header>
        <section>
            <VuePerfectScrollbar v-scroll class="container-scrollbar">
                <el-tree
                    :data="data5"
                    node-key="id"
                    accordion>
                    <div slot-scope="{ node, data }">
                        <h1 class="treeList" :class="[!data.children ? 'file' : 'folder']"><span >{{ node.label }}</span></h1>
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
        data() {
            const data = [{
                id: 1,
                label: '一级 1',
                children: [{
                    id: 4,
                    label: '二级 1-1',
                    children: [{
                        id: 9,
                        label: '三级 1-1-1'
                    }, {
                        id: 10,
                        label: '三级 1-1-2'
                    }]
                }]
            }, {
                id: 2,
                label: '一级 2'
            }, {
                id: 3,
                label: '一级 3',
                children: [{
                    id: 7,
                    label: '二级 3-1'
                }, {
                    id: 8,
                    label: '二级 3-2'
                }]
            }];
            return {
                data5: data
            }
        },
        methods: {
            append(data) {
                const newChild = { id: id++, label: 'testtest', children: [] };
                if (!data.children) {
                    this.$set(data, 'children', []);
                }
                data.children.push(newChild);
            },

            remove(node, data) {
                const parent = node.parent;
                const children = parent.data.children || parent.data;
                const index = children.findIndex(d => d.id === data.id);
                children.splice(index, 1);
            }
        }
    }
</script>

<style lang="scss">
    .el-tree-node__content{
        height: 50px;
    }
    .el-tree-node__content:hover, .el-tree-node:focus > .el-tree-node__content{
        background-color: #208e9d;
        color: #fff;
    }
</style>

<style lang="scss" scoped>
    .dataList{
        header{
            border-bottom: 1px solid #d0e0e4;
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
        section{
            height: 600px;
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
            /*.container-scrollbar*/
            .container-scrollbar {
                height: calc(100%);
            }
        }
    }
</style>
