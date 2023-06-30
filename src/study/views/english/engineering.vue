<template>
    <div class="app-engineering">
        <div v-for="(item, index) in list" :key="index" @click="playVoices(item, index)" :class="curIndex===index?'active':''">
            <img :src="imgList[index]" :alt="item">
            <span>{{ item }}</span>
        </div>

        <audio ref="player" :src="curSrc"></audio> 
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: ['bulldozer', 'excavator', 'forklift'],
            voiceList: [],
            imgList: [],
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
                this.voiceList.push(import(/* webpackPrefetch: true */ 'assets/english/engineering/' + (item) + '.mp3'));
                this.imgList.push(require('assets/english/engineering/' + (item) + '.png'));
            })
        },
        playVoices (item, index) {
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
    .app-engineering {
        font-size: 18px;
        display: flex;
        flex-wrap: wrap;
        > div {
            width: 50vw;
            height: 50vw;
            text-align: center;
            box-sizing: border-box;
            border: 1px solid #cccccc;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .big-word {
                font-size: 28px;
                line-height: 20vw;
            }

            > img {
                width: 38vw;
                height: 38vw;
                margin: 4px;
            }

            > span {
                line-height: 30px;
            }

        }
        .active {
            border: 2px solid #ff0000;
        }
    }
</style>