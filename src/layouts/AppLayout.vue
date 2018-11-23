<template>
  <div class="app-column">
    <my-header></my-header>
    
    <section class="section body-content">
      <div class="columns">
        <div class="column is-2">
          <aside class="menu">
            <router-link class="button is-fullwidth is-primary is-medium" :to="{name: 'Home'}">Мои данные</router-link>
            <router-link class="button is-fullwidth is-primary is-medium" :to="{name: 'Privilegies'}">Мои льготы</router-link>
            <router-link class="button is-fullwidth is-primary is-medium" :to="{name: 'History'}">История</router-link>
          </aside>
        </div>

        <main class="column is-10">
            <router-view></router-view>
        </main>
      </div>
    </section>
  </div>
</template>

<script>
import MyHeader from '@/components/Header'

export default {
  components: {
    MyHeader
  }
}
</script>

<style scoped>
.app-column {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
