<script lang="ts">
import { defineComponent } from 'vue'
import back from '~/components/back/dailyBack.vue'
export default defineComponent({
  components: {
    back,
  },
  setup() {
    const router = useRouter()
    return {
      router,
    }
  },
})
</script>

<template>
  <div class="bg" />
  <div class="W">
    <!-- 标题部分开始 -->
    <div class="title">
      <div class="border-line-left" />
      <h1 class="titleword">
        课程信息管理系统
      </h1>
      <div class="border-line-right" />
    </div>
    <!-- 标题部分结束 -->
    <!-- 新增删除按钮开始 -->
    <div class="chioce1">
      <button class="btn-add">
        新增
      </button>
      <button class="btn-del">
        删除
      </button>
      <button class="btn-sort">
        排序
      </button>
      <button class="btn-search">
        搜索
      </button>
    </div>
    <!-- 新增删除按钮结束 -->

    <!-- 主界面开始 -->
    <div class="Mainpage">
      <table class="mainpage">
        <!-- 主信息部分开始 -->
        <thead class="MessageBoard">
          <tr>
            <th><input type="checkbox" class="check-all"></th>
            <th>序号</th>
            <th>课程编号</th>
            <th>课程名称</th>
            <th>上课地点</th>
            <th>课程教师</th>
            <th>电子资料</th>
            <th>纸质资料</th>
            <th>上课时间</th>
            <th>下课时间</th>
            <th>考试信息</th>
            <th>操作</th>
          </tr>
        </thead>
        <!-- 主信息部分结束 -->
        <tbody />
      </table>

      <!-- 信息收集表开始 -->
      <div class="info">
        <!-- 表头部分开始 -->
        <div class="info-title">
          <P class="info-title-p">
            新增课程信息
          </P>
        </div>
        <!-- 表头部分结束 -->

        <!-- 表格主体部分开始 -->
        <div class="info-main">
          课程编号<input type="text"><br><br>
          课程名称<input type="text"><br><br>
          上课地点<input type="text"><br><br>
          课程教师<input type="text"><br><br>
          电子资料<input type="text"><br><br>
          纸质资料<input type="text"><br><br>
          上课时间<input type="text"><br><br>
          下课时间<input type="text"><br><br>
          考试信息<input type="text"><br><br>
        </div>
        <!-- 表格主体部分开始 -->
        <!-- 按钮开始 -->
        <div class="chioce3">
          <button class="info-button-1">
            提交
          </button>
          <button class="info-button-2">
            取消
          </button>
        </div>
        <!-- 按钮结束 -->
      </div>

      <!-- 查看信息表开始 -->
      <div class="check_info">
        <!-- 表头部分开始 -->
        <div class="check_info-title">
          <P class="check_info-title-p">
            查看学生信息
          </P>
        </div>
        <!-- 表头部分结束 -->
        <!-- 主体部分开始 -->
        <div class="check_info-main">
          学号<input type="text"><br><br>
          姓名<input type="text"><br><br>
          学院<input type="text"><br><br>
          专业<input type="text"><br><br>
          年级<input type="text"><br><br>
          班级<input type="text"><br><br>
          年龄<input type="text"><br><br>
        </div>
        <!-- 主体部分结束 -->
        <!-- 按钮开始 -->
        <div class="chioce4">
          <button class="sure">
            确定
          </button>
        </div>
        <!-- 按钮开始 -->
      </div>
      <!-- 查看信息表结束 -->

      <!-- 修改信息表开始 -->
      <div class="change_info">
        <!-- 表头部分开始 -->
        <div class="change_info-title">
          <P class="change_info-title-p">
            修改学生信息
          </P>
        </div>
        <!-- 表头部分结束 -->
        <!-- 主体部分开始 -->
        <div class="change_info-main">
          课程编号<input type="text"><br><br>
          课程名称<input type="text"><br><br>
          上课地点<input type="text"><br><br>
          课程教师<input type="text"><br><br>
          电子资料<input type="text"><br><br>
          纸质资料<input type="text"><br><br>
          上课时间<input type="text"><br><br>
          下课时间<input type="text"><br><br>
          考试信息<input type="text"><br><br>
        </div>
        <!-- 主体部分开始 -->
        <!-- 按钮开始 -->
        <div class="chioce5">
          <button class="change_info-button-2">
            取消
          </button>
          <button class="change_info-button-1">
            保存
          </button>
        </div>
        <!-- 按钮开始 -->
      </div>
      <!-- 修改信息表结束 -->
    </div>
    <!-- 翻页界面开始 -->
    <div class="chioce2">
      <span class="showpage" />
      <button class="button-Previous">
        上一页
      </button>
      <button class="button-nextpage">
        下一页
      </button>
    </div>
    <!-- 翻页界面结束 -->
  </div>
  <back />
