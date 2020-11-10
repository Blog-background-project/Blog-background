<template>
  <div>
    <div class="searchContainer">
      <el-input
        v-model="input"
        placeholder="请输入分类名称"
        style="width: 200px; margin-top: 20px; padding: 0 20px"
      ></el-input>
      <el-button type="primary">搜索</el-button>
      <el-button type="primary" class="addCate">添加</el-button>
    </div>
    <div class="showCon">表单</div>
    <div class="page">分页器</div>
  </div>
</template>

<script>
export default {
  name: "Categorylist",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="less" scoped>
.addCate {
  float: right;
}
</style>
