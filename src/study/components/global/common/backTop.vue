<template>
    <div v-show="showBackTop" class="app-common-backtop" @click="toTopHandle"></div>
</template>

<script>
export default {
    name: 'BackTop',
    data () {
        return {
            showBackTop: false
        }
    },
    props: {
        containner: {
            type: HTMLDivElement,
            default () {
                return null;
            }
        }
    },
    mounted () {
        this.initFun();
    },
    methods: {
        // 初始化
        initFun () {
            this.addEvent(this.containner, 'scroll', () => {
                let tag = this.containner.clientHeight + this.containner.scrollTop >= this.containner.clientHeight * 2;
                this.showBackTop = tag;
            });
        },

        // 返回顶部
        toTopHandle () {
            this.moveHandle(this.containner);
        },

        // 缓冲运动
        moveHandle (ele) {
            this.clearTimer(ele.timer);
            ele.timer = setInterval(() => {
                var curT = ele.scrollTop;
                var speed = Math.floor((0 - curT) / 4);
                if (curT <= 0) {
                    ele.scrollTop = 0;
                    this.clearTimer(ele.timer);
                }
                window.onmousewheel = () => {
                    this.clearTimer(ele.timer);
                }
                ele.scrollTop = curT + speed;
            }, 16);
        },

        // 清除定时器
        clearTimer (timer) {
            clearInterval(timer);
            clearTimeout(timer);
            timer = undefined;
        }
    }
}
</script>

<style lang="less">
    .app-common-backtop {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(30, 85, 149, 0.3);
        background-image: url('~assets/back_top.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 80%;
        cursor: pointer;
        position: absolute;
        right: 10px;
        bottom: 70px;
        z-index: 999;
    }
</style>