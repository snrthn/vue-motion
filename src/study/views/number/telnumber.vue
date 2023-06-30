<template>
    <div class="app-telnumber">

        <!-- 输入框 -->
        <van-field
            readonly
            clickable
            size="large"
            label="输入电话:"
            :value="telnumber"
            @touchstart.native.stop="upKeyboard"
        />

        <!-- 软键盘 -->
        <van-number-keyboard
            v-model="telnumber"
            :show="showKeyboard"
            :maxlength="11"
            @input="inputHandle"
            @delete="clearHandle"
            @blur="downKeyboard"
        />

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
            telnumber: '',
            showKeyboard: false,
            showImage: false,
            emptyImg: require('assets/images/page/empty.jpg'),
            curImage: '',
            player: null,
            numList: [],
            curSrc: '',
            telObject: [
                {
                    tel: '15829303525',
                    src: require('assets/images/page/15829303525.jpg'),
                },
                {
                    tel: '18709345627',
                    src: require('assets/images/page/18709345627.jpg'),
                },
                {
                    tel: '13884181173',
                    src: require('assets/images/page/13884181173.jpg'),
                },
                {
                    tel: '13389466015',
                    src: require('assets/images/page/13389466015.jpg'),
                },
                {
                    tel: '17794187382',
                    src: require('assets/images/page/17794187382.jpg'),
                },
                {
                    tel: '13399372313',
                    src: require('assets/images/page/13399372313.jpg'),
                }
            ]
        }
    },
    mounted () {
        this.initFun()
    },
    methods: {
        initFun () {
            this.player = this.$refs.player;
            new Array(10).fill(null).map((item, index) => {
                let path = require('assets/voice/numbers/' + index + '.mp3');
                this.numList.push(path);
            });
        },
        upKeyboard () {
            this.showKeyboard = true;
        },
        downKeyboard () {
            this.showKeyboard = false;
        },
        inputHandle (val) {
            let curNum = this.telnumber + val;

            if (curNum.length <= 11) {
                this.curSrc = this.numList[val * 1];
                setTimeout(() => {
                    this.player.play();
                })
            }

            if (curNum.length === 11) {
                let isSuccess = false;
                this.telObject.map(item => {
                    if (curNum === item.tel) {
                        isSuccess = true;
                        this.curImage = item.src;
                    }
                })

                if (isSuccess) {
                    this.showImage = true;
                } else {
                    this.curImage = this.emptyImg;
                    this.showImage = true;
                }
            }
            
        },
        clearHandle () {
            // console.log('删除了');
        }
    }
}
</script>

<style lang="less">
    .app-telnumber {

        .van-popup--center {
            font-size: 0px;
        }

    }
</style>