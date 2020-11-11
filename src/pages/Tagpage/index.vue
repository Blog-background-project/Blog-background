<template>
  <div class="tagpageContainer">

    <el-card>
      <el-button type="primary" size="small ">添加标签</el-button>
      <el-table
          ref="singleTable"
          highlight-current-row
          border
          style="width: 100%">
        <el-table-column
            type="index"
            width="50">
        </el-table-column>
        <el-table-column
            property="date"
            label="日期"
            width="120">
        </el-table-column>
        <el-table-column
            property="name"
            label="姓名"
            width="120">
        </el-table-column>
        <el-table-column
            property="address"
            label="地址">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Tagpage"
}
</script>

<style lang="less" scoped>
.tagpageContainer {
  /deep/ .el-card {
    .el-card__body {
      .el-button {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
