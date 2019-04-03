<template>
  <v-flex>
    <h1>Мои льготы</h1>
    <v-data-table
      v-if="benefits"
      :headers="headers"
      :items="benefits"
      class="elevation-1"
      hide-actions
    >
      <template v-slot:items="props">
        <td>{{ props.item.mszName }}</td>
        <td>{{ props.item.mszTerritoryName }}</td>
        <td>{{ props.item.endDate }}</td>
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
          value: 'mszName',
          sortable: false
        },
        {
          text: 'Регион действия',
          value: 'mszTerritoryName'
        },
        // {
        //   text: 'Количество',
        //   value: 'benefit_count'
        // },
        {
          text: 'Дата окончания действия',
          value: 'endDate'
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