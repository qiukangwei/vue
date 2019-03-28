<template>
  <component v-bind:is="equipmentView"/>
</template>

<script>
  import queryEquipment from "@/equipment/components/queryEquipment";
  import addEquipment from "@/equipment/components/addEquipment";
  import modifyEquipment from "@/equipment/components/modifyEquipment";
  import deleteEquipment from "@/equipment/components/deleteEquipment";
    export default {
        name: "equipmentPage",
      props:{
        equipmentView:{
          default:'add-equipment'
        }
      },
      components:{
          'query-equipment':queryEquipment,
          'add-equipment':addEquipment,
          'modify-equipment':modifyEquipment,
          'delete-equipment':deleteEquipment,
      },
      methods:{
          equipmentPageChange:function (equipmentView) {
            this.equipmentView=equipmentView
            this.$emit('equipmentPageChange',equipmentView);
          }
      }
    }
</script>

<style scoped>
</style>
