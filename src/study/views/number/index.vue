<template>
    <div class="card-page app-number-home" :style="'height: calc(100vh - ' + ($store.state.isHeader ? 110 : 60) + 'px)'">

        <van-cell title="拨电话号码" value="点进来" size="large" to="/telnumber" is-link />

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in numbers" :key="index" @click="clickHandle">
                    {{ item.number }}
                </div>
            </div>
        </div>

        <div class="list">
            <span v-for="(item, index) in numbers" :key="index" :class="index === curIndex ? 'active': ''" @click="navToCurItem(index)">{{ item.number }}</span>
        </div>

        <audio ref="player" :src="curSrc"></audio>

    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    data () {
        return {
            isInit: true,
            numbers: [],
            maxLen: 20,
            curIndex: 0,
            curSrc: '',
            numSwiper: null
        }
    },
    mounted () {
        this.initFun();
    },
    methods: {
        // 初始化入口
        initFun () {
            this.initNumbers();
        },

        // 初始化数字
        initNumbers () {
            new Array(this.maxLen).fill(null).map((item, index) => {
                this.numbers.push({
                    number: index + 1,
                    source: import(/* webpackPrefetch: true */ 'assets/voice/numbers/' + (index + 1) + '.mp3')
                });
            });

            this.getSourcePath(this.numbers[0].source);

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

        // 点击下方数字
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
                        if (index === that.numbers.length + 1) index = 1;
                        if (index === 0) index = that.numbers.length;
                        that.curIndex = index - 1;
                        that.getSourcePath(that.numbers[that.curIndex].source, () => {
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
    .app-number-home {
        padding: 0px;

        .swiper-slide {
            font-size: 200px;
            line-height: 240px;
            height: 240px;
            background: url('~assets/number_bg.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100% 100%;
            text-align: center;
            color: #333333;
        }

        .list {
            font-size: 40px;
            line-height: 60px;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 8px;

            > span {
                flex: 20%;
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