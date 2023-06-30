<template>
    <div class="card-page app-english-home" :style="'height: calc(100vh - ' + ($store.state.isHeader ? 110 : 60) + 'px)'">

        <template  v-for="(item, index) in entryList">
            <van-cell :key="index" :title="item.label" size="large" :to="item.path"  v-if="!item.hidden" is-link />
        </template>

    </div>
</template>

<script>
export default {
    data () {
        return {
            entryList: [
                {
                    label: '水果',
                    path: '/fruit',
                    hidden: false
                },
                {
                    label: '食物',
                    path: '/food',
                    hidden: false
                },
                {
                    label: '人物',
                    path: '/people',
                    hidden: false
                },
                {
                    label: '身体',
                    path: '/body',
                    hidden: false
                },
                {
                    label: '动物',
                    path: '/animal',
                    hidden: false
                },
                {
                    label: '电器',
                    path: '/electric',
                    hidden: false
                },
                {
                    label: '交通',
                    path: '/vehicle',
                    hidden: false
                },
                {
                    label: '工程车',
                    path: '/engineering',
                    hidden: false
                },
                {
                    label: '星期',
                    path: '/week',
                    hidden: false
                },
                {
                    label: '月份',
                    path: '/month',
                    hidden: false
                },
                {
                    label: '数字',
                    path: '/num',
                    hidden: false
                }
            ]
        }
    },
    mounted () {
        
    }
}
</script>

<style lang="less">
    .app-english-home {
        padding: 8px;

        .van-tag {
            font-size: 36px;
            margin: 8px;
            padding: 10px 6px;
            display: inline-block;
        }
        
    }
</style>