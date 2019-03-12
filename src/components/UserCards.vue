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
    <div>
      <v-btn>Изменить</v-btn>
    </div>
  </v-sheet>
</template>

<script>
import CardInfo from 'card-info'
export default {
  props: {
    cards: Array,
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
        banksLogosPath: 'img/banks-logos/',
        brandsLogosPath: 'img/brands-logos/',
        brandLogoPolicy: 'colored',
      })
    },
  },
  mounted() {
    this.cardNumber = 371331730661007
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
