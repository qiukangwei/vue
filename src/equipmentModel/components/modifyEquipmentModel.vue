<template>
  <el-row type="flex" justify="center" style="margin-top: 10%">
    <el-form :model="equipmentModel" status-icon ref="equipmentModel" label-width="100px">
      <el-form-item><h1>修改设备类型</h1></el-form-item>
      <el-form-item label="设备名称:" prop="emName">
        <el-input type="text" v-model="equipmentModel.emName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="设备型号:" prop="emModel">
        <el-input type="text" v-model="equipmentModel.emModel" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="备注:" prop="emRemake">
        <el-input v-model="equipmentModel.emRemake"></el-input>
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
        name: "modifyEquipmentModel",
      props:{

      },
      data: function () {
        return {
          equipmentModel: {
                emId: '',
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
            .post('/modifyEquipmentModel',{
                  emId:this.equipmentModel.emId,
                emName:this.equipmentModel.emName,
               emModel:this.equipmentModel.emModel,
              emRemake:this.equipmentModel.emRemake
            })
            .then(successResponse => {
              this.responseResult = JSON.stringify(successResponse.data)
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
