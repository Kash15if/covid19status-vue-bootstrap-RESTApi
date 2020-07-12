<template>
  <div>
    <!--nav for small screen-->
    <nav class="navbar  navbar-dark bg-primary d-md-none">
      <a class="navbar-brand" href="#">Covid19-Tracker</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" exact class="nav-link">Worldwide</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/nationwide" exact class="nav-link"
              >Nationwide</router-link
            >
          </li>

          <li class="nav-item">
            <router-link to="/statewise" exact class="nav-link"
              >States</router-link
            >
          </li>

          <li class="nav-item">
            <router-link to="/symptoms" exact class="nav-link"
              >Symptoms</router-link
            >
          </li>

          <li class="nav-item">
            <router-link to="/about" exact class="nav-link"
              >About Us</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Top-navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-active {
  background-color: #2043dd;
  color: white;
  padding: 8px;
  text-decoration: none;
}
</style>
