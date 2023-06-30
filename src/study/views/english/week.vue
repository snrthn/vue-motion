<template>
    <div class="app-week">

        <div v-for="(item, index) in list" :key="index" @click="playVoices(item, index)" :class="curIndex===index?'active':''">
            <span class="big-word">{{ labels[index] }}</span>
            <span>{{ item }}</span>
        </div>

        <audio ref="player" :src="curSrc"></audio> 
    </div>
</template>

<script>
export default {
    data () {
        return {
            labels: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
            list: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
                this.voiceList.push(import(/* webpackPrefetch: true */ 'assets/english/week/' + (item) + '.mp3'));
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
    .app-week {
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