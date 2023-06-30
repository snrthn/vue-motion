<template>
    <div class="app-pvowel">
        <span v-for="(item, index) in list" :key="index" @click="playVoices(item, index)" :class="curIndex===index?'active':''">{{ item }}</span>

        <audio ref="player" :src="curSrc"></audio> 
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: ['ai', 'ei', 'ui', 'ao', 'ou', 'iu', 'ie', 'üe', 'er'],
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
                this.voiceList.push(import(/* webpackPrefetch: true */ 'assets/letters/03/' + (item) + '.mp3'));
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
    .app-pvowel {
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