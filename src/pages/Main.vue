<template>
  <div class="home">
    <h1>Данные пользователя</h1>

    <v-form
      ref="form"
    >
      <v-text-field
        :value="$store.getters['user/name']"
        label="ФИО"
        readonly
      ></v-text-field>
      <v-text-field
        :value="$store.getters['user/login']"
        label="Логин"
        readonly
      ></v-text-field>
      <v-text-field
        :value="$store.getters['user/email']"
        label="Email"
        readonly
      ></v-text-field>
      <v-text-field
        :value="$store.getters['user/snils']"
        label="Снилс"
        readonly
      ></v-text-field>
      <v-text-field
        :value="$store.getters['user/phone']"
        label="Телефон"
        readonly
      ></v-text-field>
    </v-form>
    
    <div v-for="card in cards" :key="card.c_number">
      <UserCards :card="card" />
    </div>
  </div>
</template>

<script>
import UserCards from '@/components/UserCards.vue';
import Cleave from 'cleave.js'

import { mapState, } from 'vuex'

const cleave = {
  name: 'cleave',
  bind(el, binding) {
    const input = el.querySelector('input')
    input._vCleave = new Cleave(input, binding.value)
  },
  update(el, binding) {
    const input = el.querySelector('input')
    input._vCleave.destroy()
    input._vCleave = new Cleave(input, binding.value)
  },
  unbind(el) {
    const input = el.querySelector('input')
    input._vCleave.destroy()
  },
}

export default {
  name: 'home',
  directives: { cleave, },
  components: {
    UserCards,
  },
  data() {
    return {
      name: '',
      login: '',
      email: '',
      phone: '',
      snils: '',
      checkboxCustom: true,
      value: '',
      rawValue: '',
      masks: {
        snils: { 
          delimiters: ['-', '-', ' ',],
          blocks: [3, 3, 3, 2,],
          numericOnly: true,
        },
        phone: {
          delimiters: ['+7 (', ')', ' ', '-', '-',],
          blocks: [0, 3, 0, 3, 3, 2,],
          numericOnly: true,
        },
        email: {
          delimiters: ['.', '.', '-',],
          blocks: [3, 3, 3, 2,],
          numericOnly: true,
        },
      },
    }
  },
  computed: {
    ...mapState({
      cards: state => state.user.card,
    }),
  },
  methods: {
    getRawValue(event) {
      this.rawValue = event.target._vCleave.getRawValue()
    },
  },
  mounted() {
    //this.$store.dispatch('user/getUser')
    this.$store.dispatch('user/getCard')
  },
};
</script>

<style>
  .home {
    width: 100%;
  }
</style>
