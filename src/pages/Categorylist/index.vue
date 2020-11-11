<template>
  <el-card class="box-card">
    <!-- 搜索区域和添加按钮 -->
    <div slot="header" class="clearfix">
      <el-row :gutter="20">
        <el-col :span="22">
          <el-input
            v-model="input"
            placeholder="请输入分类名称"
            style="width: 200px; padding-right: 20px"
          ></el-input>
          <el-button type="primary">搜索</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="primary">添加</el-button>
        </el-col>
      </el-row>
    </div>
    <!-- 内容展示区域 -->
    <div class="showCon">
      <el-table :data="categoryInfo" border style="width: 100%">
        <el-table-column
          prop="cateID"
          label="分类ID"
          width="100"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="cateName"
          label="分类名称"
          width="150"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="cateAlias"
          label="分类别名"
          width="150"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="cateUrl" label="类别路径"> </el-table-column>
        <el-table-column prop="other" label="操作" width="180" align="center">
          <!-- 作用域插槽 -->
          <template slot-scope="{ row, $index }">
            <el-button
              type="primary"
              class="el-icon-edit"
              size="mini"
              title="修改"
            ></el-button>
            <el-popconfirm title="你确定删除该分类吗？">
              <el-button
                style="margin-left: 5px"
                slot="reference"
                type="danger"
                class="el-icon-delete"
                size="mini"
                @click="deletCategory"
              ></el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination
        style="margin-top: 20px"
        @size-change="handleSizeChange"
        @current-change="getQryCategory"
        :current-page="page"
        :page-sizes="[3, 5, 10, 15]"
        :page-size="limit"
        layout=" prev, pager, next, jumper,->, sizes,total"
        :total="total"
        :hide-on-single-page="value"
      >
      </el-pagination>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "Categorylist",
  data() {
    return {
      input: "", //输入框收集的值
      page: 1, //分页器当前页
      limit: 3,
      total: 0,
      value: false, // value用来当只有一页时隐藏分页
      categoryInfo: [],
    };
  },
  mounted() {
    this.getQryCategory();
  },
  methods: {
    // 分页器处理每页的回调
    handleSizeChange(size) {
      this.limit = size;
      this.getQryCategory(this.page);
      // console.log(`${size}条每页`);
      // console.log("当前页", this.limit);
    },
    // 分页器处理当前页的回调
    handleCurrentChange(val) {
      console.log(`当前页${val}`);
    },
    // 处理删除的回调
    deletCategory() {
      console.log(123);
    },
    // 请求
    async getQryCategory(data, pagee = 1) {
      this.page = pagee;
      let { page, limit } = this;
      let result = await this.$API.reqQryCategory({ data });
      // let result = await this.$API.reqQryCategory({ data }, page, limit);
      if (result.resultDesc.errCode === 200) {
        this.categoryInfo = result.resultData;
        this.total = result.resultData.length;
        console.log(page, limit);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
