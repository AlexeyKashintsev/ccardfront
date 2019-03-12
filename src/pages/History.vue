<template>
  <div class="block">
    <div class="block">
      <b-field grouped>
        <b-field> Фильтр по дате </b-field>
        <b-field>
          <b-datepicker
            v-model="periodStart"
            icon="calendar-today">
          </b-datepicker>
        </b-field>
        <b-field> - </b-field>
        <b-field>
          <b-datepicker
            v-model="periodEnd"
            icon="calendar-today">
          </b-datepicker>
        </b-field>
        <b-field>
          <button class="button is-primary" @click="search()"><b-icon icon="magnify"></b-icon></button>
        </b-field>
      </b-field>
    </div>
    <b-table class="my-table" :data="dataCard" :columns="columnsCard">
      <template slot-scope="props">
        <b-table-column field="commodity">
          {{ props.row.commodity }}
        </b-table-column>
        <b-table-column field="provider">
          {{ props.row.provider }}
        </b-table-column>
        <b-table-column field="dateTime">
          {{ props.row.dateTime | formatDate }}
        </b-table-column>
        <b-table-column field="benefit">
          <b-checkbox :value="props.row.benefit && props.row.benefit.hasOwnProperty('mszName')" disabled></b-checkbox>
        </b-table-column>
        <b-table-column field="cart">
          <div v-for="row in props.row.cart" :key="row.id">
            - {{ row.itemName }}
          </div>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
import { format, isValid, startOfDay, isBefore, isEqual, endOfDay } from 'date-fns'
export default {
  data() {
    return {
      periodStart: new Date(),
      periodEnd: new Date(),
      recordsLimit: 20,
      page: 1,
      dataCard: [],
      columnsCard: [
        {
            field: 'commodity',
            label: 'Тип'
        },
        {
            field: 'provider',
            label: 'Организация'
        },
        {
            field: 'dateTime',
            label: 'Дата/Время'
        },
        {
            field: 'benefit',
            label: 'Льготы'
        },
        {
            field: 'cart',
            label: 'Дополнительно'
        }
      ]
    }
  },
  filters: {
    formatDate(value) {
      if (!value || !isValid(new Date(value))) return '';

      return format(value, 'DD/MM/YYYY mm:hh');
    }
  },
  methods: {
    search() {
      this.periodStart = startOfDay(this.periodStart);
      this.periodEnd = endOfDay(this.periodEnd);

      if (!this.checkDate()) return;

      let qParams = {
        period_start: this.periodStart ? this.periodStart.toISOString() : '',
        period_end: this.periodEnd ? this.periodEnd.toISOString() : '',
        records_limit: this.recordsLimit,
        page: (this.page - 1) * this.recordsLimit
      };

      this.$API.get('user_history', { params: qParams }).then(r => {
        this.dataCard = r.data;
      });
    },
    checkDate() {
      if (!isBefore(this.periodStart, this.periodEnd)) return false;

      return true;
    },
    validateDate(value) {
      return !!(!value || !isValid(new Date(value)));
    }
  },
  created() {
    if (!this.checkDate()) return;

    let qParams = {
      period_start: startOfDay(new Date),
      period_end: endOfDay(new Date),
      records_limit: 20,
      page: 0
    };

    this.$API.get('user_history', {params: qParams}).then(r => {
      this.dataCard = r.data;
    })
  }
}
</script>
