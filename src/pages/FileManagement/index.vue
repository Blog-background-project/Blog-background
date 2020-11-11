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
          <el-select v-model="formInline.cate" size="small" placeholder="分类">
            <el-option label="任意" value="0"></el-option>
            <el-option
              v-for="item in qryCategory"
              :key="item.cateID"
              :label="item.cateName"
              :value="item.cateID"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="类型">
          <el-select
            v-model="formInline.pageNo"
            size="small"
            placeholder="类型"
          >
            <el-option label="任意" value="0"></el-option>
            <el-option label="公开" value="1"></el-option>
            <el-option label="草稿" value="2"></el-option>
            <el-option label="审核" value="3"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-checkbox-group v-model="formInline.type">
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
      <el-table :data="qryArticle" style="width: 100%" border stripe>
        <el-table-column prop="id" label="ID" width="80"> </el-table-column>
        <el-table-column prop="cateName" label="分类" width="120">
        </el-table-column>
        <el-table-column prop="author" label="作者" width="120">
        </el-table-column>
        <el-table-column prop="title" label="标题" width="width">
        </el-table-column>
        <el-table-column prop="prop" label="日期" width="width">
          <template slot-scope="{ row, $index }"> </template>
        </el-table-column>
        <el-table-column prop="commNums" label="评论" width="80">
        </el-table-column>
        <el-table-column prop="viewNums" label="阅读量" width="80">
        </el-table-column>
        <el-table-column prop="cover" label="状态" width="120">
          <template slot-scope="{ row, $index }">
            <p v-if="row.cover === '' || row.cover === 0">公开</p>
            <p v-if="row.cover === 1">草稿</p>
            <p v-if="row.cover === 2">审查</p>
          </template>
        </el-table-column>
        <el-table-column prop="prop" label="操作" width="160">
          <template slot-scope="{ row, $index }">
            <el-button type="primary" size="small">修改</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </template>
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
      // 分类列表
      qryCategory: [],
      // 收集数据
      formInline: {
        cate: "", //分类
        type: false, //置顶
        pageNo: "", //类型
        title: "", //输入内容
      },
      userInfo: {
        username: "2506377990",
        usertoken: "45a8d6ebd5cc653eca44b1e5e6e846d3",
      },
      // 文章列表
      qryArticle: [],
    };
  },
  mounted() {
    // 获取文章列表
    this.getQryArticle();
    // 获取文章所有分类
    this.getQryCategory();
  },
  methods: {
    // 获取文章所有分类
    async getQryCategory() {
      // 发送请求获取文章所有分类
      const result = await this.$API.reqQryCategory(this.userInfo);
      this.qryCategory = result.resultData;
    },

    async getQryArticle(cate = 0, pageSize = 10, pageNo = 1) {
      let info = this.userInfo;
      info.cate = cate;
      info.pageNo = pageNo;
      info.pageSize = pageSize;
      const result = await this.$API.reqQryArticle(info);
      // console.log(result);
      this.qryArticle = result.resultData;
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
