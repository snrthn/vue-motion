<template>
    <div class="card-page app-poetry-page" :style="'height: calc(100vh - 50px)'">

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in poetryList" :key="index" @click="clickHandle">                    
                    <div class="poetry-title">{{ item.sourceId }}、{{ item.title }}</div>
                    <div class="poetry-desc">{{ item.dynasty }} - {{ item.author }}</div>
                    <div class="poetry-body">
                        <div v-for="(line, count) in item.body" :key="count">{{ line }}</div>
                    </div>
                </div>
            </div>
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
            poetryList: [
                {
                    sourceId: '01',
                    title: '咏鹅',
                    dynasty: '唐代诗人',
                    author: '骆宾王',
                    body: ['鹅鹅鹅，', '曲项向天歌。', '白毛浮绿水，', '红掌拨清波。']
                },
                {
                    sourceId: '02',
                    title: '寻隐者不遇',
                    dynasty: '唐代诗人',
                    author: '贾岛',
                    body: ['松下问童子，', '言师采药去。', '只在此山中，', '云深不知处。']
                },
                {
                    sourceId: '03',
                    title: '鹿柴',
                    dynasty: '唐代诗人',
                    author: '王维',
                    body: ['空山不见人，', '但闻人语响。', '返景入深林，', '复照青苔上。']
                },
                {
                    sourceId: '04',
                    title: '鸟鸣涧',
                    dynasty: '唐代诗人',
                    author: '王维',
                    body: ['人闲桂花落，', '夜静春山空。', '月出惊山鸟，', '时鸣春涧中。']
                },
                {
                    sourceId: '05',
                    title: '静夜思',
                    dynasty: '唐代诗人',
                    author: '李白',
                    body: ['床前明月光，', '疑是地上霜。', '举头望明月，', '低头思故乡。']
                },
                {
                    sourceId: '06',
                    title: '池上',
                    dynasty: '唐代诗人',
                    author: '白居易',
                    body: ['小娃撑小艇，', '偷采白莲回。', '不解藏踪迹，', '浮萍一道开。']
                },
                {
                    sourceId: '07',
                    title: '江雪',
                    dynasty: '唐代诗人',
                    author: '柳宗元',
                    body: ['千山鸟飞绝，', '万径人踪灭。', '孤舟蓑笠翁，', '独钓寒江雪。']
                },
                {
                    sourceId: '08',
                    title: '登乐游原',
                    dynasty: '唐代诗人',
                    author: '李商隐',
                    body: ['向晚意不适，', '驱车登古原。', '夕阳无限好，', '只是近黄昏。']
                },
                {
                    sourceId: '09',
                    title: '宿建德江',
                    dynasty: '唐代诗人',
                    author: '孟浩然',
                    body: ['移舟泊烟渚，', '日暮客愁新。', '野旷天低树，', '江清月近人。']
                },
                {
                    sourceId: '10',
                    title: '登鹤雀楼',
                    dynasty: '唐代诗人',
                    author: '王之涣',
                    body: ['白日依山尽，', '黄河入海流。', '欲穷千里目，', '更上一层楼。']
                },
                {
                    sourceId: '11',
                    title: '锄禾',
                    dynasty: '唐代诗人',
                    author: '李绅',
                    body: ['锄禾日当午，', '汗滴禾下土。', '谁知盘中餐，', '粒粒皆辛苦。']
                },
                {
                    sourceId: '12',
                    title: '杂诗',
                    dynasty: '唐代诗人',
                    author: '王维',
                    body: ['君自故乡来，', '应知故乡事。', '来日绮窗前，', '寒梅著花未？']
                },
                {
                    sourceId: '13',
                    title: '春晓',
                    dynasty: '唐代诗人',
                    author: '孟浩然',
                    body: ['春眠不觉晓，', '处处闻啼鸟。', '夜来风雨声，', '花落知多少。']
                },
                {
                    sourceId: '14',
                    title: '小儿垂钓',
                    dynasty: '唐代诗人',
                    author: '胡令能',
                    body: ['蓬头稚子学垂纶，', '侧坐莓苔草映身。', '路人借问遥招手，', '怕得鱼惊不应人。']
                },
                {
                    sourceId: '15',
                    title: '咏柳',
                    dynasty: '唐代诗人',
                    author: '贺知章',
                    body: ['碧玉妆成一树高，', '万条垂下绿丝绦。', '不知细叶谁裁出，', '二月春风似剪刀。']
                },
                {
                    sourceId: '16',
                    title: '望庐山瀑布',
                    dynasty: '唐代诗人',
                    author: '李白',
                    body: ['日照香炉生紫烟，', '遥看瀑布挂前川。', '飞流直下三千尺，', '疑是银河落九天。']
                },
                {
                    sourceId: '17',
                    title: '赠汪伦',
                    dynasty: '唐代诗人',
                    author: '李白',
                    body: ['李白乘舟将欲行，', '忽闻岸上踏歌声。', '桃花潭水深千尺，', '不及汪伦送我情。']
                },
                {
                    sourceId: '18',
                    title: '竹里馆',
                    dynasty: '唐代诗人',
                    author: '王维',
                    body: ['独坐幽篁里，', '弹琴复长啸。', '深林人不知，', '明月来相照。']
                },
                {
                    sourceId: '19',
                    title: '枫桥夜泊',
                    dynasty: '唐代诗人',
                    author: '张继',
                    body: ['月落乌啼霜满天，', '江枫渔火对愁眠。', '姑苏城外寒山寺，', '夜半钟声到客船。']
                },
                {
                    sourceId: '20',
                    title: '绝句',
                    dynasty: '唐代诗人',
                    author: '杜甫',
                    body: ['两个黄鹂鸣翠柳，', '一行白鹭上青天。', '窗含西岭千秋雪，', '门泊东吴万里船。']
                }
            ],
            isPlay: false,
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
            this.initPoetry();
        },

        // 初始化数字
        initPoetry () {
            this.poetryList.map(item => {
                item.source = import(/* webpackPrefetch: true */ 'assets/voice/poetry/' + item.sourceId + '.mp3');
            });

            this.getSourcePath(this.poetryList[0].source);

            setTimeout(() => {
                this.initSwiper();
            })
        },

        // 点击播放
        clickHandle () {
            if (this.isPlay) {
                this.$refs.player.pause();
                this.isPlay = false;
            } else {
                this.$refs.player.play();
                this.isPlay = true;
            }
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
                        if (index === that.poetryList.length + 1) index = 1;
                        if (index === 0) index = that.poetryList.length;
                        that.curIndex = index - 1;
                        that.getSourcePath(that.poetryList[that.curIndex].source, () => {
                            setTimeout(() => {
                                if (!that.isInit) {
                                    that.$refs.player.pause();
                                    that.isPlay = false;
                                } else {
                                    that.isInit = false;
                                }
                            }, 50);
                        });
                    }
                }
            })
        }
    }
}
</script>

<style lang="less">
    .app-poetry-page {
        padding: 0px;

        .swiper-slide {
            font-size: 24px;
            height: calc(100vh - 50px);
            background: url('~assets/poetry_bkg.jpg');
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: contain;
            text-align: center;
            color: #333333;

            display: flex;
            flex-direction: column;
            justify-content: center;

            box-sizing: border-box;
            padding: 20px 20px 40vw 20px;

            .poetry-title {
                font-weight: bold;
                font-size: 36px;
                line-height: 80px;
            }

            .poetry-desc {
                font-size: 24px;
                line-height: 50px;
                color: #666666;
            }

            .poetry-body {
                margin-top: 20px;
                font-size: 36px;
                line-height: 60px;
                letter-spacing: 5px;
                text-indent: 1.2em;
                color: #000000;
            }

        }       
    }
</style>