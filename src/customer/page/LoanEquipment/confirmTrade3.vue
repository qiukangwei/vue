<template>
  <el-container>
    <el-header style="margin:auto;width:60%">
      <el-steps :active="active" finish-status="success">
        <el-step title="确认设备信息"></el-step>
        <el-step title="填写订单"></el-step>
        <el-step title="确认订单"></el-step>
      </el-steps>
    </el-header>
    <el-main style="height: 500px;border-top:1px solid #eee">
      <el-form :model="equipmentTrade" status-icon ref="equipmentTrade" label-width="100px">
        <el-row type="flex" justify="center">
            <el-card class="box-card">
              <div slot="header">
                <span>请确认您的订单信息:</span>
              </div>
              <div>
                <p>姓名:{{equipmentTrade.userRealName}}</p>
                <p>联系电话:{{equipmentTrade.userTel}}</p>
                <hr>
                <p>设备号:{{equipmentTrade.eId}}</p>
                <p>设备名称:{{equipmentTrade.emName}}</p>
                <p>设备型号:{{equipmentTrade.emModel}}</p>
                <hr>
                <p>归还时间:{{equipmentTrade.etDdl}}</p>
              </div>
            </el-card>
        </el-row>
      </el-form>
    </el-main>
    <el-footer style="border-top:1px solid #eee">
      <el-row type="flex" justify="space-between">
        <el-button @click="back()">返回</el-button>
        <el-button @click="next()">下一步</el-button>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
  export default {
    name: "confirmTrade3",
    data: function () {
      return{
        equipmentTrade:{
          userId:'',
          userRealName:'',
          emModel:'',
          emName:'',
          eId:'',
          userTel:'',
          etDdl:'',
        },
        active:2,
        success:{
          id:'',
          startPage:''
        }
      }
    },
    created(){
      this.equipmentTrade = this.$store.state.equipmentTrade;
      this.success.startPage = this.$store.state.success.startPage;
    },
    methods: {
      back(){
        this.$router.go(-1);
      },
      next() {
        this.$axios
          .post('/loanEquipment',{
            eId:this.equipmentTrade.eId,
            userId:this.equipmentTrade.userId,
            etDdl:this.equipmentTrade.etDdl
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              this.success.id=successResponse.data.data;
              this.$store.commit('setSuccess',this.success);
              this.active++;
              this.$router.push({path:'/customerCenter/cLoanEquipment/step'+this.active.toString()});
            }
          })
          .catch(failResponse => {
            this.$message({
              message:failResponse.data.message,
              type:'error'
            });
          })
      }
    }
  }
</script>

<style scoped>
  .box-card{
    width: 400px;
    height: 400px;
  }
</style>
