<template>
  <el-container>
    <el-container style="margin: auto;width: 50%">
  <el-form :model="equipmentModel" status-icon ref="equipmentModel" label-width="100px">
    <el-row style="width: 700px">
      <el-form-item style="margin: auto;width: 50%"><h1>查询设备信息</h1></el-form-item>
        <el-col :span="8">
          <el-form-item label="设备类型编号:" prop="emId">
            <el-input type="text" v-model="equipmentModel.emId" autocomplete="off" style="width: 100px"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
        <el-form-item label="设备名称:" prop="emName">
          <el-input type="text" v-model="equipmentModel.emName" autocomplete="off" style="width: 144px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="设备型号:" prop="emModel">
              <el-input type="text" v-model="equipmentModel.emModel" autocomplete="off" style="width: 144px"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item style="margin: auto 20%;width: 50%">
          <el-button type="primary" @click="submitForm('equipmentModel')">提交</el-button>
          <el-button @click="resetForm('equipmentModel')">重置</el-button>
        </el-form-item>
      </el-form>
  </el-container>
  <el-main>
  <el-table :data="equipmentModels" style="width: 100%">
    <el-table-column label="设备类型编号" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.emId}}</span>
      </template>
    </el-table-column>
    <el-table-column label="设备名称" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.emName}}</span>
      </template>
    </el-table-column>
    <el-table-column label="设备型号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.emModel}}</span>
          </template>
    </el-table-column>
    <el-table-column label="备注" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.emRemake}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </el-main>
  <el-footer>
    <el-pagination :page-size='pageData.pageSize' :pager-count="7" layout="total,sizes,prev, pager, next,jumper"
                   :total="pageData.totalElement" @current-change="currentChange" @size-change="sizeChange"
                   :page-sizes="[5,10,20]">
    </el-pagination>
  </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "queryEquipmentModel",
      data() {
        return {
          equipmentModels:[],
          equipmentModel:{
            emName:'',
            emModel:''
          },
          pageData:{
            page:1,
            totalElement:0,
            pageSize:10,
          }
        }
      },
      created(){
        this.equipmentModels=this.$store.state.equipmentModels;
      },
      methods: {
        currentChange(page){
          console.log(this.$store.state.equipmentModels.length)
          if (this.$store.state.equipmentModels.length!=0) {
            this.pageData.page = page;
            this.queryEquipmentModel();
          }
        },
        handleEdit(index, row) {
          this.$store.commit('setEquipmentModel',row);
          this.$router.push({path:'modifyEquipmentModel'});

        },
        handleDelete(index, row) {
          this.$store.commit('setEquipmentModel',row);
          this.$router.push({path:'deleteEquipmentModel'});
        },
        submitForm(equipmentModel){
          this.queryEquipmentModel();
        },
        queryEquipmentModel(){
          this.$axios
            .post('/queryEquipmentModel',{
              emId:this.equipmentModel.emId,
              emName:this.equipmentModel.emName,
              emModel:this.equipmentModel.emModel,
              page:this.pageData.page,
              pageSize:this.pageData.pageSize
            })
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                this.equipmentModels=successResponse.data.data;
                this.pageData.totalElement=successResponse.data.totalElement;
                this.$store.commit('setEquipmentModels',successResponse.data.data);
              }
            })
            .catch(failResponse => {
              this.$alert(failResponse.data.message, '错误!', {
                confirmButtonText: '确定'
              });
            })
        },
        sizeChange(pageSize){
          if (this.$store.state.equipmentModels.length!=0) {
            this.pageData.pageSize = pageSize;
            this.queryEquipmentModel();
          }
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>

</style>
