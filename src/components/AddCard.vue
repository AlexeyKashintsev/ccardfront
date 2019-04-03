<template>
  <v-card>
    <v-card-title>
      <span class="headline">Данные карты</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field label="Имя" v-model="name"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field label="Номер карты*" v-model="number" v-mask="'#### #### #### ####'" required></v-text-field>
          </v-flex>
          <v-flex xs6 sm3>
            <v-text-field label="Месяц" v-model.number="month" v-mask="'##'"></v-text-field>
          </v-flex>
          <v-flex xs6 sm3>
            <v-text-field label="Год" v-model.number="year" v-mask="'##'"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat @click="close">Отмена</v-btn>
      <v-btn color="blue darken-1" flat @click="addCard">Добавить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mask } from 'vue-the-mask'
export default {
  name: 'add-cart',
  directives: {
    mask
  },
  data() {
    return {
      name: '',
      number: '',
      month: '',
      year: ''
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    async addCard() {
      let post = {
        owner: this.name.toLocaleUpperCase(),
        number: this.number,
        expiryDate: {
          month: this.month,
          year: this.year
        }
      }
      
      await this.$store.dispatch('card/addCard', post)
    }
  }
}
</script>

