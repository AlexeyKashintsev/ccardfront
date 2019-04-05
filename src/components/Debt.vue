<template>
  <v-flex v-if="debt && debt.debtSum > 0">
    <h2>Мои задолженности</h2>
    <v-expansion-panel>
      <v-expansion-panel-content>
        <template v-slot:header>
          <div>Задолженность: {{ debt.debtSum }}</div>
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
          <v-card-text class="grey lighten-3">
            <v-data-table
              v-if="debt.operations"
              :headers="headers"
              :items="debt.operations"
              class="elevation-1"
              hide-actions
            >
              <template v-slot:items="props">
                <td>{{ props.item.commodity }}</td>
                <td>{{ props.item.provider }}</td>
                <td>{{ props.item.dateTime | formatDate }}</td>
                <td>{{ props.item.benefit && props.item.benefit.mszName }}</td>
                <td>
                  <div v-for="item in props.item.cart" :key="item.id">
                    - {{ item.itemName }}
                  </div>
                </td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex'
import { format, isValid } from 'date-fns'
import PayCard from '@/components/PayCard.vue';
export default {
  name: 'main-debt',
  components: {
    PayCard
  },
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: 'Тип',
          value: 'commodity',
          sortable: false
        },
        {
          text: 'Организация',
          value: 'provider'
        },
        {
          text: 'Дата/Время',
          value: 'dateTime'
        },
        {
          text: 'Льготы',
          value: 'benefit'
        },
        {
          text: 'Дополнительно',
          value: 'cart'
        }
      ]
    }
  },
  methods: {
    pay() {

    }
  },
  filters: {
    formatDate(value) {
      if (!value || !isValid(new Date(value))) return ''

      return format(value, 'DD/MM/YYYY')
    }
  },
  computed: {
    ...mapState({
      debt: state => state.debt.debt
    })
  },
  mounted() {
    this.$store.dispatch('debt/getDebt')
  }
}
</script>

