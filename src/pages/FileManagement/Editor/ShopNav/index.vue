<template>
  <div class="container">
    <div class="container_item">
      <div class="title">购买链接</div>
      <div class="input">
        <el-input placeholder=""></el-input>
      </div>
    </div>
    <div class="container_item">
      <div class="title">购买链接</div>
      <div class="input">
        <el-input placeholder=""></el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopNav",
};
</script>

<style lang='less' scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .container_item {
    display: flex;
    width: 50%;
  }
}
</style>
