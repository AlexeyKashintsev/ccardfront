<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <AdminLayout>
      <router-view/>
    </AdminLayout>
    <notifications group="alert" />
  </div>
</template>

<script>
import AdminLayout from '@/layouts/Admin'
export default {
  components: {
    AdminLayout
  }
}
</script>

<style lang="scss">
*,:after, :before {
  box-sizing: border-box;
}
</style>