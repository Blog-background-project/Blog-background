<template>
  <div>
    <i
      class="el-icon-document-copy"
      style="font-size: 30px; margin-bottom: 20px"
    >
      文章管理
    </i>
    <div>
      <el-card class="box-card" style="font-size: 16px; margin-bottom: 20px">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="搜索：分类">
            <el-select
              v-model="formInline.cate"
              size="small"
              placeholder="分类"
            >
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
              v-model="formInline.type"
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
            <el-checkbox-group v-model="formInline.checkbox">
              <el-checkbox label="置顶" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item>
            <el-input v-model="formInline.title" size="small"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" size="small" @click="changeAjak">
              提交
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>

      <el-card>
        <el-table
          height="380"
          highlight-current-row
          :data="qryArticle"
          style="width: 100%"
          border
          stripe
        >
          <el-table-column prop="id" label="ID" sortable width="80">
          </el-table-column>
          <el-table-column prop="cateName" label="分类" width="120">
          </el-table-column>
          <el-table-column prop="author" label="作者" width="120">
          </el-table-column>
          <el-table-column prop="title" label="标题" width="width">
          </el-table-column>
          <el-table-column prop="time" label="日期" width="width" sortable>
          </el-table-column>
          <el-table-column prop="commNums" label="评论" sortable width="80">
          </el-table-column>
          <el-table-column prop="viewNums" label="阅读量" sortable width="100">
          </el-table-column>
          <el-table-column prop="cover" label="状态" width="120">
            <template slot-scope="{ row, $index }">
              <p v-if="row.cover === '' || row.cover === $index">公开</p>
              <p v-if="row.cover === $index">草稿</p>
              <p v-if="row.cover === $index">审查</p>
            </template>
          </el-table-column>
          <el-table-column prop="prop" label="操作" width="160">
            <template slot-scope="{ row }">
              <el-button
                type="primary"
                size="small"
                @click="changeCheckout(row)"
                >修改</el-button
              >
              <el-popconfirm
                style="margin-left: 5px"
                @confirm="deleteItem(row)"
                title="这是一段内容确定删除吗？"
              >
                <el-button type="danger" size="small" slot="reference"
                  >删除</el-button
                >
              </el-popconfirm>
              <!-- <el-button type="danger" size="small" @click="deleteItem(row)"
                >删除</el-button
              > -->
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="total"
        >
        </el-pagination>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileManagement",
  data() {
    return {
      // 分类列表
      qryCategory: [],
      // 每页个数
      pageSize: 30,
      // 页数
      pageNo: 1,
      // 总数
      total: 0,
      // 收集数据
      formInline: {
        cate: "", //分类
        checkbox: false, //置顶
        type: "", //类型
        title: "", //输入内容
      },

      // 文章列表
      qryArticle: [],

      // 是否显示文章详情页
      // checkout: true,
    };
  },
  mounted() {
    // 获取文章列表
    this.getQryArticle();
    // 获取文章所有分类
    this.getQryCategory();
  },
  methods: {
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 修改
    changeCheckout(index) {
      this.$message({
        message: "功能正在开发中。。。。。",
        type: "warning",
      });
      // this.checkout = !this.checkout;
    },

    // 获取文章所有分类
    async getQryCategory() {
      let dataInfo = {};
      // 发送请求获取文章所有分类
      const result = await this.$API.reqQryCategory(dataInfo);
      this.qryCategory = result.resultData;
    },

    // 获取文章列表
    async getQryArticle(cate = 0, type = "") {
      // 整理数据发送请求
      let info = {};
      info.cate = cate;
      info.pageNo = this.pageNo;
      info.pageSize = this.pageSize;
      const result = await this.$API.reqQryArticle(info);

      // 储存数据到当前组件
      this.qryArticle = result.resultData;
      this.total = result.resultData.length;

      // 格式化时间
      this.formTime(result.resultData);

      //#region
      // 时间格式化
      // 定义一个数组用来储存每个数据的 posttime
      // let timeListT = [];
      // result.resultData.forEach((item) => {
      //   timeListT.push(item.posttime);
      // });
      // 格式化时间
      // let time = [];
      // timeListT.forEach((item) => {
      //   time.push(this.timestampToTime(item));
      // });
      // 讲格式化好的数据储存到 qryArticle 中
      // for (let i = 0; i < this.qryArticle.length; i++) {
      //   this.qryArticle[i].time = time[i];
      // }
      //#endregion
    },

    // 格式化时间
    formTime(List) {
      let timeListT = [];
      List.forEach((item) => {
        item.time = this.timestampToTime(item.posttime);
        // timeListT.push(this.timestampToTime(item.posttime))
        // timeListT.push(item.posttime);
      });

      //#region
      // let time = [];
      // timeListT.forEach((item) => {
      //   time.push(this.timestampToTime(item));
      // });
      // for (let i = 0; i < List.length; i++) {
      //   List[i].time = timeListT[i];
      // }
      //#endregion
    },

    // 根据分类获取数据
    changeAjak() {
      let { cate } = this.formInline;
      this.getQryArticle(cate);
    },

    // 删除文章
    async deleteItem(row) {
      let dataInfo = {};
      dataInfo.artId = row.id;
      const result = await this.$API.reqDelArticle(dataInfo);
      this.getQryArticle();
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

  //#region 监视
  // watch: {
  //   qryArticle: {
  //     immediate: true,
  //     handler() {
  //       this.$nextTick(() => {
  //         this.qryArticle.forEach((item) => {
  //           this.timeList.push(item.posttime);
  //         });
  //         let time = [];
  //         this.timeList.forEach((item) => {
  //           time.push(this.timestampToTime(item));
  //         });
  //         // console.log(time);
  //         for (let i = 0; i < this.qryArticle.length; i++) {
  //           this.qryArticle[i].time = time[i];
  //         }
  //       });
  //     },
  //   },
  // },
  //#endregion
};
</script>

<style lang='less' scoped>
</style>
