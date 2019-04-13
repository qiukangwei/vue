<template>
  <el-container>
    <el-container>
      <el-form :model="user" status-icon ref="user" label-width="120px" size="mini">
        <el-row type="flex" justify="center">
          <el-form-item><span>查询用户信息</span></el-form-item>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="4">
            <el-form-item label="用户ID:" prop="eId">
              <el-input type="text" v-model="user.userId" autocomplete="off" style="width: 120px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="账号:" prop="eId">
              <el-input type="text" v-model="user.eId" autocomplete="off" style="width: 120px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="用户名:" prop="eId">
              <el-input type="text" v-model="user.eId" autocomplete="off" style="width: 120px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3" style="margin-left: 15px;">
            <el-form-item label="电话号码:" prop="eId">
              <el-input type="text" v-model="user.eId" autocomplete="off" style="width: 120px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <el-button type="primary" @click="submitForm('user')" size="medium">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="4">
            <el-form-item label="性别:" prop="eId">
              <el-input type="text" v-model="user.eId" autocomplete="off" style="width: 120px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="邮箱:" prop="eId">
              <el-input type="text" v-model="user.eId" autocomplete="off" style="width: 120px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="地址:" prop="eId">
              <el-input type="text" v-model="user.eId" autocomplete="off" style="width: 120px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3" style="margin-left: 15px">&nbsp;</el-col>
          <el-col :span="4">
            <el-form-item>
              <el-button @click="resetForm('user')" size="medium">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-container>
    <el-main>
      <el-row>
        <el-col :span="18">
          <el-table :data="users"  height="400" border style="width: 100%;" >
            <el-table-column label="库存号" >
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.userId}}</span>
              </template>
            </el-table-column>
            <el-table-column label="设备号" >
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.userId}}</span>
              </template>
            </el-table-column>
            <el-table-column label="设备类型编号" >
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.userId}}</span>
              </template>
            </el-table-column>
            <el-table-column label="设备名称" >
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.userId}}</span>
              </template>
            </el-table-column>
            <el-table-column label="设备类型" >
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.userId}}</span>
              </template>
            </el-table-column>
            <el-table-column label="设备状态" >
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.userId}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="120">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-main>
    <el-footer height="30px">
      <el-pagination :page-size='pageData.pageSize' :pager-count="7" layout="total,sizes,prev, pager, next,jumper"
                     :total="pageData.totalElement" @current-change="currentChange" @size-change="sizeChange"
                     :page-sizes="[5, 10, 20]">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "queryStorage",
      data(){
        return{
          users:[],
          user:{
            userId:"",
            userPosition:"",
            userTel:"",
            userAccout:"",
            userSex:"",
            userEmail:"",
            userAddress:"",
            userRegisteredTime:"",
            lastIp:"",
            lastTime:"",
          },
          pageData:{
            page:1,
            totalElement:0,
            pageSize:10,
          }
        }
      },
      created(){

      },
      methods:{
        queryUser(){
          this.$axios
            .post('/queryUser',{
              userId:this.userId,
              userPosition:this.userPosition,
              userTel:this.userTel,
              userAccout:this.userAccout,
              userSex:this.userSex,
              userEmail:this.userEmail,
              userAddress:this.userAddress,
              userRegisteredTime:this.userRegisteredTime,
              lastIp:this.lastIp,
              lastTime:this.lastTime,
              page:this.pageData.page,
              pageSize:this.pageData.pageSize
            })
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                this.users=successResponse.data.data;
                this.pageData.totalElement=successResponse.data.totalElement;
                this.$store.commit('setUsers',successResponse.data.data);
              }
            })
            .catch(failResponse => {
              this.$alert(failResponse.data.message, '错误!', {
                confirmButtonText: '确定'
              });
            })
        },
        sizeChange(pageSize){
          this.pageData.pageSize=pageSize;
          this.queryUser();
        },
        currentChange(page){
          if (this.$store.state.users.length!=0){
            this.pageData.page=page;
            this.queryUser();
          }
        },
        handleEdit(index, row) {
          this.$store.commit('setUser',row);
          this.$router.push({path:'modifyUser'});

        },
        handleDelete(index, row) {
          this.$store.commit('setUser',row);
          this.$router.push({path:'deleteUser'});
        },
        submitForm(user){
          this.queryUser();
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
