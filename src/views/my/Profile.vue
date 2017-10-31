<template>
  <div>
    <el-row class="breadcrumb">
      <el-col :span="4"><h3>个人设置</h3></el-col>
      <el-col :span="20">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>用户中心</el-breadcrumb-item>
          <el-breadcrumb-item>个人设置</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <div slot="header" class="center">
            <img src="../../assets/avatar.png">
            <h1>Administrator</h1>
          </div>
          <div>
            <small>Email</small>
            <h6>test@test.com</h6>
            <small>Phone</small>
            <h6>+86 15966668888</h6>
            <small>Address</small>
            <h6>中国辽宁省大连市XX路XX号-901</h6>
          </div>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-tabs v-model="tableIndex" type="border-card">
          <el-tab-pane label="个人资料" name="userInfo">
            <el-form>
              <el-form-item label="Email">
                <el-input placeholder="Email" value="test@test.com"></el-input>
              </el-form-item>
              <el-form-item label="Phone">
                <el-input placeholder="Phone" value="+86 15966668888"></el-input>
              </el-form-item>
              <el-form-item label="Address">
                <el-input placeholder="Address" value="中国辽宁省大连市XX路XX号-901"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">更新资料</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="修改密码" name="changePass">
            <el-form>
              <el-form-item label="原密码">
                <el-input placeholder="原密码" type="password"></el-input>
              </el-form-item>
              <el-form-item label="新密码">
                <el-input placeholder="新密码" type="password"></el-input>
              </el-form-item>
              <el-form-item label="确认新密码">
                <el-input placeholder="确认新密码" type="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">修改密码</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: "Profile",
    data() {
      return {
        tableIndex: 'userInfo'
      };
    },
    methods: {}
  }
</script>
