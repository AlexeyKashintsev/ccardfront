<template>
  <div class="block">
    <div class="card">
      <header class="card-header is-primary">
        <p class="card-header-title has-background-primary has-text-white">
          Данные пользователя
        </p>
      </header>
      <div class="card-content">
        <div class="block">
          <b-field label="Логин">
            <b-input v-model="login">
            </b-input>
          </b-field>
          <b-field label="Email">
            <b-input v-model="email"></b-input>
          </b-field>
          <b-field label="Снилс">
            <b-input v-model="snils"
              v-cleave="masks.snils">
            </b-input>
          </b-field>
          <b-field label="Телефон">
            <b-input
              v-model="phone"
              v-cleave="masks.phone">
            </b-input>
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
              <b-input :value="props.row.bank" disabled></b-input>
            </b-table-column>
            <b-table-column field="status" centered>
              <b-checkbox v-model="props.row.status"></b-checkbox>
            </b-table-column>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
    import Cleave from 'cleave.js'

    const cleave = {
        name: 'cleave',
        bind(el, binding) {
            const input = el.querySelector('input')
            input._vCleave = new Cleave(input, binding.value)
        },
        update(el, binding) {
            const input = el.querySelector('input')
            input._vCleave.destroy()
            input._vCleave = new Cleave(input, binding.value)
        },
        unbind(el) {
            const input = el.querySelector('input')
            input._vCleave.destroy()
        }
    }

    export default {
      name: 'HomePage',
        directives: { cleave },
        data() {
          return {
              login: '',
              email: '',
              phone: '',
              snils: '',
            checkboxCustom: true,
            value: '',
            rawValue: '',
            masks: {
              snils: {
                delimiters: ['-', '-', ' '],
                blocks: [3, 3, 3, 2],
                numericOnly: true
              },
              phone: {
                delimiters: ['+7 (', ')', ' ', '-', '-'],
                blocks: [0, 3, 0, 3, 3, 2],
                numericOnly: true
              },
              email: {
                delimiters: ['.', '.', '-'],
                blocks: [3, 3, 3, 2],
                numericOnly: true
              }
            },
            dataCard: [
              // { 'id': 1, 'number_card': '1233 56** **** **67', 'date': '09/12/2018', 'bank': 'Сбербанк', status: true },
              // { 'id': 2, 'number_card': '1233 56** **** **67', 'date': '09/12/2018', 'bank': 'Сбербанк', status: true },
              // { 'id': 3, 'number_card': '1233 56** **** **67', 'date': '09/12/2018', 'bank': 'Сбербанк', status: true }
            ],
            columnsCard: [
              {
                  field: 'number_card',
                  label: 'Номер карты'
              },
              {
                  field: 'date',
                  label: 'Действительна до'
              },
              {
                  field: 'bank',
                  label: 'Банк',
                  width: 180
              },
              {
                  field: 'status',
                  label: 'Прошла проверку'
              }
            ]
          }
        },
        methods: {
            getRawValue(event) {
                this.rawValue = event.target._vCleave.getRawValue()
            }
        },
        created() {
          this.$API.get('user_data').then(r => {r.data
            this.login = r.data.login;
            this.email = r.data.email;
            this.phone = r.data.phone;
            this.snils = r.data.snils;

            r.data.cards.map(card => {
              this.dataCard.push({
                id: card.h_number,
                'number_card': card.h_number,
                bank: '',
                status: false
              });
            })
          })
        }
    }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
