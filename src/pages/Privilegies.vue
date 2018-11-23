<template>
  <div class="block">
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
        { 'id': 1, 'number_card': 'АКЦИЯ: Бесплатный проезд "КРЫМАВТОБУС', 'date': 'Республика Крым', 'bank': '', status: '09/12/2018' },
        { 'id': 2, 'number_card': 'АКЦИЯ: Бесплатный проезд "КРЫМАВТОБУС', 'date': 'Республика Крым', 'bank': '3', status: '09/12/2018' },
        { 'id': 3, 'number_card': 'АКЦИЯ: Бесплатный проезд "КРЫМАВТОБУС', 'date': 'Республика Крым', 'bank': '', status: '09/12/2018' }
      ],
      columnsCard: [
        {
            field: 'number_card',
            label: 'Наименование льготы'
        },
        {
            field: 'date',
            label: 'Регион действия'
        },
        {
            field: 'bank',
            label: 'Количество'
        },
        {
            field: 'status',
            label: 'Дата окончания действия'
        }
      ]
    }
  }
}
</script>