<template>
  <v-flex v-if="debt && debt.debtSum > 0">
    <h2>Мои задолжности</h2>
    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Задолженость: {{ debt.debtSum }}</div>
          <v-spacer></v-spacer>
          <div class="text-xs-right">
            <v-dialog v-model="dialog" persistent max-width="600px">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" @click.stop="" dark v-on="on">Погасить</v-btn>
              </template>

              <PayCard @close="dialog = false" :debt="debt.debtSum"></PayCard>
            </v-dialog>
          </div>
        </template>
        <v-card>
          <v-card-text class="grey lighten-3">text</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-flex>
</template>

<script>
import PayCard from '@/components/PayCard.vue';
import { mapState, } from 'vuex'
export default {
  name: 'main-debt',
  components: {
    PayCard,
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    pay() {

    },
  },
  computed: {
    ...mapState({
      debt: state => state.debt.debt,
    }),
  },
  mounted() {
    this.$store.dispatch('debt/getDebt')
  },
}
</script>

