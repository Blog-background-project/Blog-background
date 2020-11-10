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
          <input type="text" />
        </div>
        <!-- 编辑区正文 -->
        <div class="left_content">
          <h3>正文</h3>
          <textarea v-model="content"></textarea>
        </div>
      </div>
      <!-- 编辑区右半部分 -->
      <div class="right_wrap">
        <button @click="sub">提交</button>
        <ul>
          <li>
            <h3>分类</h3>
            <select id="se" v-model="cateId">
              <option>酒店</option>
              <option>旅游</option>
              <option>自由行</option>
            </select>
          </li>
          <li>
            <h3>状态</h3>
            <select v-model="islock">
              <option>公开</option>
              <option>草稿</option>
              <option>审核</option>
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
            <select style="width:80px;" v-model="isTop">
              <option>无</option>
              <option>首页</option>
              <option>全局</option>
              <option>分类</option>
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
            <input type="text">
        </div>
        <div class="tally">
            <h3>标签</h3>
            <input type="text">
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "article",
  data() {
    return {
      cateId:'', //分类id
      content:'', //文章内容
      isTop:'', //是否置顶
      islock:'',//是否草稿
      date: "", //选择日期
      isObs: false, //是否可以评论
    };
  },
  methods: {
    sub() {
        
    },
  },
};
</script>
<style lang='less' scoped>
.wrap {
  width: 1800px;
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
        & :focus{
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
        textarea {
          width: 1000px;
          height: 300px;
          outline: none;
          border-color: #ccc;
          font-size: 1.3em;
        }
         & :focus{
             border: 1px solid skyblue;
             box-shadow: 1px 1px 1px 1px rgba(56, 186, 247, 0.3);
         }
      }
    }
    // 编辑区右半部分
    .right_wrap {
        margin-left:578px;
      button {
        width: 180px;
        height: 38px;
        margin-bottom: 20px;
        background: #3a6ea5;
        border: 1px solid #3399cc;
        color: #fff;
        outline: none;
        margin-left:38px;
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
          .el-date-editor{
              width: 180px;
              height: 25px;
              /deep/.el-input__inner{
                  height: 25px;
              }
             /deep/.el-input__prefix{
                  margin-top: -7px;
              }
          }
          .disp{
              margin-left: 100px;
          }
        }
      }
    }
  }

  //底部文章标签
  .footer{
      div{
          line-height: 24px;
          display: flex;
          input{
              width: 734px;
              height: 24px;
              outline: none;
              border: 1px solid #ccc;
          }
          & :focus{
             border: 1px solid skyblue;
             box-shadow: 1px 1px 1px 1px rgba(56, 186, 247, 0.3);
         }
          h3{
              margin-right: 10px;
          }
      }
      .alias{
          margin-bottom: 20px;
      }
  }   
}
</style>