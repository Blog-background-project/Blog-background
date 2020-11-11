<template>
  <div class="wrap">
    <!-- 模块标题 -->
    <div class="header">
      <h2 class="titl">
        <i class="el-icon-edit-outline"></i>
        文章编辑
      </h2>
    </div>
    <!-- 文章编辑区 -->
    <div class="content">
      <!-- 编辑区左半部分 -->
      <div class="left_wrap">
        <!-- 编辑区标题 -->
        <div class="left_tit">
          <h3>标题</h3>
          <input type="text" v-model="articleItem.title" />
        </div>
        <!-- 编辑区正文 -->
        <div class="left_content">
          <h3>正文</h3>
          <quill-editor v-model="articleItem.content"></quill-editor>
        </div>
      </div>
      <!-- 编辑区右半部分 -->
      <div class="right_wrap">
        <button @click="sub">提交</button>
        <ul>
          <li>
            <h3>分类</h3>
            <select v-model="articleItem.cateID">
              <option selected="selected" value="1">酒店</option>
              <option value="2">旅游</option>
              <option value="43">自由行</option>
            </select>
          </li>
          <li>
            <h3>状态</h3>
            <select v-model="articleItem.status">
              <option selected="selected" value="0">公开</option>
              <option value="1">草稿</option>
              <option value="2">审核</option>
            </select>
          </li>
          <li>
            <h3>模板</h3>
            <select>
              <option>当前模板</option>
            </select>
          </li>
          <li>
            <h3>作者</h3>
            <select>
              <option>蜡笔</option>
            </select>
          </li>
          <li>
            <h3>日期</h3>
            <el-date-picker
              v-model="date"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </li>
          <li>
            <h3 class="disp">置顶</h3>
            <select style="width: 80px" v-model="articleItem.isTop">
              <option  value="0">无</option>
              <option value="2">首页</option>
              <option value="1">全局</option>
              <option value="4">分类</option>
            </select>
          </li>
          <li>
            <h3 class="disp">禁止评论</h3>
            <el-switch
              v-model="isObs"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </li>
        </ul>
      </div>
    </div>
    <!--别名标签底部 -->
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
  </div>
</template>
<script>
export default {
  name: "article",
  data() {
    return {
      // cateId: "", //分类id
      // content: "", //文章内容
      // isTop: "", //是否置顶
      // status: "", //文章状态
      // tag: "", //文章标签
      // title: "", //文章标题

      date: "", //选择日期
      isObs: false, //是否可以评论

      obj: {
        username: "2506377990",
        usertoken: "d39eb03dcd8ee769b62f5e105accf75e",
      },
      articleItem: {
        cateID: 1,
        content: "",
        isTop: 0,
        status: 0,
        tag: "",
        title: "",
      },
      result:{}
    };
  },
  methods: {
    async sub() {
      this.obj.articleItem = JSON.stringify(this.articleItem);
      let result  = await this.$API.reqPostArticle(this.obj);
      this.result = result
      if(result.resultDesc.errCode!==200){
        this.open3()
      };
    },
      open3() {
        this.$message({
          message:this.result.resultDesc.errMsg,
          type: 'warning'
        });
      },
  },
};
</script>
<style lang='less' scoped>
.wrap {
  width: 1600px;
  margin: 0 auto;
  margin-top: 50px;
  // 模块标题
  .header {
    .titl {
      border-bottom: 4px solid #ccc;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
  }
  // 文章编辑区
  .content {
    display: flex;
    margin-bottom: 30px;
    // 编辑区左半部分
    .left_wrap {
      // 编辑区标题
      .left_tit {
        margin-bottom: 20px;
        h3 {
          font-size: 16px;
          margin-bottom: 10px;
        }
        input {
          width: 1000px;
          height: 25px;
          outline: none;
          border: 1px solid #ccc;
        }
        & :focus {
          border: 1px solid skyblue;
          box-shadow: 1px 1px 1px 1px rgba(56, 186, 247, 0.3);
        }
      }
      // 编辑区正文
      .left_content {
        h3 {
          font-size: 16px;
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
            /deep/.ql-editor {
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
    // 编辑区右半部分
    .right_wrap {
      margin-left: 350px;
      button {
        width: 180px;
        height: 38px;
        margin-bottom: 20px;
        background: #3a6ea5;
        border: 1px solid #3399cc;
        color: #fff;
        outline: none;
        margin-left: 38px;
      }
      ul {
        li {
          display: flex;
          text-align: right;
          margin-bottom: 20px;
          line-height: 25px;
          h3 {
            margin-right: 10px;
          }
          select {
            width: 180px;
            height: 25px;
            outline: none;
            border: 1px solid #cccccc;
          }
          .el-date-editor {
            width: 180px;
            height: 25px;
            /deep/.el-input__inner {
              height: 25px;
            }
            /deep/.el-input__prefix {
              margin-top: -7px;
            }
          }
          .disp {
            margin-left: 100px;
          }
        }
      }
    }
  }

  //底部文章标签
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
}
</style>