<template>
  <div>
    <el-card>
      <span style="font-size: 16px">标题</span>
      <el-input placeholder=""></el-input>
      <!-- 上传图片等区域 -->
      <div class="middle">
        <div>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            title="点击上传缩略图"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="input">
          <div class="input_item">
            <span>SEO标题</span>
            <el-input placeholder=""></el-input>
          </div>
          <div class="input_item">
            <span>SEO标题</span>
            <el-input placeholder=""></el-input>
          </div>
          <div class="input_item">
            <span>SEO标题</span>
            <el-input placeholder=""></el-input>
          </div>
        </div>
      </div>
    </el-card>
    <!-- 分类导航 -->
    <el-card style="margin-top: 20px">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">导航栏目字段</el-menu-item>
        <el-menu-item index="2">商品栏目字段</el-menu-item>
        <el-menu-item index="3">新闻栏目字段</el-menu-item>
      </el-menu>
      <ShopNav v-if="activeIndex2 === '2'"></ShopNav>
      <NavColumn v-if="activeIndex2 === '1'"></NavColumn>
      <NewsNav v-if="activeIndex2 === '3'"></NewsNav>
    </el-card>

    <!-- 正文 -->
    <el-card class="bodyCard" style="margin-top: 10px">
      <span style="font-size: 20px">正文</span>
      <!-- 文章编辑区 -->
      <div class="content">
        <!-- 编辑区左半部分 -->
        <div class="left_wrap">
          <!-- 编辑区正文 -->
          <div class="left_content">
            <quill-editor v-model="articleItem.content"></quill-editor>
          </div>
        </div>
      </div>
    </el-card>

    <!-- 别名 -->
    <el-card class="fotter_card" style="margin-top: 10px">
      <div class="footer">
        <div class="alias">
          <h3>别名</h3>
          <input type="text" />
        </div>
        <div class="tally">
          <h3>标签</h3>
          <input type="text" v-model="articleItem.tag" />
        </div>
      </div>
      <p class="title">
        *在正文插入首条分隔符，则分隔符以上的内容将作为摘要。您也可以
        [自动生成摘要]
      </p>
      <div class="left_content">
        <p>摘要</p>
        <quill-editor v-model="articleItem.content"></quill-editor>
      </div>
    </el-card>
  </div>
</template>

<script>
import NewsNav from "./NewsNav";
import NavColumn from "./NavColumn";
import ShopNav from "./ShopNav";
export default {
  name: "Editor",
  components: {
    NewsNav,
    NavColumn,
    ShopNav,
  },
  data() {
    return {
      // 图片
      imageUrl: "",
      // tab 切换
      activeIndex2: "1",
      // 整理数据
      articleItem: {
        content: "",
        title: "",
      },
    };
  },
  mounted() {},
  methods: {
    // tab切换
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      this.activeIndex2 = key;
    },
    // 上传图片
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
.middle {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
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
  .input {
    margin-left: 10px;
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .input_item {
      display: flex;
      span {
        display: block;
        width: 80px;
        font-size: 15px;
        font-weight: 700;
        line-height: 40px;
      }
    }
  }
}
.bodyCard {
  // 文章编辑区
  .content {
    display: flex;
    margin-top: 20px;
    // 编辑区左半部分
    .left_wrap {
      // 编辑区正文
      .left_content {
        /deep/.ql-ql-snow {
          border-bottom: none;
        }
        /deep/.quill-editor {
          width: 1000px;
          height: 400px;
          .ql-container {
            background-color: #fff;
            height: 300px;
            border: none;
            .ql-editor {
              width: 1000px;
              height: 300px;
              border-color: #ccc;
              margin: 0;
              border: 1px solid #ccc;
            }
            & :focus {
              border: 1px solid skyblue;
              box-shadow: 0 1px 1px 1px rgba(56, 186, 247, 0.3);
            }
          }
        }
      }
    }
  }
}
.fotter_card {
  .title{
    font-size: 14px;
    margin: 10px 0;
  }
  .footer {
    div {
      line-height: 24px;
      display: flex;
      input {
        width: 734px;
        height: 24px;
        outline: none;
        border: 1px solid #ccc;
      }
      & :focus {
        border: 1px solid skyblue;
        box-shadow: 1px 1px 1px 1px rgba(56, 186, 247, 0.3);
      }
      h3 {
        margin-right: 10px;
      }
    }
    .alias {
      margin-bottom: 20px;
    }
  }
  // 编辑区正文
  .left_content {
    p{
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    /deep/.ql-ql-snow {
      border-bottom: none;
    }
    /deep/.quill-editor {
      width: 1000px;
      height: 400px;
      .ql-container {
        background-color: #fff;
        height: 300px;
        border: none;
        .ql-editor {
          width: 1000px;
          height: 300px;
          border-color: #ccc;
          margin: 0;
          border: 1px solid #ccc;
        }
        & :focus {
          border: 1px solid skyblue;
          box-shadow: 0 1px 1px 1px rgba(56, 186, 247, 0.3);
        }
      }
    }
  }
}
</style>
