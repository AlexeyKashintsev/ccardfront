<template>
  <v-card>
    <v-card-title>
      <span class="headline">Оплатить задолженность ({{ debt }})</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12>
            <v-text-field label="Имя владельца карты" v-model="name"></v-text-field>
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
          <v-flex xs6 sm3>
            <v-text-field label="CVV2" type="password" v-model.number="cvv" v-mask="'###'"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat @click="close">Отмена</v-btn>
      <v-btn 
        color="blue darken-1" 
        flat 
        @click="pay"
        :loading="loading"
        :disabled="loading"
      >Оплатить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mask } from 'vue-the-mask'
export default {
  name: 'pay-cart',
  directives: {
    mask
  },
  props: {
    debt: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      name: '',
      number: '',
      month: '',
      year: '',
      cvv: '',
      loading: false
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    async pay() {
      let post = {
        debtSum: this.debt.debtSum,
        card: {
          owner: this.name.toLocaleUpperCase(),
          number: this.number,
          expiryDate: {
            month: this.month,
            year: this.year,
            CVV2: this.cvv
          }
        }
      }
      
      try {
        this.loading = true
        const pay = await this.$store.dispatch('card/pay', post)
        const debt = await this.$store.dispatch('debt/getDebt')
        this.close()
      } catch (error) {
        this.$notify({
          group: 'alert',
          type: 'error',
          text: 'Оплата не прошла!'
        });
      } finally {
        this.loading = false
      }
    }
  }
}
</script>