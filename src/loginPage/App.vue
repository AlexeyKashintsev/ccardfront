<template>
  <section class="card auth-page">
    <div class="card auth-page__modal">
      <form id="form" name="form" action="j_security_check" method="POST" enctype="application/x-www-form-urlencoded">
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
                name="j_username"
                placeholder="Ваш email"
                required>
              </b-input>
            </b-field>
            <b-field label="Пароль">
              <b-input
                type="password"
                :value="password"
                name="j_password"
                password-reveal
                placeholder="Ваш пароль"
                required>
              </b-input>
            </b-field>
          </div>
          <div class="buttons">
            <button class="button" @click="$router.push({path: '/'})">Регистрация</button>
            <button class="button" type="submit">Вход</button>
          </div>
            <a href="">Забыли пароль?</a>
        </section>
        <footer class="auth__modal-foot">
          <img src="@/assets/logo.png">
        </footer>
      </form>
    </div>
  </section>
</template>

<script>
import doAuth from '@/components/auth/doAuth';

export default {
  name: 'Signapp',
  computed: {
  },
  data() {
    return {
      email: 'root@root.root',
      password: 'pswd'
    }
  },
  methods: {
    logIn: function(){
      doAuth(this.email, this.password).then(r => {
        document.location = '/'
      }).catch(err => {

      });
    },
  }
}
</script>

<style <style lang="scss">
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #05a4c0;
$primary-invert: findColorInvert($primary);
$twitter: #d7ecfb;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
// $link: $primary;
// $link-invert: $primary-invert;
// $link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

*, *::before, *::after {
  box-sizing: border-box;
}
html {
  overflow-y: auto;
}
html,
body {
  height: 100%;
}
#app {
  display: flex;
  min-height: 100%;
}
.body-content {
  flex: 1 0 auto;
}

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
