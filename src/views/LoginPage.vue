<template>
  <div class="login">
    <img src="../assets/img/logo.jpg" class="logoMX" />
    <h1>Login</h1>
    <h3>Bem - Vindo {{ user.username }}</h3>

    <InputText
      type="text"
      v-model="user.username"
      placeholder="Usuário"
      id="input"
      class="input"
    />

    <br /><br />

    <InputText
      type="password"
      v-model="user.password"
      placeholder="Senha"
      id="input"
      class="input"
      v-on:keyup.13="submit"
    />

    <br /><br />

    <ButtonPV label="Acessar" @click="validarAcesso()" />
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  name: "LoginPage",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login(user) {
      try {
        const result = await AuthService.login(user);

        localStorage.setItem("token", result.access_token);
        return result;
      } catch (error) {
        console.log(error);
      }
    },
    async validarAcesso() {
      if (this.user.username.length == 0 || this.user.password.length == 0) {
        return this.$toast.add({
          severity: "error",
          detail: "Usuário ou Senha incorreta!",
          life: 3000,
        });
      } else {
        const isValid = await this.login(this.user);
        if (isValid) {
          this.$toast.add({
            severity: "success",
            detail: "Bem vindo! Acessando sistema!",
            life: 3000,
          });
          this.$router.push("/home");
        } else {
          this.$toast.add({
            severity: "error",
            detail: "Usuário ou Senha incorreta!",
            life: 3000,
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 300px;
  height: 350px;
  padding: 20px;
  border-radius: 15px;
  margin: 0 auto;
  margin-top: 200px;
  box-shadow: 0px 0px 5px 0px rgb(226, 216, 216);
}

.input {
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0px;
}

.logoMX {
  width: 80px;
}

h1 {
  margin-top: -2px;
}
</style>