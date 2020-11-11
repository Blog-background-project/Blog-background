<template>
  <div class="FMContainer">
    <el-card class="box-card" style="font-size: 16px; margin-bottom: 20px">
      <i
        class="el-icon-document-copy"
        style="font-size: 30px; margin-bottom: 20px"
        >文章管理</i
      >

      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="搜索：分类">
          <el-select
            v-model="formInline.cate"
            size="small"
            placeholder="分类"
          >
            <el-option
              v-for="(item) in qryCategory"
              :key="item.cateID"
              :label="item.cateName"
              :value="item.cateID"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="类型">
          <el-select
            v-model="formInline.type"
            size="small"
            placeholder="类型"
          >
            <el-option label="区域一" value="shanghai"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-checkbox-group v-model="formInline.pageNo">
            <el-checkbox label="置顶" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item>
          <el-input v-model="formInline.title" size="small"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" size="small">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <el-table style="width: 100%" border stripe>
        <el-table-column type="index" label="ID" width="60"> </el-table-column>
        <el-table-column prop="prop" label="分类" width="100">
        </el-table-column>
        <el-table-column prop="prop" label="作者" width="width">
        </el-table-column>
        <el-table-column prop="prop" label="标题" width="width">
        </el-table-column>
        <el-table-column prop="prop" label="日期" width="width">
        </el-table-column>
        <el-table-column prop="prop" label="评论" width="width">
        </el-table-column>
        <el-table-column prop="prop" label="状态" width="width">
        </el-table-column>
        <el-table-column prop="prop" label="操作" width="width">
        </el-table-column>
      </el-table>
      <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "FileManagement",
  data() {
    return {
      qryCategory: [],
      formInline: {
        cate: "",//分类
        type: "",//类型
        pageNo:"",//是否置顶
        title:"",//输入内容
      },
    };
  },
  mounted() {
    this.getQryCategory();
  },
  methods: {
    // 获取文章所有分类
    async getQryCategory() {
      // 从 Cookies 当中取出用户名和 usertoken
      // const str = Response.Cookies["username"].Value.ToString();

      let data = {};
      data.username = "2506377990";
      data.usertoken = "c92455c2713e1a9cceb320a0828c2e7e";
      // 发送请求获取文章所有分类
      const result = await this.$API.reqQryCategory(data);
      this.qryCategory = result.resultData;
    },
  },
};
</script>

<style lang='less' scoped>
.FMContainer {
  width: 100%;
  height: 100%;
}
</style>
