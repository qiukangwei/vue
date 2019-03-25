<template>
    <div id="addequipmentmodel">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="设备名称:">
          <el-input v-model="equipmentModel.emName"></el-input>
        </el-form-item>
        <el-form-item label="设备类别:">
          <el-input v-model="equipmentModel.emModel"></el-input>
        </el-form-item>
        <el-form-item label="备注:">
          <el-input v-model="equipmentModel.emRemake"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addEquipmentModel('equipmentModel')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "addEquipmentModel",
      data:function () {
        return{
          equipmentModel:{emName:'',emModel:'',emRemake:''},
          responseResult:['']
        }
      },
      methods:{
        addEquipmentModel(equipmentModel){
          this.$axios
            .post('/addEquipmentModel',equipmentModel)
            .then(successResponse => {
              this.responseResult = JSON.stringify(successResponse.data)
              if (successResponse.data.code === 200){

              }
            })
            .catch(failResponse => {})
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
