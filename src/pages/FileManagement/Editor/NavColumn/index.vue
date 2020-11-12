<template>
  <div class="NavContainer">
    <p>请在文章标题里面填写网站名称，下面填写网站地址</p>
    <div class="container_body">
      <div class="body_unload">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          title="点击上传网站头像"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>

      <div class="body_input">
        <div class="input_item">
          <div class="item_left">网站url</div>
          <el-input
            class="left_input"
            v-model="input1"
            placeholder=""
          ></el-input>
        </div>
        <div class="input_item">
          <div class="item_left">在首页是否直接跳转至网址？</div>
          <div class="item_middle">
            <el-tooltip :content="value" placement="top">
              <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="开"
                inactive-value="关"
              >
              </el-switch>
            </el-tooltip>
          </div>
          <div class="item_right">
            打开此开关后在首页和列表页点击网站名称会直接跳转至该网站
          </div>
        </div>
        <div class="input_item">
          <div class="item_left">在首页是否直接跳转至网址？</div>
          <div class="item_middle">
            <el-tooltip :content="value" placement="top">
              <el-switch
                v-model="value1"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="开"
                inactive-value="关"
              >
              </el-switch>
            </el-tooltip>
          </div>
          <div class="item_right">
            打开此开关后在首页和列表页点击网站名称会直接跳转至该网站
          </div>
        </div>
        <div class="input_item">
          <div class="item_left">在首页是否直接跳转至网址？</div>
          <div class="item_middle">
            <el-tooltip :content="value" placement="top">
              <el-switch
                v-model="value2"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="开"
                inactive-value="关"
              >
              </el-switch>
            </el-tooltip>
          </div>
          <div class="item_right">
            打开此开关后在首页和列表页点击网站名称会直接跳转至该网站
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navColumn",
  data() {
    return {
      imageUrl: "",
      input1: "",
      value: true,
      value1: true,
      value2: true,
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang='less' scoped>
.NavContainer {
  p {
    font-size: 16px;
    margin: 10px 0;
  }
  .container_body {
    display: flex;
    justify-content: space-between;
    .body_unload {
      margin-right: 10px;
      /deep/.avatar-uploader .el-upload {
        border: 1px dashed #ddd;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
    .body_input {
      width: 1200px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .input_item {
        display: flex;
        border: 1px solid #ddd;
        text-align: center;
        height: 40px;
        line-height: 40px;
        .left_input {
          width: 80%;
        }
        .item_left {
          width: 20%;
          border-right: 1px solid #ddd;
        }
        .item_middle {
          width: 30%;
        }
        .item_right {
          width: 50%;
          border-left: 1px solid #ddd;
        }
      }
    }
  }
}
</style>
