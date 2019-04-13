<template>
  <el-row type="flex" justify="center" style="margin-top: 10%">
  <el-form :model="equipmentModel" status-icon ref="equipmentModel" label-width="100px">
    <el-form-item><h1>新增设备信息</h1></el-form-item>
    <el-form-item label="设备名称:" prop="emName">
      <el-input type="text" v-model="equipmentModel.emName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="设备型号:" prop="emModel">
      <el-input type="text" v-model="equipmentModel.emModel" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="备注:" prop="emRemake">
      <el-input type="textarea" v-model="equipmentModel.emRemake"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('equipmentModel')">提交</el-button>
      <el-button @click="resetForm('equipmentModel')">重置</el-button>
    </el-form-item>
  </el-form>
  </el-row>
</template>

<script>
    export default {
      name: "addEquipmentmodel",
      data: function () {
        return {
          equipmentModel: {
            emName: '',
            emModel: '',
            emRemake: ''
          }
        }
      },
      methods:{
        submitForm(equipmentModel)
        {
          this.$axios
            .post('/addEM',{
              emName:this.equipmentModel.emName,
              emModel:this.equipmentModel.emModel,
              emRemake:this.equipmentModel.emRemake
            })
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                this.$router.replace({path:'/'})
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
