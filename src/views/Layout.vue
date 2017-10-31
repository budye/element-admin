<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header>
        <div class="logo">
          <h1>Admin</h1>
        </div>
        <div class="header-nav">
          <el-menu mode="horizontal" background-color="#1976D2" text-color="#ffffff" active-text-color="#ffffff" :router="true">
            <el-submenu index="1">
              <template slot="title"><span>消息</span>
                <el-badge :value="3"/>
              </template>
              <el-menu-item index="1-1">您的请假申请已批准</el-menu-item>
              <el-menu-item index="1-2">您的本月工资已发放</el-menu-item>
              <el-menu-item index="1-3">您有一个编码任务已经发送到您邮件中</el-menu-item>
            </el-submenu>
            <el-submenu index="my">
              <template slot="title"><img src="../assets/avatar.png" style="width:30px;"> Administrator</template>
              <el-menu-item index="/my/profile"><i class="fa fa-fw fa-cog"></i> 个人设置</el-menu-item>
              <el-menu-item index="/signOut"><i class="fa fa-fw fa-sign-out"></i> 安全退出</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-header>
      <el-container>
        <el-aside width="240px">
          <el-menu default-active="dashboard" :router="true">
            <el-menu-item index="/dashboard">
              <i class="fa fa-fw fa-dashboard"></i>
              <span slot="title">Dashboard</span>
            </el-menu-item>
            <el-submenu index="forms">
              <template slot="title">
                <i class="fa fa-fw fa-wpforms"></i>
                <span slot="title">常规界面</span>
              </template>
              <el-menu-item index="/forms">
                <i class="fa fa-fw fa-edit"></i>
                <span slot="title">表单</span>
              </el-menu-item>
              <el-menu-item index="/list">
                <i class="fa fa-fw fa-search"></i>
                <span slot="title">查询</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    name: "App"
  }
</script>
