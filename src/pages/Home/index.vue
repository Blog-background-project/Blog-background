<template>
  <div>
    <!-- 整体使用栅格系统 -->
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
          <div class="header">语言详情</div>
          <div></div>
        </el-card>
      </el-col>
      <!-- 右侧占16份 -->
      <el-col :span="16">
        <el-card shadow="hover">
          <div slot="header"></div>
          <div>
            Vue
            <el-progress :percentage="71.3" color="#42b983"></el-progress>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Home",
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
    .avatar{
    }
    .userInfoList{
      margin-left: 80px;
      .userName{
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 10px;
        .userIdentity{
          color: #999;
        }
      }
    }
  }
}
// 数据进度条
.dataProgress {
  height: 252px;
  .header{
    padding: 0px 20px 20px;
    // line-height: ;
    color: #303133;
    font-size: 18px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
}
</style>
