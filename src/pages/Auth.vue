<template>
  <section class="card auth-page">
    <div class="card auth-page__modal">
      <header class="card-header is-primary">
        <p class="card-header-title has-background-primary has-text-white">
          Личный кабинет пользователя
        </p>
      </header>
      <section class="modal-card-body">
        <div class="block">
          <b-field label="Email">
            <b-input
              type="email"
              :value="email"
              placeholder="Ваш email"
              required>
            </b-input>
          </b-field>
          <b-field label="Пароль">
            <b-input
              type="password"
              :value="password"
              password-reveal
              placeholder="Ваш пароль"
              required>
            </b-input>
          </b-field>
        </div>
        <div class="buttons">
          <button class="button" @click="$router.push({path: '/'})">Регистрация</button>
          <button class="button" @click="logIn">Вход</button>
        </div>
          <a href="">Забыли пароль?</a>
      </section>
      <footer class="auth__modal-foot">
        <img src="@/assets/logo.png">
      </footer>
    </div>
  </section>
</template>

<script>
import doAuth from '@/components/auth/doAuth';

export default {
  data() {
    return {
      email: 'root@root.root',
      password: 'pswd'
    }
  },
  methods: {
    logIn: function(){
      doAuth(this.email, this.password).then(r => {
        $router.push({path: '/'})
        // this.$router.go({
        //   path: this.$route.path,
        //   force: true
        // });
      }).catch(err => {
        
      });
    },
  }
}
</script>

<style lang="scss" scoped>
  .auth-page {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    min-height: 100%;
    width: 100%;
    padding: 16px;
    
    &__modal {
      max-width: 100%;
      width: 460px;
    }
    
    .auth__modal-foot {
      background-color: #d7ecfb;
      padding: 16px;
      margin-top: 20px;
      
      img {
        height: 70px;
      }
    }
  }
</style>
