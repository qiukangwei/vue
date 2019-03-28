<template>
  <el-row type="flex" justify="center" style="margin-top: 10%">
    <el-form :model="equipment" status-icon ref="equipment" label-width="100px">
      <el-form-item><h1>删除设备信息</h1></el-form-item>
      <el-form-item label="设备型号:" prop="emModel">
        <el-input type="text" v-model="equipment.emModel" :disabled="true"/>
      </el-form-item>
      <el-form-item label="设备状态:" prop="eStatus">
        <el-input type="text" v-model="equipment.eStatus" :disabled="true"/>
      </el-form-item>
      <el-form-item label="备注:" prop="eRemake">
        <el-input type="textarea" v-model="equipment.eRemake" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('equipment')">确认</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
    export default {
        name: "deleteEquipment",
      data: function () {
        return {
          equipment: {
            emModel: '',
            eStatus:'',
            eRemake: ''
          }
        }
      },
      methods:{
        submitForm(equipment)
        {
          this.$axios
            .post('/addEM',{
              emModel:this.equipment.emModel,
              eStatus:this.equipment.eStatus,
              eRemake:this.equipment.eRemake
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
