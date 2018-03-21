<template>
    <div class="tracedTask">
        <div v-show="dataUI">
            <DataList title="溯源数据" :data="tracedData"></DataList>
            <ContentFooter error="请选择溯源文件" :btnObj="dataBtnObj"/>
        </div>
        <div class="result" v-show="resultUI">
            <ContentHeader title="溯源任务已经完成" :callback="toDataUI"/>
            <section>我是溯源信息</section>
            <ContentFooter :btnObj="resultBtnObj"/>
        </div>
    </div>
</template>

<script>
    import DataList from '~/components/dataList'
    import ContentHeader from '~/components/contentHeader'
    import ContentFooter from '~/components/contentFooter'

    export default {
        name: "traced-task",
        components: {DataList,ContentHeader,ContentFooter},
        data() {
            return{
                dataUI: true,
                resultUI: false,
                dataBtnObj: [
                    {
                        id: 1,
                        btnName: '开始溯源',
                        btnIcon: 'center',
                    }
                ],
                resultBtnObj: [
                    {
                        id: 1,
                        btnName: '溯源完成',
                        btnIcon: 'center',
                    }
                ],
                tracedData: [
                    {
                        id: '1',
                        label: '溯源文件夹1',
                        type: 'folder',
                        children: [
                            {
                                id: '1-1',
                                label: '溯源文件夹1-1',
                                type: 'folder',
                                children: [
                                    {
                                        id: '1-1-1',
                                        label: '溯源文件1-1-1',
                                        type: 'file'
                                    },
                                    {
                                        id: '1-1-2',
                                        label: '溯源文件1-1-2',
                                        type: 'file'
                                    }
                                ]
                            },
                            {
                                id: '1-2',
                                label: '溯源文件1-2',
                                type: 'file'
                            }
                        ]
                    },
                    {
                        id: '2',
                        label: '溯源文件夹2',
                        type: 'folder',
                        children: [
                            {
                                id: '2-1',
                                label: '溯源文件夹2-1',
                                type: 'folder',
                                children: [
                                    {
                                        id: '2-1-1',
                                        label: '溯源文件2-1-1',
                                        type: 'file'
                                    },
                                    {
                                        id: '2-1-2',
                                        label: '溯源文件2-1-2',
                                        type: 'file'
                                    }
                                ]
                            },
                            {
                                id: '2-2',
                                label: '溯源文件2-2',
                                type: 'file'
                            }
                        ]
                    },
                    {
                        id: '3',
                        label: '溯源文件夹3',
                        type: 'folder',
                        children: [
                            {
                                id: '3-1',
                                label: '溯源文件夹3-1',
                                type: 'folder',
                                children: [
                                    {
                                        id: '3-1-1',
                                        label: '溯源文件3-1-1',
                                        type: 'file'
                                    },
                                    {
                                        id: '3-1-2',
                                        label: '溯源文件3-1-2',
                                        type: 'file'
                                    }
                                ]
                            },
                            {
                                id: '3-2',
                                label: '溯源文件3-2',
                                type: 'file'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            hiddenAllUI() {
                this.dataUI = false;
                this.resultUI = false;
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
            this.dataBtnObj[0].btnFun = this.toResultUI;
            this.resultBtnObj[0].btnFun = this.toDataUI;
        }
    }
</script>

<style lang="scss" scoped>
    .tracedTask{
        .result{
            section{
                border: 1px solid #d0e0e4;
                height: 200px;
                line-height: 200px;
                text-align: center;
                color: #208e9d;
            }
        }
    }
</style>
