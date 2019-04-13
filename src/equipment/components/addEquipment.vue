<template>
  <el-container style="width: 1440px">
    <el-main style="height:550px">
      <el-row>
        <el-col :offset="8" :span="8">
          <el-form :model="equipment" status-icon ref="equipment" label-width="100px">
            <el-form-item><span>新增设备信息</span></el-form-item>
            <el-row>
              <el-col :span="14">
                <el-form-item label="设备型号:" prop="emModel">
                  <el-input type="text" v-model="equipment.emModel"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="14">
                <el-form-item label="设备状态:" prop="eStatus">
                  <el-input type="text" v-model="equipment.eStatus"/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="16">
                <el-form-item label="备注:" prop="eRemake">
                  <el-input type="textarea" v-model="equipment.eRemake"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <el-row>
        <el-col :offset="20" :span="2">
          <el-button type="primary" @click="submitForm('equipment')" style="width: 120px">提交</el-button>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "addEquipment",
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
