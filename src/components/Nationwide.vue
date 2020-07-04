<template>
<div>

 <div class="row" style="margin-top: 100px;">

                    <div class="col-md-4 col-sm-12 text-center text-primary">
                       
                        <h4><b>Total Case</b></h4>
                        <h6>* 1020345</h6>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center text-success">
                        <h4><b>Recovered</b></h4>
                        <h6>* 520345</h6>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center text-danger">
                        <h4><b>Death</b></h4>
                        <h6>* 1345</h6>
                    </div>

                </div>

                <!--graph container-->
                <div class="row" style="margin-top: 100px;">

                    <div class="col-md-4 col-sm-12 text-center">
                        <div class="card-panel ">
                            <canvas id="myChart"></canvas>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center ">
                        <div class="card-panel ">
                            <canvas id="myChart2"></canvas>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center">
                        <div class="card-panel ">
                            <canvas id="myChart3"></canvas>
                        </div>
                    </div>

                </div>
      
                <div id='map' style='width: 100%; height: 80vh'></div>

</div>
</template>

<script>
export default {
  name: 'Nationwide'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
