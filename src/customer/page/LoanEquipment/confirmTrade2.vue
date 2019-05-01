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
        <el-form :model="equipmentTrade" :rules="rules" status-icon ref="equipmentTrade" label-width="100px">
          <el-row type="flex" justify="center">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>请确认您的个人信息</span>
            </div>
            <div style="margin-left: 20%">
              <p>姓名:{{loginUser.userRealName}}</p>
              <p>联系电话:{{loginUser.userTel}}</p>
            </div>
            <div style="margin:10% 0;border-bottom:2px solid #eee">
              请选择您的归还时间
            </div>
            <div>
              <el-form-item label="归还时间:" prop="etDdl">
                <el-date-picker
                  v-model="equipmentTrade.etDdl"
                  type="date"
                  placeholder="选择日期"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
            </div>
          </el-card>
          </el-row>
        </el-form>
    </el-main>
    <el-footer style="border-top:1px solid #eee">
      <el-row type="flex" justify="space-between">
        <el-button @click="back">返回</el-button>
        <el-button @click="next('equipmentTrade')">下一步</el-button>
      </el-row>
    </el-footer>
  </el-container>

</template>

<script>
  export default {
    name: "modifyEquipment",
    data: function () {
      var validateDate = (rule, value, callback) => {
        var d1 = new Date(value);
        if (d1 <= new Date() ) {
          callback(new Error('归还日必须大于当前日'));
        } else {
          callback();
        }
      };
      return {
        equipmentTrade: {
          userId: '',
          userRealName: '',
          emModel: '',
          emName: '',
          eId: '',
          userTel: '',
          etDdl: '',
        }, rules: {
          etDdl: [
            {required: true, message: '请输入归还时间', trigger: 'blur'},
            {validator:validateDate,trigger:'blur'}
          ]
        },
        loginUser: {
          userId: '',
          userRealName: '',
          userTer: ''
        },
        active: 1
      }
    },
    created() {
      this.loginUser = this.$store.state.loginUser;
      this.equipmentTrade = this.$store.state.equipmentTrade;
    },
    methods: {
      back() {
        this.$router.go(-1);
      },
      next(equipmentTrade) {
        this.$refs[equipmentTrade].validate((valid) => {
          if (valid) {
            this.equipmentTrade.userRealName = this.loginUser.userRealName;
            this.equipmentTrade.userTel = this.loginUser.userTel;
            this.equipmentTrade.userId = this.loginUser.userId;
            this.$store.commit('setEquipmentTrade', this.equipmentTrade);
            this.active++;
            this.$router.push({path: '/customerCenter/cLoanEquipment/step' + this.active.toString()});
          } else {
            return false;
          }
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
