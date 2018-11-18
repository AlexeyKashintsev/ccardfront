<template>
  <div class="app-column">
    <my-header></my-header>
    
    <section class="section body-content">
      <div class="columns">
        <div class="column is-2">
          <aside class="menu">
            <a class="button is-fullwidth is-primary is-medium" href="/incidents/new">Мои данные</a>
            <a class="button is-fullwidth is-primary is-medium" href="/incidents/new">Мои льготы</a>
            <a class="button is-fullwidth is-primary is-medium" href="/incidents/new">История</a>
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
