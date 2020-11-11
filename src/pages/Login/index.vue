<template>
  <!--       大容器   背景图-->
  <div class="login-container">
    <!-- 登录区 -->
    <div class="userlogin">
      <!-- 登录区 头像区 -->
      <div class="userheader">
        <img src="./images/biao.png" alt="" />
        <h3>用户登录</h3>
      </div>

      <!-- 登录区 输入框 -->
      <div class="user_login">
        <!-- 用户名 -->
        <div class="layui-form-item">
          <label for="username" class="el-icon-s-custom"></label>
          <input
            type="text"
            name="username"
            class="username"
            placeholder="用户名"
            v-model="userName"
          />
        </div>
        <!-- 密码 -->
        <div class="layui-form-item layui-form-item-password">
          <label class="el-icon-goods" style="z-index: 10"></label>
          <el-input
            placeholder="请输入密码"
            v-model="passWord"
            show-password
            class="password"
          >
            <label for="password" class="el-icon-goods"></label>
          </el-input>
          <!-- <input
            type="password"
            id="password"
            name="password"
            placeholder="密码"
            v-model="password"
          /> -->
        </div>
        <!-- 验证码    -->
        <div class="layui-form-item layui-form-yj">
          <label class="el-icon-circle-check" for="vercode"> </label>
          <input
            type="text"
            name="vercode"
            id="vercode"
            placeholder="请输入验证码"
          />
          <!-- <div class="captcha"></div> -->
        </div>
        <!-- 保持登录区 -->
        <div class="layui-form-item layui-form-item-check">
          <div class="layui-form-item-left">
            <input type="checkbox" class="checkbox" @click="!this.checked" />
            <span>保持登录</span>
          </div>
          <div class="layui-form-item-right">
            <a href="javascripy:;">忘记密码？</a>
          </div>
        </div>
        <div @click="changeLogin" class="layui-form-item userinfo-login">
          <!-- <a href=""> 登 录</a> -->
          登 录
        </div>
        <div class="layui-form-item layui-form-item-rigester">
          <a href="javascript:;">注册账号</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input: "",
      userName: "",
      passWord: "",
      checked:false

    };
  },
  methods: {
    changeLogin() {
      let { userName, passWord } = this

      // 手机号为空

      if (!userName.trim()) {
        // 提示用户

        alert("用户名不能为空");

        return;
      }

      let phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;

      // 手机号格式不正确

      if (!phoneReg.test(userName)) {
        alert("手机号格式不正确");
        return;
      }

      // 密码为空

      if (!password.trim()) {
        alert("密码不能为空");
        return;
      }

    },
  },
};
</script>

<style  lang ='less' scoped>
/* 背景图 */
.login-container {
  background: url(./images/th.jpg);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  /* position: relative; */
  /* 登录区域 */
  .userlogin {
    position: absolute;
    /* z-index: 100; */
    min-width: 380px;
    max-width: 380px;
    margin: 0 auto;
    box-sizing: border-box;
    box-shadow: 0px 5px 70px #555;
    border-radius: 5px;
    border: 1px solid #909090;
    height: 483px;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* 登录区头部 */
    .userheader {
      width: 378px;
      height: 120px;
      color: #666;
      text-align: center;
      padding: 10px;
      box-sizing: border-box;
      img {
        width: 60px;
        height: 60px;
      }
      h3 {
        font-size: 25px;
        color: #ffff;
        margin-top: 10px;
      }
    }

    /* 登录  输入区 */
    .user_login {
      width: 378px;
      height: 358px;
      box-sizing: border-box;
      background-color: #fff;
      padding: 30px 30px 10px;
      border-color: #d2d2d2 !important;
      /* 公共部分 */
      .layui-form-item {
        margin-bottom: 15px;
        width: 318px;
        height: 38px;
        position: relative;
        box-sizing: border-box;
        font-size: 14px;
        color: rgb(210, 210, 210);
        border-color: #e6e6e6;
        outline: none;
        .el-icon-s-custom {
          position: absolute;
          width: 38px;
          line-height: 39px;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          color: #d2d2d2;
        }
        /* 用户名 */
        .username {
          width: 100%;
          height: 100%;
          padding: 0 0 0 30px;
          box-sizing: border-box;
          outline: none;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        /* 密码 */
        /deep/.el-input__inner {
          width: 318px;
          height: 40px;
          outline: none;
          box-sizing: border-box;
          padding: 0 0 0 30px;
        }
        .el-icon-goods {
          position: absolute;
          width: 38px;
          line-height: 39px;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          color: #d2d2d2;
        }

        /* 验证码 */
        /* .layui-form-yj{
          width:318px;
          height: 28px;
          margin:  0 0 0 20px;
        } */
        .el-icon-circle-check {
          position: absolute;
          width: 38px;
          line-height: 39px;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          color: #d2d2d2;
        }
        #vercode {
          width: 185.5px;
          height: 38px;
          box-sizing: border-box;
          padding: 0 0 0 30px;
          border: 1px solid #ccc;
          outline: none;
        }
        input::-webkit-input-placeholder {
          color: #ccc;
        }
        .layui-form-item1 {
          width: 185.5px;
          height: 38px;
          border-color: #e6e6e6;
          position: absolute;
          left: 1px;
          top: 1px;
          width: 38px;
          line-height: 36px;
          text-align: center;
          color: #d2d2d2;
        }
        .captcha {
          float: right;
          width: 122.5px;
          height: 38px;
          box-sizing: border-box;
          border: 1px solid red;
        }
        /* 保持通常 */
        .checkbox {
          width: 12px;
          height: 13px;
          /* position: absolute; */
          width: 38px;
          line-height: 39px;
          left: -5px;
          top: 8px;
          text-align: center;
          color: #d2d2d2;
        }
        span {
          height: 28px;
          line-height: 28px;
          /* margin-left: 30px; */
          color: #333;
          font-size: 14px;
        }
        a {
          line-height: 24px;
          font: 14px Helvetica Neue, Helvetica, PingFang SC, Tahoma, Arial,
            sans-serif;
          text-emphasis: none;
        }
      }
      .layui-form-item-check {
        display: flex;
        justify-content: space-between;
        height: 28px;
      }
      .userinfo-login {
        width: 318px;
        height: 38px;
        line-height: 38px;
        background-color: #ff5722;
        text-align: center;
        color: white;
        a {
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: white;
          height: 38px;
          line-height: 38px ;
        }
      }
      /* .layui-form-item-password{
        .password{
          border: none;
          position: relative;
        }
      } */
      .layui-form-item-rigester {
        a {
          float: right;
        }
      }
    }
  }
}
</style>

