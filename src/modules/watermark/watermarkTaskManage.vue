<template>
    <div class="watermarkTaskManage">
        <header>
            <el-select v-model="status" placeholder="请选择">
                <el-option
                    v-for="item in statusOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="sort" placeholder="请选择">
                <el-option
                    v-for="item in sortOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </header>
        <section>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column prop="id" label="序号"></el-table-column>
                <el-table-column prop="type" label="数据库类型"></el-table-column>
                <el-table-column prop="createTime" label="创建时间"></el-table-column>
                <el-table-column prop="endTime" label="结束时间"></el-table-column>
                <el-table-column prop="status" label="状态"></el-table-column>
                <el-table-column prop="progress" label="进度"></el-table-column>
                <el-table-column prop="total" label="任务数据量"></el-table-column>
                <el-table-column prop="comment" label="备注"></el-table-column>
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
        name: "watermark-task-manage",
        data() {
            return{
                statusOptions: [
                    {
                        value: '脱敏完成',
                        label: '脱敏完成'
                    },
                    {
                        value: '脱敏失败',
                        label: '脱敏失败'
                    }
                ],
                status: '脱敏完成',
                sortOptions: [
                    {
                        value: '创建时间升序',
                        label: '创建时间升序'
                    },
                    {
                        value: '创建时间降序',
                        label: '创建时间降序'
                    },
                    {
                        value: '结束时间升序',
                        label: '结束时间升序'
                    },
                    {
                        value: '结束时间降序',
                        label: '结束时间降序'
                    }
                ],
                sort: '创建时间升序',
                tableData: [
                    {
                        id: 1,
                        type: 'MYSQL',
                        createTime: '2018-02-27 18:10:10',
                        endTime: '2018-02-27 18:10:10',
                        status: '脱敏完成',
                        progress: 100,
                        total: 155,
                        comment: '我是备注'
                    },
                    {
                        id: 1,
                        type: 'MYSQL',
                        createTime: '2018-02-27 18:10:10',
                        endTime: '2018-02-27 18:10:10',
                        status: '脱敏完成',
                        progress: 100,
                        total: 155,
                        comment: '我是备注'
                    },
                    {
                        id: 1,
                        type: 'MYSQL',
                        createTime: '2018-02-27 18:10:10',
                        endTime: '2018-02-27 18:10:10',
                        status: '脱敏完成',
                        progress: 100,
                        total: 155,
                        comment: '我是备注'
                    },
                    {
                        id: 1,
                        type: 'MYSQL',
                        createTime: '2018-02-27 18:10:10',
                        endTime: '2018-02-27 18:10:10',
                        status: '脱敏完成',
                        progress: 100,
                        total: 155,
                        comment: '我是备注'
                    },
                    {
                        id: 1,
                        type: 'MYSQL',
                        createTime: '2018-02-27 18:10:10',
                        endTime: '2018-02-27 18:10:10',
                        status: '脱敏完成',
                        progress: 100,
                        total: 155,
                        comment: '我是备注'
                    },
                    {
                        id: 1,
                        type: 'MYSQL',
                        createTime: '2018-02-27 18:10:10',
                        endTime: '2018-02-27 18:10:10',
                        status: '脱敏完成',
                        progress: 100,
                        total: 155,
                        comment: '我是备注'
                    },
                    {
                        id: 1,
                        type: 'MYSQL',
                        createTime: '2018-02-27 18:10:10',
                        endTime: '2018-02-27 18:10:10',
                        status: '脱敏完成',
                        progress: 100,
                        total: 155,
                        comment: '我是备注'
                    },
                    {
                        id: 1,
                        type: 'MYSQL',
                        createTime: '2018-02-27 18:10:10',
                        endTime: '2018-02-27 18:10:10',
                        status: '脱敏完成',
                        progress: 100,
                        total: 155,
                        comment: '我是备注'
                    },
                    {
                        id: 1,
                        type: 'MYSQL',
                        createTime: '2018-02-27 18:10:10',
                        endTime: '2018-02-27 18:10:10',
                        status: '脱敏完成',
                        progress: 100,
                        total: 155,
                        comment: '我是备注'
                    },
                    {
                        id: 1,
                        type: 'MYSQL',
                        createTime: '2018-02-27 18:10:10',
                        endTime: '2018-02-27 18:10:10',
                        status: '脱敏完成',
                        progress: 100,
                        total: 155,
                        comment: '我是备注'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .watermarkTaskManage{
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
    }
</style>
