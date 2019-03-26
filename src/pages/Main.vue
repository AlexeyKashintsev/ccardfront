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
    
    <h2>Мои карты</h2>

    <div class="mb-3" v-if="cards">
      <div v-for="card in cards" :key="card.c_number">
        <UserCards :card="card" />
      </div>
    </div>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Добавить карту</v-btn>
      </template>

      <AddCard @close="dialog = false"></AddCard>
    </v-dialog>
  </div>
</template>

<script>
import UserCards from '@/components/UserCards.vue';
import AddCard from '@/components/AddCard.vue';

import { mapState, } from 'vuex'

export default {
  name: 'home',
  components: {
    UserCards,
    AddCard,
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
      dialog: false,
    }
  },
  computed: {
    ...mapState({
      cards: state => state.card.card,
    }),
  },
  mounted() {
    //this.$store.dispatch('user/getUser')
    this.$store.dispatch('card/getCard')
  },
};
</script>

<style>
  .home {
    width: 100%;
  }
</style>
