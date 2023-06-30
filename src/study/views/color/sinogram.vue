<template>
    <div class="card-page app-sinogram-page" :style="'height: calc(100vh - 50px)'">

        <span v-for="(item, index) in sinogramList" :key="index" @click="showImgMask(item)" class="text-label">{{ item.text }}</span>

        <!-- 弹出图片 -->
        <van-popup v-model="showImage">
            <van-image :src="curImage" />
        </van-popup>

        <audio ref="player" :src="curSrc"></audio>

    </div>
</template>

<script>
export default {
    data () {
        return {
            sinogramList: [
                {
                    text: '人',
                    write: require('@/assets/images/sinogram/001_ren.gif'),
                    voice: require('@/assets/voice/sinogram/001_ren.mp3')
                },
                {
                    text: '大',
                    write: require('@/assets/images/sinogram/002_da.gif'),
                    voice: require('@/assets/voice/sinogram/002_da.mp3')
                },
                {
                    text: '头',
                    write: require('@/assets/images/sinogram/003_tou.gif'),
                    voice: require('@/assets/voice/sinogram/003_tou.mp3')
                },
                {
                    text: '我',
                    write: require('@/assets/images/sinogram/004_wo.gif'),
                    voice: require('@/assets/voice/sinogram/004_wo.mp3')
                },
                {
                    text: '民',
                    write: require('@/assets/images/sinogram/005_min.gif'),
                    voice: require('@/assets/voice/sinogram/005_min.mp3')
                },
                {
                    text: '个',
                    write: require('@/assets/images/sinogram/006_ge.gif'),
                    voice: require('@/assets/voice/sinogram/006_ge.mp3')
                },
                {
                    text: '子',
                    write: require('@/assets/images/sinogram/007_zi.gif'),
                    voice: require('@/assets/voice/sinogram/007_zi.mp3')
                },
                {
                    text: '皮',
                    write: require('@/assets/images/sinogram/008_pi.gif'),
                    voice: require('@/assets/voice/sinogram/008_pi.mp3')
                },
                {
                    text: '的',
                    write: require('@/assets/images/sinogram/009_de.gif'),
                    voice: require('@/assets/voice/sinogram/009_de.mp3')
                },
                {
                    text: '小',
                    write: require('@/assets/images/sinogram/010_xiao.gif'),
                    voice: require('@/assets/voice/sinogram/010_xiao.mp3')
                },
                {
                    text: '杨',
                    write: require('@/assets/images/sinogram/011_yang.gif'),
                    voice: require('@/assets/voice/sinogram/011_yang.mp3')
                },
                {
                    text: '车',
                    write: require('@/assets/images/sinogram/012_che.gif'),
                    voice: require('@/assets/voice/sinogram/012_che.mp3')
                },
                {
                    text: '鱼',
                    write: require('@/assets/images/sinogram/013_yu.gif'),
                    voice: require('@/assets/voice/sinogram/013_yu.mp3')
                },
                {
                    text: '山',
                    write: require('@/assets/images/sinogram/014_shan.gif'),
                    voice: require('@/assets/voice/sinogram/014_shan.mp3')
                },
                {
                    text: '走',
                    write: require('@/assets/images/sinogram/015_zou.gif'),
                    voice: require('@/assets/voice/sinogram/015_zou.mp3')
                },
                {
                    text: '吃',
                    write: require('@/assets/images/sinogram/016_chi.gif'),
                    voice: require('@/assets/voice/sinogram/016_chi.mp3')
                },
                {
                    text: '一',
                    write: require('@/assets/images/sinogram/017_yi.gif'),
                    voice: require('@/assets/voice/sinogram/017_yi.mp3')
                },
                {
                    text: '二',
                    write: require('@/assets/images/sinogram/018_er.gif'),
                    voice: require('@/assets/voice/sinogram/018_er.mp3')
                },
                {
                    text: '三',
                    write: require('@/assets/images/sinogram/019_san.gif'),
                    voice: require('@/assets/voice/sinogram/019_san.mp3')
                },
                {
                    text: '四',
                    write: require('@/assets/images/sinogram/020_si.gif'),
                    voice: require('@/assets/voice/sinogram/020_si.mp3')
                },
                {
                    text: '五',
                    write: require('@/assets/images/sinogram/021_wu.gif'),
                    voice: require('@/assets/voice/sinogram/021_wu.mp3')
                },
                {
                    text: '六',
                    write: require('@/assets/images/sinogram/022_liu.gif'),
                    voice: require('@/assets/voice/sinogram/022_liu.mp3')
                },
                {
                    text: '七',
                    write: require('@/assets/images/sinogram/023_qi.gif'),
                    voice: require('@/assets/voice/sinogram/023_qi.mp3')
                },
                {
                    text: '八',
                    write: require('@/assets/images/sinogram/024_ba.gif'),
                    voice: require('@/assets/voice/sinogram/024_ba.mp3')
                },
                {
                    text: '九',
                    write: require('@/assets/images/sinogram/025_jiu.gif'),
                    voice: require('@/assets/voice/sinogram/025_jiu.mp3')
                },
                {
                    text: '十',
                    write: require('@/assets/images/sinogram/026_shi.gif'),
                    voice: require('@/assets/voice/sinogram/026_shi.mp3')
                },
                {
                    text: '生',
                    write: require('@/assets/images/sinogram/027_sheng.gif'),
                    voice: require('@/assets/voice/sinogram/027_sheng.mp3')
                },
                {
                    text: '日',
                    write: require('@/assets/images/sinogram/028_ri.gif'),
                    voice: require('@/assets/voice/sinogram/028_ri.mp3')
                },
                {
                    text: '东',
                    write: require('@/assets/images/sinogram/029_dong.gif'),
                    voice: require('@/assets/voice/sinogram/029_dong.mp3')
                },
                {
                    text: '西',
                    write: require('@/assets/images/sinogram/030_xi.gif'),
                    voice: require('@/assets/voice/sinogram/030_xi.mp3')
                },
                {
                    text: '南',
                    write: require('@/assets/images/sinogram/031_nan.gif'),
                    voice: require('@/assets/voice/sinogram/031_nan.mp3')
                },
                {
                    text: '北',
                    write: require('@/assets/images/sinogram/032_bei.gif'),
                    voice: require('@/assets/voice/sinogram/032_bei.mp3')
                },
                {
                    text: '上',
                    write: require('@/assets/images/sinogram/033_shang.gif'),
                    voice: require('@/assets/voice/sinogram/033_shang.mp3')
                },
                {
                    text: '下',
                    write: require('@/assets/images/sinogram/034_xia.gif'),
                    voice: require('@/assets/voice/sinogram/034_xia.mp3')
                },
                {
                    text: '左',
                    write: require('@/assets/images/sinogram/035_zuo.gif'),
                    voice: require('@/assets/voice/sinogram/035_zuo.mp3')
                },
                {
                    text: '右',
                    write: require('@/assets/images/sinogram/036_you.gif'),
                    voice: require('@/assets/voice/sinogram/036_you.mp3')
                }
            ],
            showImage: false,
            curImage: '',
            curSrc: ''
        }
    },
    mounted () {
        this.initFun();
    },
    methods: {
        // 初始化入口
        initFun () {
            this.initSinogram();
        },

        // 初始化文字
        initSinogram () {
            
        },

        // 显示图片
        showImgMask (item) {
            this.showImage = true;
            this.curImage = item.write;
            this.curSrc = item.voice;

            setTimeout(() => {
                this.$refs.player.play();
            }, 0);
        }
    }
}
</script>

<style lang="less">
    .app-sinogram-page {
        padding: 0px;

        .text-label {
            display: inline-block;

            width: 25%;
            height: 25vw;

            text-align: center;
            line-height: 25vw;
            font-size: 48px;
        }
    }
</style>