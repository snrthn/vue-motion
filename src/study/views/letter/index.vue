<template>
    <div class="card-page app-letter-home" :style="'height: calc(100vh - ' + ($store.state.isHeader ? 110 : 60) + 'px)'">

        <div v-if="0" class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in letters" :key="index" @click="clickHandle">
                    {{ item.letter }}
                </div>
            </div>
        </div>

        <div v-if="0" class="list">
            <span v-for="(item, index) in letters" :key="index" :class="index === curIndex ? 'active': ''" @click="navToCurItem(index)">{{ item.letter }}</span>
        </div>        

        <van-cell v-for="(item, index) in entryList" :key="index" :title="item.label" :value="item.count" size="large" :to="item.path" is-link />

        <audio ref="player" :src="curSrc"></audio>        
        
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    data () {
        return {
            entryList: [
                {
                    label: '声母表',
                    path: '/initial',
                    count: '23个'
                },
                {
                    label: '单韵母',
                    path: '/svowel',
                    count: '6个'
                },
                {
                    label: '复韵母',
                    path: '/pvowel',
                    count: '9个'
                },
                {
                    label: '前鼻韵母',
                    path: '/anvowel',
                    count: '5个'
                },
                {
                    label: '后鼻韵母',
                    path: '/pnvowel',
                    count: '4个'
                },
                {
                    label: '整体认读音节',
                    path: '/syllable',
                    count: '16个'
                },
                {
                    label: '英文字母',
                    path: '/words',
                    count: '26个'
                }
            ],
            isInit: true,
            tempLetters: ['a', 'o', 'e', 'i', 'u', 'ü'],
            letters: [],
            curIndex: 0,
            curSrc: '',
            numSwiper: null
        }
    },
    mounted () {
        this.initFun();
    },
    methods: {
        // 初始化页面
        initFun () {
            this.initLetters();
        },

        // 初始化字母表
        initLetters () {
            this.tempLetters.map((item, index) => {
                this.letters.push({
                    letter: item,
                    source: import(/* webpackPrefetch: true */ 'assets/voice/vowel/' + (item) + '.mp3')
                });
            });

            this.getSourcePath(this.letters[0].source);

            setTimeout(() => {
                this.initSwiper();
            })
        },
        

        // 点击播放
        clickHandle () {
            this.$refs.player.play();
        },

        // 获取资源路径
        getSourcePath (sourceObj, cb) {
            sourceObj.then(res => {
                this.curSrc = res.default;
                setTimeout(() => {
                    if (cb) cb();
                }, 0);
            })
        },

        // 点击下方字母
        navToCurItem (index) {
            this.curIndex = index;
            this.numSwiper.slideTo(index + 1, 500);
        },

        // 初始化轮播图
        initSwiper () {
            let that = this;
            this.numSwiper = new Swiper ('.swiper-container', {
                loop: true,
                clickable: true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
                // 滑动事件
                on: {
                    slideChangeTransitionEnd: function () {
                        let index = this.activeIndex;
                        if (index === that.letters.length + 1) index = 1;
                        if (index === 0) index = that.letters.length;
                        that.curIndex = index - 1;
                        that.getSourcePath(that.letters[that.curIndex].source, () => {
                            setTimeout(() => {
                                if (!that.isInit) {
                                    that.$refs.player.play();
                                } else {
                                    that.isInit = false;
                                }
                            }, 0);
                        });
                    }
                }
            })
        }
    }
}
</script>

<style lang="less">
    .app-letter-home {
        padding: 0px;

        .swiper-slide {
            font-size: 240px;
            line-height: 200px;
            height: 240px;
            background: url('~assets/card_bg.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100% 100%;
            text-align: center;
            color: #333333;
        }

        .list {
            font-size: 60px;
            line-height: 65px;
            display: flex;
            justify-content: space-around;
            margin: 8px;

            > span {
                flex: 1;
                text-align: center;
                border-radius: 4px;
            }

            .active {
                background: #ff0000;
                color: #ffffff;
            }
        }

    }
</style>