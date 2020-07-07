<template>

<div>


<!-- graph of a particular state , all 3-->
 <div class="row" style="margin-top: 100px;">

                    <div class="col-md-4 col-sm-12 text-center text-primary" v-if="totalConfirmed.length != 0">
                       
                        <h4><b>Total Case</b></h4>
                        <h6>{{ todayConfirmed }}</h6>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center text-success">
                        <h4><b>Recovered</b></h4>
                        <h6>{{ todayRecovered }}</h6>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center text-danger">
                        <h4><b>Death</b></h4>
                        <h6>{{ todayDeceased }}</h6>
                    </div>

                </div>

                <!--graph container-->
                <div class="row" style="margin-top: 100px;">

                    <div class="col-md-4 col-sm-12 text-center"  v-if="totalConfirmed.length != 0">
                       <line-chart
                        :chartData="totalConfirmed"
                        :options="this.chartOptions"
                        label="# of people recovered everyday"
                        bgcolor="#008000"
                        ></line-chart>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center"  v-if="totalConfirmed.length != 0">
                        <line-chart
                        :chartData="totalRecovered"
                        :options="this.chartOptions"
                        label="# of people recovered everyday"
                        bgcolor="#008000"
                        ></line-chart>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center"  v-if="totalConfirmed.length != 0">
                        <line-chart
                        :chartData="totalDeceased"
                        :options="this.chartOptions"
                        label="# of people recovered everyday"
                        bgcolor="#008000"
                        ></line-chart>
                    </div>

                </div>
      
                <div id='map' style='width: 100%; height: 80vh'></div>


    <!--Table of all districts of a particular state-->
    <h1 align="center">Coorna database</h1><br><br>



   
                    <div class="table-responsive-xl " >

                        <table class="table table-dark table-striped">
                            <thead>
                                <th>Date</th>
                                <th>Country</th>
                                <th>Total cases</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                            </thead>
                            <tbody>
      
                            

                            
                                

                            </tbody>
                        </table>

                    </div>

</div>

</template>

<script>
import LineChart from "../graph/graph.vue";

export default {
  name: 'District',
  components:{
      LineChart,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
