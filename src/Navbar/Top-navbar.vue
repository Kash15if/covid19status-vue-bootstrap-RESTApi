<template>
<div>

    <!--nav for small screen-->
    <nav class="navbar  navbar-dark bg-primary d-md-none">
      <a class="navbar-brand" href="#">Covid19-Tracker</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item active">
            <a class="nav-link" href="#">Worldwide</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Nationwide</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">States</a>
          </li>
          
          <li class="nav-item ">
            <a class="nav-link" href="#">About Us</a>
          </li>

        </ul>
        
      </div>
    </nav>


</div>

</template>

<script>
export default {
  name: 'Top-navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
