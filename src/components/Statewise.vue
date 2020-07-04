<template>

<div>

<!--Search Box-->
<div class="input-group mb-3" style="width: 90%;margin-left: 5%;margin-top: 70px;">
                <input type="text" class="form-control" placeholder="Search States" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <div class="input-group-append">
                  <button class="btn btn-success" type="button">Search</button>
                </div>
              </div>


              <!--states lists with grid-->
              <div class="container" style="margin-top: 50px;">
              <div class="row">
               
                <div class="col-md-2 col-sm-6 ">
                  <div class="statebox">
                    <b>Andhra Pradesh</b>
                  </div>
                </div>
                <div class="col-md-2 col-sm-6 ">
                  <div class="statebox">
                  <b>Bihar</b>
                  </div>
                </div>
                <div class="col-md-2 col-sm-6 ">
                  <div class="statebox">
                    <b>Bengal</b>
                  </div>
                </div>
                <div class="col-md-2 col-sm-6 ">
                  <div class="statebox">
                  <b>Andhra Pradesh</b>
                  </div>
                </div>
                <div class="col-md-2 col-sm-6 ">
                  <div class="statebox">
                  <b>Andhra Pradesh</b>
                  </div>
                </div>
                <div class="col-md-2 col-sm-6 ">
                  <div class="statebox">
                  <b>Andhra Pradesh</b>
                  </div>
                </div>

                <div class="col-md-2 col-sm-6 ">
                  <div class="statebox">
                    <b>Andhra Pradesh</b>
                  </div>
                </div>
                <div class="col-md-2 col-sm-6 ">
                  <div class="statebox">
                  <b>Bihar</b>
                  </div>
                </div>
                <div class="col-md-2 col-sm-6 ">
                  <div class="statebox">
                    <b>Bengal</b>
                  </div>
                </div>
                <div class="col-md-2 col-sm-6 ">
                  <div class="statebox">
                  <b>Andhra Pradesh</b>
                  </div>
                </div>
                <div class="col-md-2 col-sm-6 ">
                  <div class="statebox">
                  <b>Andhra Pradesh</b>
                  </div>
                </div>
                <div class="col-md-2 col-sm-6 ">
                  <div class="statebox">
                  <b>Andhra Pradesh</b>
                  </div>
                </div>

              </div>
              </div>
</div>

</template>

<script>
export default {
  name: 'Statewise'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.statebox {
        width: 90%;
        text-align: center;
        background-color: #555;
        color: white;
        padding: 10px;
        margin: 2px;
      }

</style>
