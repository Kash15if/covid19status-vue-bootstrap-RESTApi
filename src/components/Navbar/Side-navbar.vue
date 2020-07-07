<template>
    
    <div class="NavBg">
            <ul>
                  <h3 style="margin-left:20px; color:white;">Covid19-Tacker</h3>
                  <li><router-link to="/" exact>Worldwide</router-link></li>
                  <li><router-link to="/nationwide" exact>Nationwide</router-link></li>
                  <li><router-link to="/statewise" exact>States</router-link></li>
                  <li><router-link to="/symptoms" exact>Symptoms</router-link></li>
                  <li><router-link to="/about" exact>About Us</router-link></li>
                  

            </ul>
    </div>

</template>

<script>

import 'vue-router'

export default {
  name: 'SIde-navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        ul {
          list-style-type: none;
          margin: 0px;
          width: auto;
          padding: 50px 0px;
        }
        
        li a {
          display: block;
          color: white;
          padding: 15px 20px;
          text-decoration: none;
          margin: 15px 10px 0px 10px;
        }
        
        .router-link-active {
          background-color: #20a4f3;
          color: white;
          border-radius: 5px;
          text-decoration: none;
        }
        
        li a:hover:not(.active) {
          background-color: #555;
          color: white;
          text-decoration: none;
        }
  
  
        .NavBg{
          margin: 0;
          padding-left: 10px;
          width: 100%;
          background-color: rgba(26, 26, 26, 0.767);
          height: 100vh;
        }
</style>
