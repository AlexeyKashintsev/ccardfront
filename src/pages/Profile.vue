<template>
  <div class="flex">
    <h1>Мои данные</h1>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-text-field
        v-model="name"
        label="ФИО"
        :rules="nameRules"
        required
      ></v-text-field>
      <v-text-field
        v-model="login"
        label="Логин"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="E-mail"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        v-model="snils"
        label="Снилс"
      ></v-text-field>
      <v-text-field
        v-model="phone"
        label="Телефон"
      ></v-text-field>

      <v-btn 
        @click="save"
        :disabled="!valid"
        color="success"
      >Сохранить</v-btn>
    </v-form>
  </div>
</template>

<script>
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
  name: 'Profile',
  directives: { cleave, },
  data() {
    return {
      name: '',
      login: '',
      email: '',
      phone: '',
      snils: '',
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
      },
      valid: false,
      nameRules: [
        v => !!v || 'ФИО обязательно',
        v => (v && v.length >= 5) || 'ФИО не может быть меньше 5 символов',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods: {
    getRawValue(event) {
      this.rawValue = event.target._vCleave.getRawValue()
    },
    save() {
      if (!this.valid) return

      let post = {
        name: this.name,
        login: this.login,
        email: this.email,
        snils: this.snils,
        phone: this.phone,
      }
      this.$store.dispatch('user/setUser', post)
    },
  },
  mounted() {
    this.$store.dispatch('user/getUser')
    
    this.name = this.$store.getters['user/name']
    this.login = this.$store.getters['user/login']
    this.email = this.$store.getters['user/email']
    this.snils = this.$store.getters['user/snils']
    this.phone = this.$store.getters['user/phone']
  },
};
</script>