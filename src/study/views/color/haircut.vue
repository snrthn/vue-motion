<template>
    <div class="app-haircut">
        
        <div class="tuizi">

            <div :class="className" @click="switchHandle"></div>

        </div>

        <audio ref="player" :src="require('assets/voice/other/ghz.mp3')"></audio>

    </div>
</template>

<script>
export default {
    data () {
        return {
            className: 'switch',
            tag: false
        }
    },
    methods: {
        switchHandle () {
            if (!this.tag) {
                this.className = 'switch switch-on';
                this.$refs.player.play();
            } else {
                this.className = 'switch switch';
                this.$refs.player.load();
            }
            this.tag = !this.tag;
        }
    }
}
</script>

<style lang="less">
    .app-haircut {
        width: 100%;
        height: calc(100vh - 50px);
        box-sizing: border-box;
        position: relative;

        .tuizi {
            width: 167px;
            height: 485px;
            background: #cccccc;

            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            background: url('~assets/tuizi.png');

            .switch {
                width: 39px;
                height: 90px;

                background: url('~assets/switch.png');

                position: absolute;
                left: 61.5px;
                top: 208px;

                transition: all 0.3s;
            }

            .switch-on {
                transform: translateY(-10px);
            }
        }

    }
</style>