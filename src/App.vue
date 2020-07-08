<template>
  <div id="app">

    <!--navbar for smaller screen-->
    <TopNavbar/>
    
    <div class="row">

      <!-- left side nav for large screen-->
      <div class="col-md-2 navMenu d-none d-md-block">
          <SideNavbar/> 
      </div>

      <!--full body except nav-->
      <div class="col-md-10 col-sm-12 MainBody">
      <router-view></router-view>
      </div>
        
      

    </div>
    
  </div>

</template>


<script>

  import TopNavbar from "./components/Navbar/Top-navbar.vue";
  import SideNavbar from "./components/Navbar/Side-navbar.vue";


export default {
  name: 'App',

  data(){
    return{

    };
  },

  components: {
    TopNavbar,
    SideNavbar

  }
}
</script>


<style>
.navMenu{
          background-size: 150%;
          padding: 0;
        }

.MainBody{
  width: 100%;
  height: 100vh;
  overflow: scroll;
  padding: 0;
}
</style>