</template>

<style lang="css" scoped>
* {
    margin: 0;
    padding: 0;
}

a {
    color: red;
    text-decoration: underline;
}

.info-button-2:hover {
    background-color: #d9534f;
}

.info-button-1:hover {
    background-color: #5cb85c;
}

.sure:hover {
    background-color: #5cb85c;
}

.change_info-button-2:hover {
    background-color: #d9534f;
}

.change_info-button-1:hover {
    background-color: #5cb85c;
}

/* 设置弹框时的背景颜色 */
.bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #00000050;
    visibility: hidden;
    z-index: 1;
}

/* 信息收集表 */
.info {
    width: 551px;
    height: 452px;
    visibility: hidden;
    position: absolute;
    left: 524px;
    z-index: 2;
}

/* 表头 */
.info-title {
    width: 551px;
    height: 41px;
    color: #ffffff;
    background-color: #555555;
    font-size: 20px;
}

/* 表头文字 */
.info-title-p {
   margin-left: 20px;
   line-height: 41px;
}

/* 主体 */
.info-main {
    width: 404px;
    height: 440px;
    background-color: #fff;
    padding-left: 147px;
    padding-top: 20px;
    border: 1px solid #000;
}

.info-main input {
    /* display: block; */
    background-color: #ebebe4;
    margin-left: 80px;
}

/* 主信息 */
tbody td {
    height: 40px;
    text-align: center;
}

/* 选择栏 */
.chioce3 {
    width: 551px;
    height: 60px;
    border: 1px solid #000;
}

/* 表单按钮 */
.info-button-1 {
    width: 96px;
    height: 41px;
    float: right;
    margin-right: 30px;
    margin-top: 10px;
}

.info-button-2 {
    width: 96px;
    height: 41px;
    float: right;
    margin-right: 30px;
    margin-top: 10px;
}

/* 查看信息表 */
.check_info {
    width: 551px;
    height: 452px;
    visibility: hidden;
    position: absolute;
    left: 524px;
    z-index: 2;
}

/* 查看信息表表头 */
.check_info-title {
    width: 551px;
    height: 41px;
    color: #ffffff;
    background-color: #555555;
    font-size: 20px;
}

/* 查看信息表表头文字 */
.check_info-title-p {
   margin-left: 20px;
   line-height: 41px;
}

/* 查看信息表主体 */
.check_info-main {
    width: 404px;
    height: 334px;
    background-color: #fff;
    padding-left: 147px;
    padding-top: 20px;
    border: 1px solid #000;
}

.check_info-main input {
    background-color: #ebebe4;
    margin-left: 80px;
}

/* 查看信息表选择栏 */
.chioce4 {
    width: 551px;
    height: 60px;
    border: 1px solid #000;
}

/* 查看信息表表单按钮 */
.sure {
    width: 96px;
    height: 41px;
    float: right;
    margin-right: 30px;
    margin-top: 10px;
}

/* 修改信息表 */
.change_info {
    width: 551px;
    height: 452px;
    visibility: hidden;
    position: absolute;
    left: 524px;
    z-index: 2;
}

/* 修改信息表表头 */
.change_info-title {
    width: 551px;
    height: 41px;
    color: #ffffff;
    background-color: #555555;
    font-size: 20px;
}

/* 修改信息表表头文字 */
.change_info-title-p {
   margin-left: 20px;
   line-height: 41px;
}

