<template>
    <div class="watermarkRecordFile">
        <section>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column prop="fileName" label="文件名称"></el-table-column>
                <el-table-column prop="watermarkMsg" label="水印信息"></el-table-column>
                <el-table-column prop="createTime" label="创建时间"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" size="small">下载</el-button>
                        <el-button type="primary" size="small" @click="deleteFun">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </section>
        <footer class="clear">
            <h1 class="fl">共<span>1000</span>条数据</h1>
            <el-pagination
                class="fr"
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "watermark-record-file",
        data() {
            return{
                tableData: [
                    {
                        fileName: '我是文件名',
                        watermarkMsg: '我是水印信息',
                        createTime: '2018-02-27 18:10:10'
                    },
                    {
                        fileName: '我是文件名',
                        watermarkMsg: '我是水印信息',
                        createTime: '2018-02-27 18:10:10'
                    },
                    {
                        fileName: '我是文件名',
                        watermarkMsg: '我是水印信息',
                        createTime: '2018-02-27 18:10:10'
                    },
                    {
                        fileName: '我是文件名',
                        watermarkMsg: '我是水印信息',
                        createTime: '2018-02-27 18:10:10'
                    },
                    {
                        fileName: '我是文件名',
                        watermarkMsg: '我是水印信息',
                        createTime: '2018-02-27 18:10:10'
                    },
                    {
                        fileName: '我是文件名',
                        watermarkMsg: '我是水印信息',
                        createTime: '2018-02-27 18:10:10'
                    },
                    {
                        fileName: '我是文件名',
                        watermarkMsg: '我是水印信息',
                        createTime: '2018-02-27 18:10:10'
                    },
                    {
                        fileName: '我是文件名',
                        watermarkMsg: '我是水印信息',
                        createTime: '2018-02-27 18:10:10'
                    },
                    {
                        fileName: '我是文件名',
                        watermarkMsg: '我是水印信息',
                        createTime: '2018-02-27 18:10:10'
                    },
                    {
                        fileName: '我是文件名',
                        watermarkMsg: '我是水印信息',
                        createTime: '2018-02-27 18:10:10'
                    }
                ]
            }
        },
        methods: {
            deleteFun() {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({type: 'success', message: '删除成功!'});
                }).catch(() => {
                    this.$message({type: 'info', message: '已取消删除'});
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .watermarkRecordFile{
        header{
            .el-select{
                margin-right: 20px;
            }
        }
        section{
            margin-bottom: 30px;
        }
        footer{
            h1{
                color: #208e9d;
                font-size: 14px;
            }
        }
    }
</style>
