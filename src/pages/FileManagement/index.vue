<template>
  <div>
    <i
      class="el-icon-document-copy"
      style="font-size: 30px; margin-bottom: 20px"
      >文章管理</i
    >
    <el-card
      class="box-card"
      style="font-size: 16px; margin-bottom: 20px"
      v-show="!checkout"
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
          <el-button type="primary" size="small" @click="changeAjak"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>

    <el-card v-show="!checkout">
      <el-table :data="qryArticle" style="width: 100%" border stripe>
        <el-table-column prop="id" label="ID" width="80"> </el-table-column>
        <el-table-column prop="cateName" label="分类" width="120">
        </el-table-column>
        <el-table-column prop="author" label="作者" width="120">
        </el-table-column>
        <el-table-column prop="title" label="标题" width="width">
        </el-table-column>
        <el-table-column
          prop="prop"
          label="日期"
          width="width"
          cell-click="sorting"
        >
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
            <el-button type="danger" size="small" @click="deleteItem($index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-size="pageSize"
        :pager-count="pageNo"
        layout="prev, pager, next"
        :total="total"
      >
      </el-pagination>
    </el-card>

    <Editor v-show="checkout"></Editor>
  </div>
</template>

<script>
import Editor from "./Editor";
export default {
  name: "FileManagement",
  components: {
    Editor,
  },
  data() {
    return {
      // 分类列表
      qryCategory: [],
      // 每页个数
      pageSize: 10,
      // 页数
      pageNo: 1,
      // 总数
      total: 20,
      // 收集数据
      formInline: {
        cate: "", //分类
        type: false, //置顶
        pageNo: "", //类型
        title: "", //输入内容
      },

      // 文章列表
      qryArticle: [],

      // 是否显示文章详情页
      checkout: false,

      // 时间
      timeList: [],
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
      let dataInfo = {};
      // 发送请求获取文章所有分类
      const result = await this.$API.reqQryCategory(dataInfo);
      this.qryCategory = result.resultData;
    },

    // 获取文章列表
    async getQryArticle(cate = 0) {
      let info = {};
      info.cate = cate;
      info.pageNo = this.pageNo;
      info.pageSize = this.pageSize;
      const result = await this.$API.reqQryArticle(info);
      this.qryArticle = result.resultData;
    },

    // 根据分类获取数据
    changeAjak() {
      let { cate, pageNo, title } = this.formInline;
      this.getQryArticle(cate, pageNo);
    },

    // 删除文章‘
    async deleteItem(index) {
      let { userInfo } = this;
      userInfo.index = index;
      const result = await this.$API.reqDelArticle(userInfo);
    },

    // 排序
    sorting() {
      console.log(111);
    },

    // 格式化时间
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D =
        (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
      var h =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
      var m =
        (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
        ":";
      var s =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    },
  },
  watch: {
    qryArticle: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          this.qryArticle.forEach((item) => {
            this.timeList.push(item.posttime);
          });
          for (let index = 0; index < this.timeList.length; index++) {
            this.qryArticle[index].time = this.timeList[index]
          }
        });
      },
    },
  },
};
</script>

<style lang='less' scoped>
</style>
