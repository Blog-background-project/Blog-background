<template>
  <div class="tagpageContainer">

    <el-card>
      <el-button type="primary" size="small" @click="dialogFormVisible = true">添加标签</el-button>
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
            width="200"
            align="center"
            label="操作">
        </el-table-column>
      </el-table>
      <el-dialog title="添加标签" :visible.sync="dialogFormVisible" width="400px">
        <el-form :model="addTagParams">
          <el-form-item label="标签名称" label-width="80px">
            <el-input v-model="addTagParams.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="标签别名" label-width="80px">
            <el-input v-model="addTagParams.alias" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addTag">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Tagpage",
  data() {
    return {
      dialogFormVisible: false,
      tagList: [],
      addTagParams: {
        username: "2506377990",
        name: "",
        alias: "",
        // usertoken: "鉴权token"
      }
    }
  },
  mounted() {
    //发请求获取标签列表
    this.getQryTag()
  },
  methods: {
    //添加标签的回调
    async addTag() {
      let result = await this.$API.reqAddTag(this.addTagParams)
      if (result.resultDesc.errCode === 200) {
        this.tagList = result.resultData
        this.dialogFormVisible = false
        //重写发请求刷新列表
        this.getQryTag()
        return
      }
    },
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
      let result = await this.$API.reqQryArticle()
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
