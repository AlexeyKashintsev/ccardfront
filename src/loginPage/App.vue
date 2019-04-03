<template>
  <v-app>
    <v-container fluid fill-height class="login-bg">
      <v-layout flex align-center justify-center>
        <div elevation-6 class="login-card">
          <v-toolbar class="primary">
            <v-toolbar-title class="white--text"><h4>Личный кабинет пользователя</h4></v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-card-text class="pt-4">
              <div>
                <v-form v-model="valid" action="j_security_check" method="POST" enctype="application/x-www-form-urlencoded" ref="form">
                  <v-text-field
                    label="Логин"
                    v-model="login"
                    :rules="loginRules"
                    name="j_username"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Пароль"
                    v-model="password"
                    name="j_password"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    @click:append="() => (e1 = !e1)"
                    :type="e1 ? 'text' : 'password'"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                  <v-layout>
                    <v-btn 
                      @click="submit"
                      :class=" { 'primary white--text' : valid, disabled: !valid }"
                    >Вход</v-btn>
                  </v-layout>
                  
                  <v-layout>
                    <a>Забыли пароль?</a>
                  </v-layout>
                </v-form>
              </div>
            </v-card-text>
                  
            <div class="auth__modal-foot">
              <img src="@/assets/logo.png">
            </div>
          </v-card>
        </div>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      e1: false,
      password: '',
      passwordRules: [
        (v) => !!v || 'Заполните поле',
        (v) => v.length > 3 || 'Поле пароль должно содержать более 3 символов',
        (v) => v.length < 100 || 'Поле пароль должно содержать менее 100 символов'
      ],
      login: '',
      loginRules: [
        (v) => !!v || 'Заполните поле',
        (v) => v.length > 3 || 'Поле логин должно содержать более 3 символов',
        (v) => v.length < 50 || 'Поле логин должно содержать менее 50 символов'
        //(v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    submit() {
      this.$refs.form.$el.submit()
    }
  }
}
</script>

<style>
input,
input:-webkit-autofill,
input:-webkit-autofill:focus,
input:-webkit-autofill:hover,
input:-webkit-autofill:active {
  box-shadow: 0 0 0 1000px white inset !important;
}
.photoCredit {
  position: absolute;
  bottom: 15px;
  right: 15px;
}
.login-bg {
  background-size: cover;
}
.login-card {
  width: 100%;
  max-width: 460px;
}
.auth__modal-foot {
  background-color: #d7ecfb;
  padding: 16px;
  margin-top: 20px;
}
.auth__modal-foot img {
  height: 70px;
}
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  box-shadow: 0 0 0 1000px white inset;
}
input[type=text]:focus, input[type=password]:focus, textarea:focus {
  box-shadow: 0 0 0 1000px white inset;
}
</style>
