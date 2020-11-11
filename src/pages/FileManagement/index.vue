<template>
  <div class="FMContainer">
    <el-card class="box-card" style="font-size: 16px">
      搜索：分类
      <el-select placeholder="请选择" style="margin: 0 20px" size="small">
        <el-option
          v-for="item in qryCategory"
          :key="item.cateID"
          :label="item.cateName"
          :value="item"
          v-model="cateName"
        >
        </el-option>
      </el-select>
      类型
      <el-select placeholder="请选择" style="margin-right: 20px" size="small">
        <!-- <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option> -->
      </el-select>

      <el-checkbox style="margin-right: 20px">置顶</el-checkbox>

      <el-select
        size="small"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        style="margin-right: 20px"
      >
        <!-- <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option> -->
      </el-select>

      <el-button type="primary" size="mini">提交</el-button>
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
      qryCategory:{
        qryCategoryItem:""
      },
      cateName:""
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

      let data = {}
      data.username = "2506377990";
      data.usertoken = "24d1e207600980760e3297e6db20e970";
      // 发送请求获取文章所有分类
      const result = await this.$API.reqQryCategory(data);
      this.qryCategory = result.resultData
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
