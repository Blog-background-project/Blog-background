<template>
  <div class="wrapper">
    <Header></Header>
    <Navigation></Navigation>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      collapse: false,
    };
  },
  created() {
    this.$Bus.$on("collapse-content", (msg) => {
      this.collapse = msg;
    });
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left 0.3s ease-in-out;
    transition: left 0.3s ease-in-out;
    background: #f0f0f0;

    .content {
      width: auto;
      height: 100%;
      padding: 10px;
      overflow-y: scroll;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    &.content-collapse {
      left: 65px;
    }
  }
}
</style>
