<template>
  <el-row type="flex" justify="center" style="margin-top: 10%">
    <el-form :model="equipmentModel" status-icon ref="equipmentModel" label-width="100px">
      <el-form-item><h1>删除设备类型</h1></el-form-item>
      <el-form-item label="设备名称:" prop="emName">
        <el-input type="text" v-model="equipmentModel.emName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="设备型号:" prop="emModel">
        <el-input type="text" v-model="equipmentModel.emModel" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="备注:" prop="emRemake">
        <el-input type="textarea" v-model="equipmentModel.emRemake" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('equipmentModel')">确认</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
    export default {
        name: "deleteEquipmentModel",
      data: function () {
        return {
          equipmentModel: {
            emId:'',
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
            .post('/dEquipmentModel',{
              emId:this.equipmentModel.emId
            })
            .then(successResponse => {
              this.responseResult = JSON.stringify(successResponse.data)
              if (successResponse.data.code === 200) {
                this.$router.replace({path:'/'})
              }
            })
            .catch(failResponse => {})
        }
      }
    }
</script>

<style scoped>

</style>
