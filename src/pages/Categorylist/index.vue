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
          <el-button type="primary" @click="dialogFormVisible = true"
            >添加</el-button
          >
          <el-dialog title="分类编辑 " :visible.sync="dialogFormVisible">
            <el-form :model="form" style="width: 80%" ref="form">
              <el-form-item
                label="名称"
                :label-width="formLabelWidth"
                prop="cateName"
              >
                <el-input v-model="form.cateName" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="别名" :label-width="formLabelWidth">
                <el-input
                  v-model="form.cateAlias"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="排序" :label-width="formLabelWidth">
                <el-input
                  v-model="form.cateOrder"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="父分类" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="无">
                  <el-option
                    :label="itemName.cateName"
                    :value="itemName.cateID"
                    v-for="itemName in categoryInfo"
                    :key="itemName.cateID"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="addDialogAction"
                >确 定</el-button
              >
            </div>
          </el-dialog>
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
              @click="showDialogAction(row)"
            ></el-button>
            <el-button
              style="margin-left: 5px"
              type="danger"
              class="el-icon-delete"
              size="mini"
              title="删除"
              @click="deletCategory(row)"
            ></el-button>
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
import { MessageBox } from "element-ui";
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
      // dialog表单
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        cateName: "", //名称
        cateAlias: "", //别名
        cateOrder: 0, //排名
        region: "",
        // delivery: false,
        // type: [],
        // resource: "",
        // desc: "",
      },
      formLabelWidth: "120px",
      // ruleForm: {
      //   cateName: "",
      // },
      rules: {
        //验证规则
        name: [{ required: true, message: "请输入分类名称", trigger: "blur" }],
      },
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

    // 请求
    async getQryCategory(data, pagee = 1) {
      this.page = pagee;
      let { page, limit } = this;
      let result = await this.$API.reqQryCategory({ data });
      // let result = await this.$API.reqQryCategory({ data }, page, limit);
      if (result.resultDesc.errCode === 200) {
        this.categoryInfo = result.resultData;
        this.total = result.resultData.length;
        // console.log(page, limit);
      }
    },

    // dialog点击添加的逻辑
    addDialogAction() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          // 获取参数
          let categoryInfo = {
            cateItem: this.form, //!!!!!!!!!!!!!!
          };
          // 整理参数
          // 发请求
          let result = await this.$API.reqAddCategory(categoryInfo);
          if (result.resultDesc.errCode === 200) {
            // 成功
            // 提示添加成功
            // this.$message.success(`${formLis}`)
            this.$message.success(
              `${categoryInfo.cateItem.cateID ? "修改" : "添加"}成功`
            );
            this.dialogFormVisible = false;
            this.getQryCategory();
          } else {
            // 失败
            this.$message.error(
              `${categoryInfo.cateItem.cateID ? "修改" : "添加"}失败`
            );
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 修改的逻辑
    showDialogAction(row) {
      this.dialogFormVisible = true;
      this.form = { ...row };
    },
    // 处理删除的回调
    deletCategory(row) {
      // 弹框询问确定要删除吗？
      this.$confirm("是否要删除该分类?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          // 成功-发请求并且提示，重发请求并返回页面
          let result = await this.$API.reqDelCategory(row);
          if (result.resultDesc.errCode === 200) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getQryCategory();
          } else {
            this.$message.error("删除失败");
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
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
