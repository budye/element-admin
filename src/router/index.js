import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Login from '@/views/Login.vue'

const Layout = resolve=>{require(['@/views/Layout.vue'],resolve)};
const Dashboard = resolve=>{require(['@/views/Dashboard.vue'],resolve)};
const Profile = resolve=>{require(['@/views/my/Profile.vue'],resolve)};
const List = resolve=>{require(['@/views/forms/List.vue'],resolve)};
const Forms = resolve=>{require(['@/views/forms/Forms.vue'],resolve)};

const routes = [
  {path: '/', component: Login, name: 'login'},
  {path: '/dashboard', component: Layout, children: [{path: '/', component: Dashboard}]},
  {path: '/my', component: Layout, children: [{path: 'profile', component: Profile}]},
  {path: '/list', component: Layout, children: [{path: '/', component: List}]},
  {path: '/forms', component: Layout, children: [{path: '/', component: Forms}]}
];

const router = new Router({routes: routes});

export default router
