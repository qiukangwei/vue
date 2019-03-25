<template>
    <component v-bind:is="menuView"/>
</template>

<script>
  import EquipmentPage from "@/equipment/pages/equipmentPage";
    export default {
        name: "indexComponent",
      props:{
        menuView:{
          default:'EquipmentPage'
        }
      },
      components: {
        EquipmentPage,
      },
      methods:{

      }
    }
</script>

<style scoped>

</style>
