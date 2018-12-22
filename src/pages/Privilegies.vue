<template>
  <div class="block">
    <b-table class="my-table" :data="benefits" :columns="columnsCard">
      <template slot-scope="props">
        <b-table-column field="benefit_name">
          {{ props.row.benefit_name }}
        </b-table-column>
        <b-table-column field="benefit_region">
          {{ props.row.benefit_region }}
        </b-table-column>
        <b-table-column field="benefit_count">
          {{ props.row.benefit_count }}
        </b-table-column>
        <b-table-column field="benefit_end_date">
          {{ props.row.benefit_end_date }}
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      benefits: [],
      columnsCard: [
        {
            field: 'benefit_name',
            label: 'Наименование льготы'
        },
        {
            field: 'benefit_region',
            label: 'Регион действия'
        },
        {
            field: 'benefit_count',
            label: 'Количество'
        },
        {
            field: 'benefit_end_date',
            label: 'Дата окончания действия'
        }
      ]
    }
  },
  created() {
    this.$API.get('user_benefits').then(r => {
      this.benefits = r.data;
    })
  }
}
</script>