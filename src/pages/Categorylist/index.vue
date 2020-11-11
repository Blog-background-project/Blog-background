<template>
  <div>
    <div class="searchContainer">
      <el-row :gutter="20">
        <!-- <el-col :span="20"><div class="grid-content bg-purple"></div></el-col> -->
        <el-col :span="20">
          <el-input
            v-model="input"
            placeholder="请输入分类名称"
            style="width: 200px; padding-right: 20px"
          ></el-input>
          <el-button type="primary">搜索</el-button>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="showCon">
      <el-table :data="tableData" border style="width: 100%; margin-top: 20px">
        <el-table-column prop="id" label="分类ID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="分类名称" width="180">
        </el-table-column>
        <el-table-column prop="othername" label="分类别名"> </el-table-column>
        <el-table-column prop="other" label="操作">
          <el-button type="primary" class="el-icon-edit">修改</el-button>
          <el-button type="danger" class="el-icon-delete">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination
        style="margin-top: 20px"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="100"
        layout=" prev, pager, next, jumper,->, sizes,total"
        :total="400"
        :hide-on-single-page="value"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categorylist",
  data() {
    return {
      input: "",
      currentPage1: 1,
      // value用来当只有一页时隐藏分页
      value: false,
      tableData: [
        {
          id: "1234",
          name: "博客",
          othername: "BOKE",
        },
        {
          id: "1234",
          name: "博客",
          othername: "BOKE",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
