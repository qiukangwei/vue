<template>
  <el-row type="flex" justify="center" style="margin-top: 10%">
    <el-form :model="equipmentModel" status-icon ref="equipmentModel" label-width="100px">
      <el-row>
        <el-col :offset="6">
          <el-form-item><h1>修改设备类型</h1></el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="设备类型号:" prop="emId">
            <el-input type="text" v-model="equipmentModel.emId" autocomplete="off" :disabled=true></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="设备名称:" prop="emName">
        <el-input type="text" v-model="equipmentModel.emName" autocomplete="off"></el-input>
      </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="设备型号:" prop="emModel">
            <el-input type="text" v-model="equipmentModel.emModel" autocomplete="off"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="18">
          <el-form-item label="备注:" prop="emRemake">
            <el-input type="textarea" v-model="equipmentModel.emRemake" rows="5"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item>
          <el-col :span="12">
            <el-button type="primary" @click="submitForm('equipmentModel')">提交</el-button>
          </el-col>
          <el-button @click="goBack">返回</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </el-row>
</template>

<script>
    export default {
        name: "modifyEquipmentModel",
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
      created(){
        this.equipmentModel=this.$store.state.equipmentModel;
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
        goBack(){
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>

</style>
