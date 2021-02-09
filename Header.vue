<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-0">
    <nuxt-link to="/" tag="a" class="navbar-brand text-danger bt">
      <h1>Tenet</h1>
    </nuxt-link>
    <!-- <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <!-- <div class="collapse navbar-collapse" id="navbarNav"> -->
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0 p-2" :class="logoinClass">
      <nuxt-link to="/auth" tag="li" class="nav-item">
        <a class="btn btn-outline-info" href="#">Giriş Yap</a>
      </nuxt-link>
    </ul>
    <ul class="navbar-nav my-2 my-lg-0 p-2" :class="logoutClass">
      <a
        @click.prevent="$router.push('/auth/' + $store.state.authKey)"
        class="btn btn-outline-success nav-item mr-sm-2"
        href="#"
        >Profilim</a
      >
    </ul>
    <ul class="navbar-nav my-2 my-lg-0" :class="logoutClass">
      <li class="nav-item">
        <button @click.prevent="logout" class="btn btn-outline-danger">
          Çıkış Yap
        </button>
      </li>
    </ul>
    <!-- </div> -->
  </nav>
</template>F
<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
  computed: {
    logoutClass() {
      return {
        "d-none": !this.$store.getters.isAuthenticated,
      };
    },
    logoinClass() {
      return {
        "d-none": this.$store.getters.isAuthenticated,
      };
    },
  },
};
</script>
<style  scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

.bt {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  margin-left: 45%;
}
.bt:hover {
  transform: scale(1.03);
  cursor: pointer;
}
</style>
