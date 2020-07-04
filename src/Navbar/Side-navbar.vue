<template>
    
    <div class="NavBg">
            <ul>
                  <h3 style="margin-left:20px; color:white;">Covid19-Tacker</h3>
                  <li><a class="active" href="#">Worldwide</a></li>
                  <li><a href="#">Nationwide</a></li>
                  <li><a href="#">States</a></li>
                  <li><a href="#">Symptoms</a></li>
                  <li><a  href="#">About Us</a></li>

            </ul>
    </div>

</template>

<script>
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
        
        li a.active {
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
