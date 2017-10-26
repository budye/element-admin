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
            <el-col :span="4">
                <el-card>
                  <img src="../../assets/avatar.png" alt="">
                    <el-form>
                        <el-form-item label="关键词">
                            <el-input placeholder="关键词"></el-input>
                        </el-form-item>
                        <el-form-item label="标签">
                            <el-input placeholder="标签"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary">查询</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
            <el-col :span="20">
                <el-tabs v-model="tableIndex" type="border-card">
                    <el-tab-pane label="个人资料" name="userInfo">个人资料</el-tab-pane>
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
