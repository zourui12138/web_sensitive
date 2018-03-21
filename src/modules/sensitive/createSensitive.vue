<template>
    <div class="createSensitive">
        <!--<ContentHeader/>-->
        <!--<DataList></DataList>-->
        <!--<ContentFooter/>-->
        <div class="sensitiveEg">
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column prop="sensitiveData" label="敏感数据"></el-table-column>
                <el-table-column prop="dataType" label="数据属性"></el-table-column>
                <el-table-column prop="sensitiveType" label="脱敏方法"></el-table-column>
                <el-table-column prop="sensitiveEg" label="脱敏实例"></el-table-column>
            </el-table>
        </div>
        <div class="sensitiveType">
            <el-table
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
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .createSensitive{
        background-color: #fff;
        padding: 20px;
    }
</style>
