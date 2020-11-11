<template>
  <div class="tagpageContainer">

    <el-card>
      <el-button type="primary" size="small">添加标签</el-button>
      <el-table
          :data="tagList"
          ref="singleTable"
          highlight-current-row
          border
          style="width: 100%">
        <el-table-column
            label="标签ID"
            property="tagId"
            align="center"
            width="100">
        </el-table-column>
        <el-table-column
            property="tagName"
            label="标签名称">
        </el-table-column>
        <el-table-column
            property="tagAlias"
            label="标签别名"
            align="center"
            width="200">
        </el-table-column>
        <el-table-column
            property="name"
            label="文章数量"
            align="center"
            width="200">
        </el-table-column>
        <el-table-column
            property="name"
            width="200"
            align="center"
            label="操作">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Tagpage",
  data() {
    return {
      tagList: []
    }
  },
  mounted() {
    //发请求获取标签列表
    this.getQryTag()
  },
  methods: {
    //获取标签列表函数
    async getQryTag() {
      let result = await this.$API.reqQryTag({
        "username": "2506377990",
      })
      // "usertoken": "鉴权token"
      if (result.resultDesc.errCode === 200) {
        this.tagList = result.resultData
      }
    },
    //  获取文章列表
    async getQryArticle() {
      let result = await  this.$API.reqQryArticle()
    }
  }
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