/* 修改信息表主体 */
.change_info-main {
    width: 404px;
    height: 334px;
    background-color: #fff;
    padding-left: 147px;
    padding-top: 20px;
    border: 1px solid #000;
}

.change_info-main input {
    background-color: #ebebe4;
    margin-left: 80px;
}

/* 修改信息表选择栏 */
.chioce5{
    width: 551px;
    height: 60px;
    border: 1px solid #000;
}

/* 修改信息表表单按钮 */
.change_info-button-1 {
    width: 96px;
    height: 41px;
    float: right;
    margin-right: 30px;
    margin-top: 10px;
}

.change_info-button-2{
    width: 96px;
    height: 41px;
    float: right;
    margin-right: 30px;
    margin-top: 10px;
}

/* 网页 */
.W {
    width: 1600px;
    height: 770px;
    background-color: #f0ece9;
    border: 2px solid #b6b4b6;
}

/* title */
.title {
    width: 1202px;
    height: 63px;
    margin-left: 200px;
}

/* 顶部的文字 */
.titleword{
    width: 400px;
    height: 50px;
    display: inline-block;
    text-align: center;
    color: #999999;
    margin-top: 17px;
}

/* 顶部的线 */
.border-line-left{
    width: 400px;
    height: 30px;
    float: left;
    border-bottom: 4px solid #c3a080;
}

/* 顶部的线 */
.border-line-right{
    width: 400px;
    height: 30px;
    float: right;
    border-bottom: 4px solid #c3a080;
}

/* 新增 删除*/
.chioce1{
    height: 56px;
    width: 1202px;
    margin-left: 200px;
}

/* 新增 */
.btn-add{
    width: 96px;
    height: 41px;
    display: inline-block;
    color: white;
    background-color: #5cb85c;
    border: 1px solid black;
}

/* 删除 */
.btn-del{
    width: 96px;
    height: 41px;
    display: inline-block;
    color: white;
    background-color:#d9534f;
    border: 1px solid black;
}
.btn-sort{
    width: 96px;
    height: 41px;
    display: inline-block;
    color: white;
    background-color: #5cb85c;
    border: 1px solid black;
}
.btn-search{
    width: 96px;
    height: 41px;
    display: inline-block;
    color: white;
    background-color:#d9534f;
    border: 1px solid black;
}

/* 主界面 */
.Mainpage{
    height: 456px;
    width: 1202px;
}

/* 表格 */
.mainpage{
    text-align: center;
    border-collapse: collapse;
    width: 1202px;
    margin-left: 200px;
}

/* 信息提示栏 */
.MessageBoard{
    width:1202px;
    height: 56px;
    background-color: #dadee1;
}

/* 第一个小圆点按钮 */
.check-all {
    width: 12px;
    height: 12px;
    margin-left: 15px;
    background-color: #dedede;
    border: 1px solid black;
}

/* 余下的小圆点按钮 */
.last {
    width: 12px;
    height: 12px;
    margin-left: 15px;
    background-color: #dedede;
    border: 1px solid black;
    margin-top: 14px;
}

/* 第一行高度 */
.MessageBoard th{
    height: 55px;
}

   /* 奇数信息显示栏 */
.informationdisplaybar-evennumber{
    width: 1202px;
    height: 41px;
    background-color: #ffffff;
}

/* 偶数信息显示栏 */
.informationdisplaybar-oddnumber{
    width: 1202px;
    height: 41px;
    background-color: #eef1f8;
}

/* 翻页界面 */
.chioce2{
    height: 61px;
    width: 1202px;
    margin-left: 200px;
    position: relative;
}

/* 上一页 */
.button-Previous{
    width: 96px;
    height: 41px;
    display: inline-block;
    color: white;
    background-color: #5cb85c;
    border: 1px solid black;
    position:absolute;
    left: 1000px;
    top: 21px;
}

/* 下一页 */
.button-nextpage{
    width: 96px;
    height: 41px;
    display: inline-block;
    color: white;
    background-color:#d9534f;
    border: 1px solid black;
    position:absolute;
    left: 1106px;
    top: 21px;
}

/* 显示当前页数 */
.showpage{
    float: left;
    line-height: 62px;
}

</style>
