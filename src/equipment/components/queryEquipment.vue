<template>
  <el-container>
    <el-container>
      <el-form :model="equipment" status-icon ref="equipment" label-width="120px" size="mini">
        <el-row style="width: 1440px">
          <el-form-item style="margin: auto;width: 50%"><h1>查询设备信息</h1></el-form-item>
          <el-col :span="4">
            <el-form-item label="设备编号:" prop="eId">
              <el-input type="text" v-model="equipment.eId" autocomplete="off" style="width: 120px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="设备名称:" prop="emName">
              <el-input type="text" v-model="equipment.equipmentModel.emName" autocomplete="off" style="width: 120px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
          <el-form-item label="设备状态:" prop="eStatus">
            <el-input type="text" v-model="equipment.eStatus" autocomplete="off" style="width: 120px"></el-input>
          </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="设备类型编号:" prop="emId">
              <el-input type="text" v-model="equipment.emId" autocomplete="off" style="width: 120px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="设备型号:" prop="emModel">
              <el-input type="text" v-model="equipment.equipmentModel.emModel" autocomplete="off" style="width: 120px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1">
            <el-form-item>
              <el-button size="small" type="primary" @click="submitForm('equipment')">提交</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="1">
            <el-form-item>
              <el-button size="small" @click="resetForm('equipment')" style="margin-left: 10px">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-container>
    <el-main>
      <el-table :data="equipments" style="width: 100%;height: 400px">
        <el-table-column label="设备编号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.eId}}</span>
          </template>
        </el-table-column>
        <el-table-column label="设备名称" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.equipmentModel.emName}}</span>
          </template>
        </el-table-column>
        <el-table-column label="设备类型编号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.emId}}</span>
          </template>
        </el-table-column>
        <el-table-column label="设备型号" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.equipmentModel.emModel}}</span>
          </template>
        </el-table-column>
        <el-table-column label="设备状态" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.eStatus}}</span>
          </template>
        </el-table-column>
        <el-table-column label="备注" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.eRemake}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination :page-size='pageData.pageSize' :pager-count="7" layout="total,sizes,prev, pager, next,jumper"
                     :total="pageData.totalElement" @current-change="currentChange" @size-change="sizeChange"
                     :page-sizes="[5, 10, 20]">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
    export default {
        name: "queryEquipment",
      data() {
        return {
          equipments:[],
          equipment:{
            eId:'',
            eStatus:'',
            emId:'',
            eRemake:'',
            equipmentModel:{
              emName:'',
              emModel:''
            }
          },
          pageData:{
            page:1,
            totalElement:0,
            pageSize:10,
          }
        }
      },
      created(){
        this.equipments=this.$store.state.equipments;
      },
      methods: {
        currentChange(page){
          if (this.$store.state.equipments.length!=0) {
            this.pageData.page = page;
            this.queryequipment();
          }
        },
        handleEdit(index, row) {
          this.$store.commit('setEquipment',row);
          this.$router.push({path:'modifyEquipment'});

        },
        handleDelete(index, row) {
          this.$store.commit('setEquipment',row);
          this.$router.push({path:'deleteEquipment'});
        },
        submitForm(equipment){
          this.queryequipment();
        },
        queryequipment(){
          this.$axios
            .post('/queryEquipment',{
              emId:this.equipment.emId,
              emName:this.equipment.equipmentModel.emName,
              emModel:this.equipment.equipmentModel.emModel,
              eStatus:this.equipment.eStatus,
              page:this.pageData.page,
              pageSize:this.pageData.pageSize
            })
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                this.equipments=successResponse.data.data;
                this.pageData.totalElement=successResponse.data.totalElement;
                this.$store.commit('setEquipments',successResponse.data.data);
              }
            })
            .catch(failResponse => {
              this.$alert(failResponse.data.message, '错误!', {
                confirmButtonText: '确定'
              });
            })
        },
        sizeChange(pageSize){
          if (this.$store.state.equipments.length!=0) {
            this.pageData.pageSize = pageSize;
            this.queryequipment();
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
