<template>
    <div class="app-anvowel">
        <span v-for="(item, index) in list" :key="index" @click="playVoices(item, index)" :class="curIndex===index?'active':''">{{ item }}</span>

        <audio ref="player" :src="curSrc"></audio> 
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: ['an', 'en', 'in', 'un', 'ün'],
            voiceList: [],
            curIndex: -1,
            curSrc: ''
        }
    },
    mounted () {
        this.initFun();
    },
    methods: {
        initFun () {
            this.initVoices();
        },
        initVoices () {
            this.list.map(item => {
                this.voiceList.push(import(/* webpackPrefetch: true */ 'assets/letters/04/' + (item) + '.mp3'));
            })
        },
        playVoices (letter, index) {
            this.curIndex = index;
            this.voiceList[index].then(res => {
                this.curSrc = res.default;
                setTimeout(() => {
                    this.$refs.player.play();
                })
            })
        }
    }
}
</script>

<style lang="less">
    .app-anvowel {
        font-size: 48px;
        display: flex;
        flex-wrap: wrap;
        > span {
            width: calc(100% / 3);
            text-align: center;
            line-height: 80px;
            box-sizing: border-box;
            border: 1px solid #cccccc;
        }
        .active {
            background: #ff4400;
            color: #ffffff;
        }
    }
</style>