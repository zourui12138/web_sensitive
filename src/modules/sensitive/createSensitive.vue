<template>
    <div class="createSensitive">
        <DataType v-show="dataTypeUI" :callback="toDataUI"/>
        <div v-show="dataUI">
            <ContentHeader title="请选择脱敏数据以及装载位置" :callback="toDataTypeUI"/>
            <el-row :gutter="20">
                <el-col :span="12"><DataList title="脱敏数据" :data="sourceData"></DataList></el-col>
                <el-col :span="12"><DataList title="装载位置" :data="targetData"></DataList></el-col>
            </el-row>
            <ContentFooter error="请选择脱敏数据(装载位置)" :btnObj="dataBtnObj"/>
        </div>
        <div v-show="algorithmUI">
            <ContentHeader title="请选择脱敏规则" :callback="toDataTypeUI"/>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column prop="sensitiveData" label="敏感数据"></el-table-column>
                <el-table-column prop="dataType" label="数据属性"></el-table-column>
                <el-table-column prop="sensitiveType" label="脱敏方法"></el-table-column>
                <el-table-column prop="sensitiveEg" label="脱敏实例"></el-table-column>
            </el-table>
            <ContentFooter :btnObj="algorithmBtnObj"/>
            <el-table
                class="algorithm"
                :data="tableData"
                stripe
                :show-header="false"
                style="width: 100%">
                <el-table-column prop="sensitiveData" label="敏感数据"></el-table-column>
                <el-table-column>
                    <template slot-scope="scope">
                        <el-radio v-model="scope.row.sensitiveType" label="掩码(*)">掩码(*)</el-radio>
                    </template>
                </el-table-column>
                <el-table-column>
                    <template slot-scope="scope">
                        <el-radio v-model="scope.row.sensitiveType" label="掩码(×)">掩码(×)</el-radio>
                    </template>
                </el-table-column>
                <el-table-column>
                    <template slot-scope="scope">
                        <el-radio v-model="scope.row.sensitiveType" label="不脱敏">不脱敏</el-radio>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="result" v-show="resultUI">
            <ContentHeader title="脱敏任务已经创建完成" :callback="toDataTypeUI"/>
            <section>数据&nbsp;<span>ID:<strong>123456789</strong></span>&nbsp;脱敏任务已经创建完成，请前往&nbsp;<span>脱敏任务管理</span>&nbsp;查看。</section>
            <ContentFooter :btnObj="resultBtnObj"/>
        </div>
    </div>
</template>

