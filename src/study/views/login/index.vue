<template>
    <div class="app-login">
        <van-cell-group class="login-form">
            <div class="login-tip">临时登机牌</div>
            <van-field v-model="loginForm.username" label="帐号" maxlength="11" placeholder="请输入手机号" />
            <van-field v-model="loginForm.password" type="password" label="密码" maxlength="32" placeholder="请输入密码" />
            <van-button class="logint-button" type="primary" :loading="loading" loading-text="登录中" block @click="fetchToken">登录</van-button>
        </van-cell-group>        
    </div>
</template>

<script>
export default {
    data () {
        return {
            cookieKey: 'Admin-Token-GW',
            loading: false,
            loginForm: {
                loginType: 'telephone',
                username: '',
                password: '',
                userType: 1,
                isEncry: true
            }
        }
    },
    mounted () {
        this.initFun();
    },
    methods: {
        // 初始化
        initFun () {
            // this.fetchToken();
        },
        // 获取token
        fetchToken () {
            this.loading = true;
            this.sysLogin({
                data: this.loginForm
            }).then(res => {
                this.loading = false;
                sessionStorage.setItem(this.cookieKey, res.data.token);
                console.log('登录成功');
                console.log(res);
                this.Toast({
                    title: '提示',
                    message: res.message
                });
                setTimeout(() => {
                    this.$router.replace('/');
                }, 500);
            }).catch(err => {
                this.loading = false;
            })
        }
    }
}
</script>

<style lang="less">
    .app-login {
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        padding: 32px;
        position: relative;

        .login-form {
            width: 80%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -80%);

            .login-tip {
                font-weight: bold;
                line-height: 50px;
                text-align: center;
                color: #444444;
                margin: 0px 16px;
                border-bottom: 1px solid #f8f8f8;
            }
            .logint-button {
                margin-top: 8px;
            }
        }
    }
</style>