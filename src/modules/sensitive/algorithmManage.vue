<template>
    <div class="algorithmManage">
        <header><el-button type="primary" @click="openDialog()">新增脱敏算法</el-button></header>
        <section>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column prop="id" width="100" label="序号"></el-table-column>
                <el-table-column prop="name" width="250" label="算法名称"></el-table-column>
                <el-table-column prop="ruleType" width="200" label="规则类型"></el-table-column>
                <el-table-column prop="description" label="算法描述"></el-table-column>
                <el-table-column prop="algorithmType" width="200" label="算法类型"></el-table-column>
                <el-table-column width="200" label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" size="small">修改</el-button>
                        <el-button type="primary" size="small">删除</el-button>
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
            title="新增脱敏算法"
            :visible.sync="dialogVisible"
            width="465px">
            <div class="dialogContent">
                <div class="clear">
                    <span class="fl">算法名称：</span>
                    <el-input v-model="addSensitiveAlgorithmData.name" class="fr" placeholder="请输入敏感词"></el-input>
                </div>
                <div class="clear">
                    <span class="fl">算法类型：</span>
                    <el-input v-model="addSensitiveAlgorithmData.type" class="fr" :disabled="true"></el-input>
                </div>
                <div class="clear">
                    <span class="fl">正则表达式：</span>
                    <el-input v-model="addSensitiveAlgorithmData.reg" class="fr" placeholder="请输入敏感词"></el-input>
                </div>
                <div class="clear">
                    <span class="fl">算法描述：</span>
                    <el-input
                        class="fr"
                        type="textarea"
                        :rows="3"
                        placeholder="请输入内容"
                        resize="none"
                        v-model="addSensitiveAlgorithmData.description">
                    </el-input>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="closeDialog('取消脱敏算法添加')">取 消</el-button>
                <el-button type="primary" @click="closeDialog('脱敏算法添加成功')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "algorithm-manage",
        data() {
            return{
                tableData: [
                    {
                        id: 1,
                        name: '身份证发现及脱敏算法',
                        ruleType: '内置规则',
                        description: '提供身份证号类敏感信息发现以及保留地址识别码等处理方式',
                        algorithmType: '数据结构算法'
                    },
                    {
                        id: 1,
                        name: '身份证发现及脱敏算法',
                        ruleType: '内置规则',
                        description: '提供身份证号类敏感信息发现以及保留地址识别码等处理方式',
                        algorithmType: '数据结构算法'
                    },
                    {
                        id: 1,
                        name: '身份证发现及脱敏算法',
                        ruleType: '内置规则',
                        description: '提供身份证号类敏感信息发现以及保留地址识别码等处理方式',
                        algorithmType: '数据结构算法'
                    },
                    {
                        id: 1,
                        name: '身份证发现及脱敏算法',
                        ruleType: '内置规则',
                        description: '提供身份证号类敏感信息发现以及保留地址识别码等处理方式',
                        algorithmType: '数据结构算法'
                    },
                    {
                        id: 1,
                        name: '身份证发现及脱敏算法',
                        ruleType: '内置规则',
                        description: '提供身份证号类敏感信息发现以及保留地址识别码等处理方式',
                        algorithmType: '数据结构算法'
                    },
                    {
                        id: 1,
                        name: '身份证发现及脱敏算法',
                        ruleType: '内置规则',
                        description: '提供身份证号类敏感信息发现以及保留地址识别码等处理方式',
                        algorithmType: '数据结构算法'
                    },
                    {
                        id: 1,
                        name: '身份证发现及脱敏算法',
                        ruleType: '内置规则',
                        description: '提供身份证号类敏感信息发现以及保留地址识别码等处理方式',
                        algorithmType: '数据结构算法'
                    },
                    {
                        id: 1,
                        name: '身份证发现及脱敏算法',
                        ruleType: '内置规则',
                        description: '提供身份证号类敏感信息发现以及保留地址识别码等处理方式',
                        algorithmType: '数据结构算法'
                    },
                    {
                        id: 1,
                        name: '身份证发现及脱敏算法',
                        ruleType: '内置规则',
                        description: '提供身份证号类敏感信息发现以及保留地址识别码等处理方式',
                        algorithmType: '数据结构算法'
                    },
                    {
                        id: 1,
                        name: '身份证发现及脱敏算法',
                        ruleType: '内置规则',
                        description: '提供身份证号类敏感信息发现以及保留地址识别码等处理方式',
                        algorithmType: '数据结构算法'
                    }
                ],
                dialogVisible: false,
                addSensitiveAlgorithmData: {
                    name: '',
                    type: '正则表达式',
                    reg: '',
                    description: ''
                }
            }
        },
        methods: {
            openDialog() {
                this.dialogVisible = true;
            },
            closeDialog(arg) {
                this.dialogVisible = false;
                this.$message(arg);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .algorithmManage{
        background-color: #fff;
        padding: 20px;
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
                    width: 100px;
                    text-align: right;
                    line-height: 40px;
                }
                .el-input,.el-select,.el-textarea{
                    width: 325px;
                }
                div:not(:last-child){
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>
