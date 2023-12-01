<!-- <template>
  <header class="container">
    <el-button text @click="table = true"
      >Open Drawer with nested table</el-button
    >
    <el-button text @click="dialog = true"
      >Open Drawer with nested form</el-button
    >
    <el-drawer
      v-model="table"
      title="I have a nested table inside!"
      direction="rtl"
      size="50%"
    >
      <el-table :data="gridData">
        <el-table-column property="date" label="Date" width="150" />
        <el-table-column property="name" label="Name" width="200" />
        <el-table-column property="address" label="Address" />
        <el-table-column property="title" label="Title" />
      </el-table>
    </el-drawer>

    <el-drawer
      ref="drawerRef"
      v-model="dialog"
      title="I have a nested form inside!"
      :before-close="handleClose"
      direction="ltr"
      class="demo-drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="Name" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="Area" :label-width="formLabelWidth">
            <el-select
              v-model="form.region"
              placeholder="Please select activity area"
            >
              <el-option label="Area1" value="shanghai" />
              <el-option label="Area2" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">Cancel</el-button>
          <el-button type="primary" :loading="loading" @click="onClick">{{
            loading ? "Submitting ..." : "Submit"
          }}</el-button>
        </div>
      </div>
    </el-drawer>
  </header>
  <router-link to="/">Home</router-link> |
  <router-link to="/login">login</router-link> |
  <router-link to="/about">about</router-link> |
  <router-link to="/counter">Counter</router-link>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { ElDrawer, ElMessageBox } from "element-plus";

const formLabelWidth = "80px";
let timer = 0;

const table = ref(false);
const dialog = ref(false);
const loading = ref(false);

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const gridData = [
  {
    date: "2016-05-02",
    name: "Peter Parker",
    address: "Queens, New York City",
    title: "defender",
  },
  {
    date: "2016-05-04",
    name: "Peter Parker",
    address: "Queens, New York City",
    title: "defender",
  },
  {
    date: "2016-05-01",
    name: "Peter Parker",
    address: "Queens, New York City",
    title: "defender",
  },
  {
    date: "2016-05-03",
    name: "Peter Parker",
    address: "Queens, New York City",
    title: "defender",
  },
];

const drawerRef = ref<InstanceType<typeof ElDrawer>>();
const onClick = () => {
  drawerRef.value!.close();
};

const handleClose = (done) => {
  if (loading.value) {
    return;
  }
  ElMessageBox.confirm("Do you want to submit?")
    .then(() => {
      loading.value = true;
      timer = setTimeout(() => {
        done();
        setTimeout(() => {
          loading.value = false;
        }, 400);
      }, 2000);
    })
    .catch(() => {});
};

const cancelForm = () => {
  loading.value = false;
  dialog.value = false;
  clearTimeout(timer);
};
</script>
-->
<template>
  <router-view></router-view>
</template>

<script setup></script>

<style scoped></style>
