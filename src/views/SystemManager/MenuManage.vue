<template>
  <div class="table_container_menu">
    <el-tree
      :data="menuData"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
    >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span class="common-span">
          <el-button type="text" size="mini" @click="() => append(data)">添加</el-button>
          <el-button type="text" size="mini" @click="() => update(node,data)">修改</el-button>
          <el-button type="text" size="mini" @click="() => remove(node, data)">删除</el-button>
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: []
    };
  },
  created() {
    this.getRequest("/system/permissions")
      .then(result => {
          this.menuData=this.buildTreeNode(result.data.result);
      })
      .catch(err => {});
  },
  methods: {
    buildTreeNode(data) {
      let treeNode = [];
      for (let index in data) {
        let item = data[index];
        treeNode[index] = {
          id: item.id !== "" ? item.id : 0,
          label: item.name,
          setFlag: item.setFlag,
          enable: item.enable,
          parentId: item.parentId,
          permission: item.permission,
          resourceType: item.resourceType,
          orderIndex: item.orderIndex,
          url: item.url
        };
      
        if (item.childList) {
          treeNode[index]["children"] = this.buildTreeNode(item.childList);
        }
      }
      return treeNode;
    }
  }
};
</script>

<style>
.table_container_menu {
  padding: 35px 40px 30px;
  background: #fff;
  border-radius: 2px;
 
}
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 100px;
  }
  .common-span{
      font-size: 14px;
  }
</style>