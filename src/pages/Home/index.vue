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
      </el-col>
      <!-- 右侧占16份 -->
      <el-col :span="16">
        <el-card shadow="hover">
          <div slot="header"></div>
          <div></div>
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
.userContainer {
  padding: 20px;
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
</style>
