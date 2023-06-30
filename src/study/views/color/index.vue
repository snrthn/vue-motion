<template>
    <div class="card-page app-color-home" :style="'height: calc(100vh - ' + ($store.state.isHeader ? 110 : 60) + 'px)'">

        <van-cell title="认识汉字" value="学汉字" size="large" to="/sinogram" is-link />

        <van-cell title="唐诗20首" value="学唐诗" size="large" to="/poetry" is-link />

        <van-cell title="刮胡子" value="学理发" size="large" to="/haircut" is-link />

        <div class="color">

            <div v-for="(item, index) in colors" :key="index" :style="{ background: item.color }" @click="playHandle(item)">{{ item.label }}</div>

        </div>

        <div class="result" :style="{color: curColor }">{{ curEn }}</div>

        <audio ref="player" :src="curSrc"></audio>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            colors: [
                {
                    label: '红',
                    color: '#ff0000',
                    word: 'red',
                    source: import(/* webpackPrefetch: true */ 'assets/voice/colors/red.mp3')
                },
                {
                    label: '橙',
                    color: '#ff8800',
                    word: 'orange',
                    source: import(/* webpackPrefetch: true */ 'assets/voice/colors/orange.mp3')
                },
                {
                    label: '黄',
                    color: '#ffff00',
                    word: 'yellow',
                    source: import(/* webpackPrefetch: true */ 'assets/voice/colors/yellow.mp3')
                },
                {
                    label: '绿',
                    color: '#00ff00',
                    word: 'green',
                    source: import(/* webpackPrefetch: true */ 'assets/voice/colors/green.mp3')
                },
                {
                    label: '青',
                    color: '#00ffff',
                    word: 'cyan',
                    source: import(/* webpackPrefetch: true */ 'assets/voice/colors/cyan.mp3')
                },
                {
                    label: '蓝',
                    color: '#0000ff',
                    word: 'blue',
                    source: import(/* webpackPrefetch: true */ 'assets/voice/colors/blue.mp3')
                },
                {
                    label: '紫',
                    color: '#880088',
                    word: 'purple',
                    source: import(/* webpackPrefetch: true */ 'assets/voice/colors/purple.mp3')
                },
                {
                    label: '灰',
                    color: '#888888',
                    word: 'grey',
                    source: import(/* webpackPrefetch: true */ 'assets/voice/colors/grey.mp3')
                },
                {
                    label: '棕',
                    color: '#804000',
                    word: 'brown',
                    source: import(/* webpackPrefetch: true */ 'assets/voice/colors/brown.mp3')
                }
            ],
            curEn: '',
            curSrc: '',
            curColor: ''
        }
    },
    mounted () {
        
    },
    methods: {
        playHandle (item) {
            this.curEn = item.word;
            this.curColor = item.color;
            item.source.then(res => {
                this.curSrc = res.default;
                setTimeout(() => {
                    this.$refs.player.play();
                }, 0);
            })
        }
    }
}
</script>

<style lang="less">
    .app-color-home {
        padding: 8px;

        .color {
            font-size: 40px;
            color: #333333;
            
            
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            > div {
                width: 30%;
                height: 100px;
                line-height: 100px;
                text-align: center;
                margin: 8px 0px;
            }
        }

        .result {
            font-size: 100px;
            line-height: 140px;
            text-align: center;
        }
        
    }
</style>