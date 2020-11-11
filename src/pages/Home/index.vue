<template>
  <div>
    <!-- 整体使用栅格系统 -->

    <!-- 上半部分 -->
    <el-row :gutter="20">
      <!-- 左侧占8份 -->
      <el-col :span="8">
        <el-card class="userContainer" shadow="hover">
          <div class="userInfo">
            <el-avatar
              src="./images/img.146655c9.jpg"
              :size="120"
              class="avatar"
            ></el-avatar>
            <div class="userInfoList">
              <div class="userName">admin</div>
              <div class="userIdentity">管理员</div>
            </div>
          </div>
        </el-card>
        <el-card class="dataProgress">
          <div class="header">访问量</div>
          <div class="progress">
            <span>Vue</span>
            <el-progress :percentage="71.3" color="#42b983"></el-progress>
            <span>React</span>
            <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
            <span>JavaScript</span>
            <el-progress :percentage="13.7" color="#f1e05a"></el-progress>
            <span>HTML</span>
            <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
            <div></div>
          </div>
        </el-card>
      </el-col>
      <!-- 右侧占16份 -->
      <el-col :span="16">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <i class="el-icon-user grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">123</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <i class="el-icon-bell grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">123</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <i class="el-icon-shopping-bag-1 grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">123</div>
                  <div>总数</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 文章管理 -->
        <div class="crumbs">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              ><i class="el-icon-document"></i> 文章管理</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>
        <el-card shadow="hover">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部文章(10)" name="first"
              >全部文章</el-tab-pane
            >
            <el-tab-pane label="公开(2)" name="second">公开</el-tab-pane>
            <el-tab-pane label="草稿(3)" name="third">草稿</el-tab-pane>
            <el-tab-pane label="审核(5)" name="fourth">审核</el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>

    <!-- 下半部分 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <Schart
            ref="bar"
            class="schart"
            canvasId="bar"
            :options="options"
          ></Schart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <Schart
            ref="line"
            class="schart"
            canvasId="line"
            :options="options2"
          ></Schart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 引入vue-schart
import Schart from "vue-schart";
export default {
  name: "Home",
  data() {
    return {
      activeName: "first",
      options: {
        type: "bar",
        title: {
          text: "最近一周各品类销售图",
        },
        xRorate: 25,
        labels: ["周一", "周二", "周三", "周四", "周五"],
        datasets: [
          {
            label: "家电",
            data: [234, 278, 270, 190, 230],
          },
          {
            label: "百货",
            data: [164, 178, 190, 135, 160],
          },
          {
            label: "食品",
            data: [144, 198, 150, 235, 120],
          },
        ],
      },
      options2: {
        type: "line",
        title: {
          text: "最近几个月各品类销售趋势图",
        },
        labels: ["6月", "7月", "8月", "9月", "10月"],
        datasets: [
          {
            label: "家电",
            data: [234, 278, 270, 190, 230],
          },
          {
            label: "百货",
            data: [164, 178, 150, 135, 160],
          },
          {
            label: "食品",
            data: [74, 118, 200, 235, 90],
          },
        ],
      },
      // 用户信息数据
      obj: {
        username: "用户名",
        targetUserid: 1,
        formSource: "web",
        "usertoken": "鉴权token"
      },
      userInfo: {},
    };
  },
  components: {
    Schart,
  },
  mounted() {
    this.getQryUserInfo();
  },
  methods: {
    // 点击切换tab栏
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 查询用户信息
    async getQryUserInfo() {
      let result = await this.$API.reqQryUserInfo();
    },
  },
};
</script>

<style lang="less" scoped>
// 用户信息
.userContainer {
  padding: 20px;
  height: 252px;
  margin-bottom: 20px;
  .userInfo {
    display: flex;
    align-items: center;
    .avatar {
    }
    .userInfoList {
      margin-left: 80px;
      .userName {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 10px;
        .userIdentity {
          color: #999;
        }
      }
    }
  }
}
// 数据进度条
.dataProgress {
  height: 252px;
  .header {
    padding-bottom: 20px;
    // line-height: ;
    color: #303133;
    font-size: 18px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  .progress {
    padding-top: 20px;
    span {
      font-size: 16px;
    }
  }
}
// 右上可视化数据
.el-row {
  margin-bottom: 20px;
}
.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
  .grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }
  .grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
    .grid-num {
      font-size: 30px;
      font-weight: bold;
    }
  }
}
.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}
.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}
.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

// 文章管理
.crumbs {
  // font-size: 30px;
  margin-bottom: 20px;
  .el-breadcrumb-item {
    font-size: 30px;
  }
}
// schart 图
.schart {
  width: 100%;
  height: 300px;
}
</style>
