<template>
  <v-flex>
    <h1>Мои льготы</h1>
    <v-data-table
      :headers="headers"
      :items="benefits"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.benefit_name }}</td>
        <td>{{ props.item.benefit_region }}</td>
        <td>{{ props.item.benefit_count }}</td>
        <td>{{ props.item.benefit_end_date }}</td>
      </template>
    </v-data-table>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      headers: [
        {
          text: 'Наименование льготы',
          value: 'benefit_name',
          sortable: false
        },
        {
          text: 'Регион действия',
          value: 'benefit_region'
        },
        {
          text: 'Количество',
          value: 'benefit_count'
        },
        {
          text: 'Дата окончания действия',
          value: 'benefit_end_date'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      benefits: state => state.benefits.benefits
    })
  },
  created() {
    return this.$store.dispatch('benefits/getBenefits')
  }
}
</script>