<template>
    <div class="dataType clear">
        <div class="dataType_blockData fl">
            <h1></h1>
            <p>块数据（文件）</p>
        </div>
        <div class="dataType_database fl">
            <h1></h1>
            <p>数据库（MySQL）</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "data-type"
    }
</script>

<style lang="scss" scoped>
    /*.dataType*/
    .dataType{
        padding:0 328px;
        height:660px;
        background-color: #fff;
        div{
            width:298px;
            text-align: center;
            border:1px solid #dde1e4;
            background-color: #fafafa;
            color: #5a6174;
            cursor: pointer;
            margin:170px 85px 0;
            transition: all .2s;
            h1{
                height:182px;
            }
            p{
                height:96px;
                line-height: 50px;
            }
        }
        div:hover{
            margin:136px 49px 0;
            padding:34px 36px;
            background-color: #26c5e5;
            border-color: #26c5e5;
            box-shadow: 0 0 10px #26c5e5;
            color: #fff;
        }
        .dataType_blockData h1{
            background:transparent url('../../assets/img/blockData.png') no-repeat center 58px;
        }
        .dataType_database h1{
            background:transparent url('../../assets/img/database.png') no-repeat center 57px;
        }
        .dataType_blockData:hover h1{
            background:transparent url('../../assets/img/blockData_hover.png') no-repeat center 58px;
        }
        .dataType_database:hover h1{
            background:transparent url('../../assets/img/database_hover.png') no-repeat center 57px;
        }
    }
</style>
