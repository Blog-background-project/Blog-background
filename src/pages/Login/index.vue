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
          />
        </div>
        <!-- 密码 -->
        <div class="layui-form-item">
          <input type="password" id="password" />
        </div>
        <!-- 验证码    -->
        <div class="layui-form-item">
          <label class="el-icon-circle-check" for="vercode"> </label>
          <input type="text" name="vercode" id="vercode" />
          <div class="captcha"></div>
        </div>
        <div class="layui-form-item"></div>
        <div class="layui-form-item"></div>
        <div class="layui-form-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
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
        }
        /* 密码 */
        #password {
          width: 318px;
          height: 38px;
        }

        /* 验证码 */
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
      }
    }
  }
}
</style>

