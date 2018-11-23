<template>
  <div class="block">
    <div class="block">
      <b-field grouped>
        <b-field> Фильтр по дате </b-field>
        <b-field>
          <b-datepicker
            icon="calendar-today">
          </b-datepicker>
        </b-field>
        <b-field> - </b-field>
        <b-field>
          <b-datepicker
            icon="calendar-today">
          </b-datepicker>
        </b-field>
      </b-field>
    </div>
    <b-table class="my-table" :data="dataCard" :columns="columnsCard">
      <template slot-scope="props">
        <b-table-column field="number_card">
          {{ props.row.number_card }}
        </b-table-column>
        <b-table-column field="date">
          {{ props.row.date }}
        </b-table-column>
        <b-table-column field="bank">
          {{ props.row.bank }}
        </b-table-column>
        <b-table-column field="status">
          {{ props.row.date }}
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataCard: [
        { 'id': 1, 'number_card': 'Оплата проезда', 'date': 'Крым троллейбус', 'bank': '09/12/2018', status: 'Маршрут 4а' },
        { 'id': 2, 'number_card': 'Покупка лекарств', 'date': 'Социальная', 'bank': '09/12/2018', status: '' },
        { 'id': 3, 'number_card': 'Оплата проезда', 'date': 'Крым троллейбус', 'bank': '09/12/2018', status: 'Маршрут 4а' }
      ],
      columnsCard: [
        {
            field: 'number_card',
            label: 'Тип'
        },
        {
            field: 'date',
            label: 'Организация'
        },
        {
            field: 'bank',
            label: 'Дата/Время'
        },
        {
            field: 'status',
            label: 'Дополнительно'
        }
      ]
    }
  }
}
</script>