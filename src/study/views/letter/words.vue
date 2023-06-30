<template>
    <div class="app-words">
        <span v-for="(item, index) in list" :key="index" @click="playVoices(item, index)" :class="curIndex===index?'active':''">{{ item }}</span>

        <audio ref="player" :src="curSrc"></audio> 
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            voiceList: [],
            curIndex: -1,
            curSrc: '',
            errorSrc: import(/* webpackPrefetch: true */ 'assets/letters/07/error.mp3'),
            appBody: document.body
        }
    },
    mounted () {
        this.initFun();
    },
    methods: {
        initFun () {
            this.initVoices();

            if (this.appBody) {
                this.appBody.onkeyup = this.pressHandle;
            }
        },
        initVoices () {
            this.list.map(item => {
                this.voiceList.push(import(/* webpackPrefetch: true */ 'assets/letters/07/' + (item) + '.mp3'));
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
        },
        pressHandle (event) {
            let curKey = event.key.toUpperCase();
            let curIndex = this.list.indexOf(curKey);

            if (curIndex >= 0) {
                this.playVoices(curKey, curIndex);
            } else {
                this.errorSrc.then(res => {
                    this.curSrc = res.default;
                    setTimeout(() => {
                        this.$refs.player.play();
                    })
                })                
            }
        }
    },
    beforeDestroy () {
        this.appBody.onkeyup = null;
    }
}
</script>

<style lang="less">
    .app-words {
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