<template>
  <v-sheet 
    v-if="cardInfo" 
    class="bank-row pa-3" 
    elevation="1"
  >
    <div class="bank-info">
      <div class="brand-logo">
        <img
          v-if="cardInfo && cardInfo.brandLogo"
          :src="cardInfo.brandLogo"
        >
      </div>
      <div>
        <div class="bank-name">{{ cardInfo.bankName }}</div>
        <div>{{ cardInfo.numberNice }}</div>
      </div>
    </div>

    <v-spacer></v-spacer>

    <v-menu bottom left>
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
          <v-icon>more_vert</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-tile @click="setMainCard">
          <v-list-tile-title>Сделать главной</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="deleteCard">
          <v-list-tile-title>Удалить</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-sheet>
</template>

<script>
import CardInfo from 'card-info'
export default {
  props: {
    card: Object,
  },
  data() {
    return {
      cardInfo: null,
      cardNumber: '',
    }
  },
  computed: {
    bankLogo() {
      if (!this.cardInfo || !this.cardInfo.bankLogo) return ''
      
      return { backgroundImage: `url(${this.cardInfo.bankLogo})`, }
    },
  },
  watch: {
    cardNumber(val) {
      this.cardInfo = new CardInfo(val, {
        banksLogosPath: 'static/img/banks-logos/',
        brandsLogosPath: 'static/img/brands-logos/',
        brandLogoPolicy: 'colored',
      })
    },
  },
  methods: {
    deleteCard() {
      //await this.$store.dispatch('card/deleteCard', card.id)
    },
    setMainCard() {
      //await this.$store.dispatch('card/setMainCard', card.id)
    },
  },
  mounted() {
    this.cardNumber = this.card.c_number;
  },
};
</script>

<style scoped lang="scss">
.bank-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bank-info {
  display: flex;
  align-items: center;
}
.brand-logo {
  margin-right: 16px;

  img {
    height: 52px;
    display: block;
  }
}
.bank-name {
  font-size: 20px;
  font-weight: bold;
}
</style>
