<template>
    <div class="createWatermark">
        <ContentHeader/>
        <DataList></DataList>
        <ContentFooter/>
    </div>
</template>

<script>
    import DataType from '~/components/dataType'
    import DataList from '~/components/dataList'
    import ContentHeader from '~/components/contentHeader'
    import ContentFooter from '~/components/contentFooter'

    export default {
        name: "create-watermark",
        components: {DataType,DataList,ContentHeader,ContentFooter}
    }
</script>

<style lang="scss" scoped></style>
