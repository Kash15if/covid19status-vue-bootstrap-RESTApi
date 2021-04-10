<template>
<div>

                <h1>Nationwide Data</h1>

                <!--graph container-->
                <div class="row" style="margin-top: 5vh;">

                    <div class="col-md-4 col-sm-12 text-center text-primary"  v-if="totalConfirmed.length != 0">
                        <h4><b>New Cases</b></h4>
                        <h6>{{ todayConfirmed }}</h6>

                       <line-chart
                        :chartData="totalConfirmed"
                        label="# New cases each today"
                        bgcolor="#0066ff"
                        ></line-chart>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center text-success"  v-if="totalConfirmed.length != 0">
                        <h4><b>Recovered daily</b></h4>
                        <h6>{{ todayRecovered }}</h6>

                        <line-chart
                        :chartData="totalRecovered"
                        label="# of people recovered each day"
                        bgcolor="#00b359"
                        ></line-chart>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center text-danger"  v-if="totalConfirmed.length != 0">
                        <h4><b>Death</b></h4>
                        <h6>{{ todayDeceased }}</h6>

                        <line-chart
                        :chartData="totalDeceased"
                        label="# of deaths  each day"
                        bgcolor="#ff0000"
                        ></line-chart>
                    </div>

                </div>
      
                <h3>Search states on Map</h3>
                <div class="map">
                <Map style='width: 100%; height: 80vh'>
                <MglMap
                :mapboxGl="mapbox-gl"
                @load="onMapLoaded"
                /></Map>
                </div>

</div>
</template>

<script>
import LineChart from "../graph/graph.vue";
import {mapGetters , mapActions , mapState } from 'vuex';
import Map from "../graph/map.vue";

export default {
  name: 'Nationwide',

  components:{
      LineChart,
      Map,
  },
  

  data(){
      return{
          totalConfirmed: [],
          totalRecovered : [],
          totalDeceased : [],
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
            let i = 0;

            nationGraph.forEach((d) => {

            const {
                date,
                dailyconfirmed,
                dailydeceased,
                dailyrecovered,
                } = d;
            if(i >= 150){
            this.totalConfirmed.push({ date, data: dailyconfirmed });
            this.totalRecovered.push({ date, data: dailyrecovered });
            this.totalDeceased.push({ date, data: dailydeceased });
            }

            i++;
            
            });

        }).then(() => {
                
            this.dailyConfirmed = this.nationwide.statewise[0].confirmed;
            this.dailyRecovered = this.nationwide.statewise[0].recovered;
            this.dailyDeceased = this.nationwide.statewise[0].deaths;

            });
        

        
        
       
    },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h4{
    margin-top: 3vh;
}

.col-sm-12{
    padding-top: 10vh;
}

.map{
    padding: 10vh 0vw 10vh 2vw;
    height: 60%;
}

h1 , h3 {
    text-align: center;
    color: #0e6660;
    margin-top: 5vh;
}


</style>
