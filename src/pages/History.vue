<template>
  <v-flex>
    <h1>История</h1>
    <v-layout row wrap align-center>
      Фильтр по дате
      <v-flex px-2 style="max-width:180px">
        <v-menu
          v-model="periodStartMenu"
          :close-on-content-click="false"
          max-width="290"
          lazy
          transition="scale-transition"
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              :value="periodStartFormatted"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="periodStart"
            @change="periodStartMenu = false"
          ></v-date-picker>
        </v-menu>
      </v-flex>
      -
      <v-flex px-2 style="max-width:180px">
        <v-menu
          v-model="periodEndMenu"
          :close-on-content-click="false"
          max-width="290"
          lazy
          transition="scale-transition"
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              :value="periodEndFormatted"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="periodEnd"
            @change="periodEndMenu = false"
          ></v-date-picker>
        </v-menu>
      </v-flex>
      <v-btn small @click="search">
        <v-icon dark>search</v-icon>
      </v-btn>
    </v-layout>

    <v-data-table
      v-if="history"
      :headers="headers"
      :items="history"
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
  </v-flex>
</template>

<script>
import { mapState, } from 'vuex'
import { format, isValid, startOfDay, isBefore, isEqual, endOfDay, } from 'date-fns'
export default {
  data() {
    return {
      periodStart: new Date().toISOString().substr(0, 10),
      periodEnd: new Date().toISOString().substr(0, 10),
      periodEndMenu: false,
      periodStartMenu: false,
      recordsLimit: 20,
      page: 1,
      menu: false,
      modal: false,
      headers: [
        {
          text: 'Тип',
          value: 'commodity',
          sortable: false,
        },
        {
          text: 'Организация',
          value: 'provider',
        },
        {
          text: 'Дата/Время',
          value: 'dateTime',
        },
        {
          text: 'Льготы',
          value: 'benefit',
        },
        {
          text: 'Дополнительно',
          value: 'cart',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      history: state => state.history.history,
    }),
    periodStartFormatted() {
      return this.periodStart ? format(this.periodStart, 'DD-MM-YYYY') : ''
    },
    periodEndFormatted() {
      return this.periodStart ? format(this.periodEnd, 'DD-MM-YYYY') : ''
    },
  },
  filters: {
    formatDate(value) {
      if (!value || !isValid(new Date(value))) return ''

      return format(value, 'DD/MM/YYYY')
    },
  },
  methods: {
    search() {
      let periodStart = startOfDay(this.periodStart)
      let periodEnd = endOfDay(this.periodEnd)
      
      if (!this.checkDate(periodStart, periodEnd)) return

      let post = {
        period_start: periodStart.toISOString(),
        period_end: periodEnd.toISOString(),
        records_limit: this.recordsLimit,
        page: this.page,
      }
      console.log(post)

      this.$store.dispatch('history/getHistory', post)
    },
    checkDate(periodStart, periodEnd) {
      if (!isBefore(periodStart, periodEnd)) return false

      return true
    },
    validateDate(value) {
      return !!(!value || !isValid(new Date(value)))
    },
  },
  mounted() {
    this.search()
  },
}
</script>