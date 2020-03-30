<template>
<div class="sidebar">
  <el-menu class="el-menu-vertical-demo" router>
    <template v-for="menu in menuList">
      <template v-if="menu.childList.length!==0">
        <el-submenu :index="menu.url">
          <template slot="title">{{menu.name}}</template>
          <el-menu-item v-for="child in menu.childList" :index="child.url">{{child.name}}</el-menu-item>
        </el-submenu>
      </template>
      <el-menu-item v-else :index="menu.url">{{menu.name}}</el-menu-item>
    </template>
  </el-menu>
</div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [
        {
          name: "测试",
          url: "asdf",
          childList: [
            {
              name: "测试子菜单",
              url: "/menuManage"
            }
          ]
        },
        {
          name: "测试",
          url: "/login",
          childList:[]
        }
      ]
    };
  }
};
</script>
<style>

</style>