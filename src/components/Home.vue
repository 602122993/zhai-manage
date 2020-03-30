<template>
  <div class="wrapper">
    <el-container >
      <el-header>
        <v-head></v-head>
      </el-header>
      <el-contianer>
      <el-aside style="width:200px">
        <side-bar></side-bar>
      </el-aside>
      <el-main>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <!-- <v-tags></v-tags> -->
            <div class="content">
                <transition name="move" mode="out-in">
                        <router-view></router-view>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
      </el-main>
      </el-contianer>
    </el-container>
  </div>
</template>
<script>
import vHead from "./Header.vue";
import sideBar from "./SideBar.vue";
export default {
  components: {
    vHead,
    sideBar
  },
  data() {
    return {
      
    };
  }
};
</script>

<style scoped>
.el-container {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  bottom: 0;
}
.el-header {
  padding: 0;
  z-index: 1000;
  border: 1px solid red;
}

.el-header .fr {
  float: right;
}
.el-header .el-menu {
  border-bottom: none;
}
.content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
}

.content {
    width: auto;
    height: 100%;
    /* margin: 10px; */
    overflow-y: scroll;
    box-sizing: border-box;
    background-color: #ffffff;
}

.content-collapse {
    left: 65px;
}
.el-aside .el-menu {
  border-right: none;
}
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>