<script>
    import DataType from '~/components/dataType'
    import DataList from '~/components/dataList'
    import ContentHeader from '~/components/contentHeader'
    import ContentFooter from '~/components/contentFooter'

    export default {
        name: "create-sensitive",
        components: {DataType,DataList,ContentHeader,ContentFooter},
        data() {
            return{
                tableData: [
                    {
                        sensitiveData: 'teache',
                        dataType: 'name',
                        sensitiveType: '不脱敏',
                        sensitiveEg: '张三丰 -> 张三丰'
                    },
                    {
                        sensitiveData: 'teache',
                        dataType: 'name',
                        sensitiveType: '不脱敏',
                        sensitiveEg: '张三丰 -> 张三丰'
                    },
                    {
                        sensitiveData: 'teache',
                        dataType: 'name',
                        sensitiveType: '不脱敏',
                        sensitiveEg: '张三丰 -> 张三丰'
                    }
                ],
                dataTypeUI: true,
                dataUI: false,
                algorithmUI: false,
                resultUI: false,
                dataBtnObj: [
                    {
                        id: 1,
                        btnName: '上一步',
                        btnIcon: 'left',
                    },
                    {
                        id: 2,
                        btnName: '开始分析',
                        btnIcon: 'right',
                    }
                ],
                algorithmBtnObj: [
                    {
                        id: 1,
                        btnName: '上一步',
                        btnIcon: 'left',
                    },
                    {
                        id: 2,
                        btnName: '开始分析',
                        btnIcon: 'right',
                    }
                ],
                resultBtnObj: [
                    {
                        id: 1,
                        btnName: '创建完成',
                        btnIcon: 'center',
                    }
                ],
                sourceData: [
                    {
                        id: '1',
                        label: '脱敏文件夹1',
                        type: 'folder',
                        children: [
                            {
                                id: '1-1',
                                label: '脱敏文件夹1-1',
                                type: 'folder',
                                children: [
                                    {
                                        id: '1-1-1',
                                        label: '脱敏文件1-1-1',
                                        type: 'file'
                                    },
                                    {
                                        id: '1-1-2',
                                        label: '脱敏文件1-1-2',
                                        type: 'file'
                                    }
                                ]
                            },
                            {
                                id: '1-2',
                                label: '脱敏文件1-2',
                                type: 'file'
                            }
                        ]
                    },
                    {
                        id: '2',
                        label: '脱敏文件夹2',
                        type: 'folder',
                        children: [
                            {
                                id: '2-1',
                                label: '脱敏文件夹2-1',
                                type: 'folder',
                                children: [
                                    {
                                        id: '2-1-1',
                                        label: '脱敏文件2-1-1',
                                        type: 'file'
                                    },
                                    {
                                        id: '2-1-2',
                                        label: '脱敏文件2-1-2',
                                        type: 'file'
                                    }
                                ]
                            },
                            {
                                id: '2-2',
                                label: '脱敏文件2-2',
                                type: 'file'
                            }
                        ]
                    },
                    {
                        id: '3',
                        label: '脱敏文件夹3',
                        type: 'folder',
                        children: [
                            {
                                id: '3-1',
                                label: '脱敏文件夹3-1',
                                type: 'folder',
                                children: [
                                    {
                                        id: '3-1-1',
                                        label: '脱敏文件3-1-1',
                                        type: 'file'
                                    },
                                    {
                                        id: '3-1-2',
                                        label: '脱敏文件3-1-2',
                                        type: 'file'
                                    }
                                ]
                            },
                            {
                                id: '3-2',
                                label: '脱敏文件3-2',
                                type: 'file'
                            }
                        ]
                    }
                ],
                targetData: [
                    {
                        id: '1',
                        label: '装载文件夹1',
                        type: 'folder',
                        children: [
                            {
                                id: '1-1',
                                label: '装载文件夹1-1',
                                type: 'folder'
                            }
                        ]
                    },
                    {
                        id: '2',
                        label: '装载文件夹2',
                        type: 'folder',
                        children: [
                            {
                                id: '2-1',
                                label: '装载文件夹2-1',
                                type: 'folder'
                            }
                        ]
                    },
                    {
                        id: '3',
                        label: '装载文件夹3',
                        type: 'folder',
                        children: [
                            {
                                id: '3-1',
                                label: '装载文件夹3-1',
                                type: 'folder'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            hiddenAllUI() {
                this.dataTypeUI = false;
                this.dataUI = false;
                this.algorithmUI = false;
                this.resultUI = false;
            },
            toDataTypeUI() {
                this.hiddenAllUI();
                this.dataTypeUI = true;
            },
            toDataUI(type) {
                this.hiddenAllUI();
                this.dataUI = true;
                console.log(type);
            },
            toAlgorithmUI() {
                this.hiddenAllUI();
                this.algorithmUI = true;
            },
            toResultUI() {
                this.hiddenAllUI();
                this.resultUI = true;
            }
        },
        beforeMount() {
            this.dataBtnObj[0].btnFun = this.toDataTypeUI;
            this.dataBtnObj[1].btnFun = this.toAlgorithmUI;
            this.algorithmBtnObj[0].btnFun = this.toDataUI;
            this.algorithmBtnObj[1].btnFun = this.toResultUI;
            this.resultBtnObj[0].btnFun = this.toDataTypeUI;
        }
    }
</script>

<style lang="scss" scoped>
    .createSensitive{
        .algorithm{
            margin-top: 30px;
            border-top: 1px solid #ebeef5;
        }
        .result{
            section{
                border: 1px solid #d0e0e4;
                height: 200px;
                line-height: 200px;
                text-align: center;
                color: #208e9d;
                strong{
                    font-weight: normal;
                }
                span{
                    font-size: 20px;
                    color: #ffd04b;
                    cursor: pointer;
                }
            }
        }
    }
</style>
