<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      clipped
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile v-for="item in categories" :key="item.title" :to="{ name: item.pathName }">
          <v-list-tile-action>
            <v-icon>{{ item.action }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> 
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5 align-center">
        <router-link to="/" class="logo">
          <img src="@/assets/logo.png" />
          <span class="color-one">Карта</span>
          <span class="color-two"> Крымчанина</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn depressed @click="$router.push({ name: 'Profile' })">
        <v-icon dark left>account_circle</v-icon>{{ getName }}
      </v-btn>
      <v-btn depressed @click="logout">
        <v-icon dark left>exit_to_app</v-icon>Выйти
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fill-height>
        <v-layout>
          <slot />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, } from 'vuex'

export default {
  data() {
    return {
      drawer: true,
      items: [],
      items2: [],
      categories: [
        {
          action: 'assignment_ind',
          title: 'Мои данные',
          pathName: 'Main',
        },
        {
          action: 'grade',
          title: 'Мои льготы',
          pathName: 'Privilegies',
        },
        {
          action: 'recent_actors',
          title: 'История',
          pathName: 'History',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
    }),
    getName() {
      return this.user && (this.user.name || this.user.login) || 'Профиль'
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
    },
  },
  created() {
    this.$store.dispatch('user/getUser')
  },
}
</script>

<style lang="scss" scoped>
.logo {
  text-decoration: none;
  text-transform: uppercase;

  img {
    height: 36px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
  }
  .color-one {
    color: #f39507;
  }
  .color-two {
    color: #585b6b;
  }
}
</style>
