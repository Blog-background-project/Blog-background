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
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="分类ID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="分类名称" width="180">
        </el-table-column>
        <el-table-column prop="othername" label="分类别名"> </el-table-column>
        <el-table-column prop="other" label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              class="el-icon-edit"
              size="mini"
              title="修改"
            ></el-button>
            <el-popconfirm
              title="这是一段内容确定删除吗？"
              :ref="`popcover-${scope.$index}}`"
            >
              <el-button
                style="margin-left: 5px"
                slot="reference"
                type="danger"
                class="el-icon-delete"
                size="mini"
                @click="handle"
              ></el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
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
      currentPage1: 1, //分页器当前页
      value: false, // value用来当只有一页时隐藏分页
      //表单的值
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
    // 分页器处理每页的回调
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 分页器处理当前页的回调
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 处理删除的回调
    handle() {
      console.log(123);
    },
    // 请求
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
