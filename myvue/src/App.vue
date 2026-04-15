<script setup>
 // js
 import { getUserList } from "./api/index.js";
 import { ref, onMounted } from "vue";
const tableData = ref([]);

onMounted(() => {
    getUserList().then((res) => {
        console.log(res.data.data);
        tableData.value = res.data.data;
    });
})

// 删除函数
// const handleDelete = () => {
//     console.log("删除");
//     deleteById().then((res) => {
//         console.log(res);
//     });
// }
</script>
<template>
    <div class="app">
        <el-card>
            <h4>用户管理系统</h4>
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="序号" width="180" >
                    <template #default="scope">
                        <el-tag>{{ scope.$index + 1 }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="id" label="id" width="180" />
                <el-table-column prop="username" label="用户名" width="180"/>
                <el-table-column prop="email" label="邮件" width="180"/>
                <el-table-column label="操作" width="180">
                    <template #default="scope">
                        <el-button type="primary" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button type="danger" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<style scoped>
h4{
    font-size: 20px;
    font-family: "黑体";
}
</style>