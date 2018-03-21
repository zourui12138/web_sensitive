<template>
    <div class="sensitiveWordsManage">
        <header><el-button type="primary" @click="openDialog">新增敏感词</el-button></header>
        <section>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column prop="id" label="序号"></el-table-column>
                <el-table-column prop="name" label="敏感词名称"></el-table-column>
                <el-table-column prop="type" label="处理方式"></el-table-column>
                <el-table-column prop="createTime" label="加入时间"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" size="small">修改</el-button>
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
        <el-dialog
            class="dialog"
            title="新增敏感词"
            :visible.sync="dialogVisible"
            :before-close="closeDialog"
            width="465px">
            <div class="dialogContent">
                <div class="clear">
                    <span class="fl">敏感词：</span>
                    <el-input v-model="addSensitiveData.name" class="fr" placeholder="请输入敏感词"></el-input>
                </div>
                <div class="clear">
                    <span class="fl">处理方式：</span>
                    <el-select v-model="addSensitiveData.type" class="fr" placeholder="请选择处理方式">
                        <el-option label="掩码" value="掩码"></el-option>
                        <el-option label="清除" value="清除"></el-option>
                    </el-select>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeDialog">取 消</el-button>
                <el-button type="primary" @click="submitDialog">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "sensitive-words-manage",
        data() {
            return{
                tableData: [
                    {
                        id: 1,
                        name: '大家都是好朋友',
                        type: '掩码',
                        createTime: '2018-03-20 23:59:59'
                    },
                    {
                        id: 1,
                        name: '大家都是好朋友',
                        type: '掩码',
                        createTime: '2018-03-20 23:59:59'
                    },
                    {
                        id: 1,
                        name: '大家都是好朋友',
                        type: '掩码',
                        createTime: '2018-03-20 23:59:59'
                    },
                    {
                        id: 1,
                        name: '大家都是好朋友',
                        type: '掩码',
                        createTime: '2018-03-20 23:59:59'
                    },
                    {
                        id: 1,
                        name: '大家都是好朋友',
                        type: '掩码',
                        createTime: '2018-03-20 23:59:59'
                    },
                    {
                        id: 1,
                        name: '大家都是好朋友',
                        type: '掩码',
                        createTime: '2018-03-20 23:59:59'
                    },
                    {
                        id: 1,
                        name: '大家都是好朋友',
                        type: '掩码',
                        createTime: '2018-03-20 23:59:59'
                    },
                    {
                        id: 1,
                        name: '大家都是好朋友',
                        type: '掩码',
                        createTime: '2018-03-20 23:59:59'
                    },
                    {
                        id: 1,
                        name: '大家都是好朋友',
                        type: '掩码',
                        createTime: '2018-03-20 23:59:59'
                    },
                    {
                        id: 1,
                        name: '大家都是好朋友',
                        type: '掩码',
                        createTime: '2018-03-20 23:59:59'
                    }
                ],
                dialogVisible: false,
                addSensitiveData: {
                    name: '',
                    type: ''
                }
            }
        },
        methods: {
            openDialog() {
                this.dialogVisible = true;
            },
            closeDialog() {
                this.dialogVisible = false;
                this.$message({type: 'info', message: '已取消添加'});
            },
            submitDialog() {
                this.dialogVisible = false;
                this.$message({type: 'success', message: '添加成功'});
            },
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
    .sensitiveWordsManage{
        header{
            .el-select{
                margin-right: 20px;
            }
        }
        section{
            margin: 30px 0;
        }
        footer{
            h1{
                color: #208e9d;
                font-size: 14px;
            }
        }
        .dialog{
            .dialogContent{
                span{
                    width: 80px;
                    text-align: right;
                    line-height: 40px;
                }
                .el-input,.el-select{
                    width: 345px;
                }
                div:first-child{
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>
