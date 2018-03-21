<template>
    <div class="createWatermark">
        <DataType v-show="dataTypeUI" :callback="toDataUI"/>
        <div v-show="dataUI">
            <ContentHeader title="请选择水印数据" :callback="toDataTypeUI"/>
            <DataList title="水印数据" :data="sourceData"></DataList>
            <ContentFooter error="请选择水印数据" :btnObj="dataBtnObj"/>
        </div>
        <div class="result" v-show="resultUI">
            <ContentHeader title="水印任务已经创建完成" :callback="toDataTypeUI"/>
            <section>数据&nbsp;<span>ID:<strong>123456789</strong></span>&nbsp;水印任务已经创建完成，请前往&nbsp;<span>水印记录</span>&nbsp;查看。</section>
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
        name: "create-watermark",
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
                        label: '水印文件夹1',
                        type: 'folder',
                        children: [
                            {
                                id: '1-1',
                                label: '水印文件夹1-1',
                                type: 'folder',
                                children: [
                                    {
                                        id: '1-1-1',
                                        label: '水印文件1-1-1',
                                        type: 'file'
                                    },
                                    {
                                        id: '1-1-2',
                                        label: '水印文件1-1-2',
                                        type: 'file'
                                    }
                                ]
                            },
                            {
                                id: '1-2',
                                label: '水印文件1-2',
                                type: 'file'
                            }
                        ]
                    },
                    {
                        id: '2',
                        label: '水印文件夹2',
                        type: 'folder',
                        children: [
                            {
                                id: '2-1',
                                label: '水印文件夹2-1',
                                type: 'folder',
                                children: [
                                    {
                                        id: '2-1-1',
                                        label: '水印文件2-1-1',
                                        type: 'file'
                                    },
                                    {
                                        id: '2-1-2',
                                        label: '水印文件2-1-2',
                                        type: 'file'
                                    }
                                ]
                            },
                            {
                                id: '2-2',
                                label: '水印文件2-2',
                                type: 'file'
                            }
                        ]
                    },
                    {
                        id: '3',
                        label: '水印文件夹3',
                        type: 'folder',
                        children: [
                            {
                                id: '3-1',
                                label: '水印文件夹3-1',
                                type: 'folder',
                                children: [
                                    {
                                        id: '3-1-1',
                                        label: '水印文件3-1-1',
                                        type: 'file'
                                    },
                                    {
                                        id: '3-1-2',
                                        label: '水印文件3-1-2',
                                        type: 'file'
                                    }
                                ]
                            },
                            {
                                id: '3-2',
                                label: '水印文件3-2',
                                type: 'file'
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
            toResultUI() {
                this.hiddenAllUI();
                this.resultUI = true;
            }
        },
        beforeMount() {
            this.dataBtnObj[0].btnFun = this.toDataTypeUI;
            this.dataBtnObj[1].btnFun = this.toResultUI;
            this.resultBtnObj[0].btnFun = this.toDataTypeUI;
        }
    }
</script>

<style lang="scss" scoped>
    .createWatermark{
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
