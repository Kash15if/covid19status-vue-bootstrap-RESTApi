<template>
<div>

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
                        bgcolor="#0066ff"
                        ></line-chart>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center"  v-if="totalConfirmed.length != 0">
                        <line-chart
                        :chartData="totalRecovered"
                        :options="this.chartOptions"
                        label="# of people recovered everyday"
                        bgcolor="#00b359"
                        ></line-chart>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center"  v-if="totalConfirmed.length != 0">
                        <line-chart
                        :chartData="totalDeceased"
                        :options="this.chartOptions"
                        label="# of people recovered everyday"
                        bgcolor="#ff0000"
                        ></line-chart>
                    </div>

                </div>
      
                <div id='map' style='width: 100%; height: 80vh'></div>

</div>
</template>

<script>
import LineChart from "../graph/graph.vue";
import {mapGetters , mapActions , mapState } from 'vuex';

export default {
  name: 'Nationwide',

  components:{
      LineChart,
  },

  data(){
      return{
          totalConfirmed: [],
          totalRecovered : [],
          totalDeceased : [],
          chartOptions: {
                responsive: true,
                maintainAspectRatio: true,
                tooltips: {
                    // Disable the on-canvas tooltip
                    enabled: true,
                },
                scales: {
                            xAxes: [{
                            gridLines: {
                            display: false
                        }
                        }],
                yAxes: [{
                gridLines: {
                display: false
                }
                 }]
                }
            },
          todayConfirmed: "",
          todayRecovered: "",
          todayDeceased:  "",
          
      };
  },

    methods:{
      ...mapActions(['getData'])
    },

    computed: {
      ...mapGetters(['nationwide']),
      ...mapState(['nationwide'])
    },

    created(){
        this.getData().then(() => {

            const nationGraph =  this.nationwide.cases_time_series;

            nationGraph.forEach((d) => {

            const {
                date,
                totalconfirmed,
                totaldeceased,
                totalrecovered,
                } = d;

            this.totalConfirmed.push({ date, data: totalconfirmed });
            this.totalRecovered.push({ date, data: totalrecovered });
            this.totalDeceased.push({ date, data: totaldeceased });
            });

        }).then(() => {
                
            this.todayConfirmed = this.nationwide.statewise[0].confirmed;
            this.todayRecovered = this.nationwide.statewise[0].recovered;
            this.todayDeceased = this.nationwide.statewise[0].deaths;

            });
        

        
        
       
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
