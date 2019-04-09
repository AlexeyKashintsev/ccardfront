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
        <div>{{ card.c_number }}</div>
        <div class="cart__ismain" v-if="card.main">
          <v-icon color="yellow">grade</v-icon>
          <span class="cart__ismain-text">Главная карта</span>
        </div>
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
    card: Object
  },
  data() {
    return {
      cardInfo: null,
      cardNumber: ''
    }
  },
  computed: {
    bankLogo() {
      if (!this.cardInfo || !this.cardInfo.bankLogo) return 'backgroundImage: `url(default-credit-card'
      
      return { backgroundImage: `url(${this.cardInfo.bankLogo})` }
    }
  },
  watch: {
    cardNumber(val) {
      let startNumber = val.slice(0, 4);
      this.cardInfo = new CardInfo(startNumber, {
        banksLogosPath: 'static/img/banks-logos/',
        brandsLogosPath: 'static/img/brands-logos/',
        brandLogoPolicy: 'colored'
      })
    }
  },
  methods: {
    async deleteCard() {
      try {
        await this.$store.dispatch('card/deleteCard', {cardId: this.card.id})
      } catch (error) {
        this.$notify({
          group: 'alert',
          type: 'error',
          text: 'Не удалось удалить!'
        });
      }
    },
    async setMainCard() {
      try {
        await this.$store.dispatch('card/setMainCard', {cardId: this.card.id})
      } catch (error) {
        this.$notify({
          group: 'alert',
          type: 'error',
          text: 'Не удалось сделать главной!'
        });
      }
    }
  },
  mounted() {
    this.cardNumber = this.card.c_number;
  }
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
  min-width: 80px;
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
.cart__ismain {
  font-size: 13px;
}
.cart__ismain-text,
.cart__ismain .v-icon {
  vertical-align: middle;
}
</style>
