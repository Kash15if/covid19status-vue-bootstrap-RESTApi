<template>

<div>


                <!-- graph of a particular state , all 3-->
                <h1>{{state}} {{"'s" + " " + "Data"}}</h1>

                <!--graph container-->
                <div class="row" style="margin-top: 5vh;">

                    <div class="col-md-4 col-sm-12 text-center text-primary"  v-if="totalConfirmed.length != 0">
                        <h4><b>New Cases</b></h4>
                        <h6>{{  }}</h6>

                       <line-chart
                        :chartData="totalConfirmed"
                        label="# New cases today"
                        bgcolor="#0066ff"
                        ></line-chart>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center text-success"  v-if="totalConfirmed.length != 0">
                        <h4><b>Recovered Today</b></h4>
                        <h6>{{  }}</h6>

                        <line-chart
                        :chartData="totalRecovered"
                        label="# of people recovered today"
                        bgcolor="#00b359"
                        ></line-chart>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center text-danger"  v-if="totalConfirmed.length != 0">
                        <h4><b>Today's Death</b></h4>
                        <h6>{{  }}</h6>

                        <line-chart
                        :chartData="totalDeceased"
                        label="# of todays deaths"
                        bgcolor="#ff0000"
                        ></line-chart>
                    </div>

                </div>

                <!--graph container ends-->
                


    <!--Table of all districts of a particular state-->
    <h1 align="center">Districts of {{state}}</h1><br><br>



   
                    <div class="table-responsive-xl " >

                        <table class="table table-dark table-striped">
                            <thead>
                                <tr>
                                <th>District</th>
                                <th>Total cases</th>
                                <th>Recovered</th>
                                <th>Active</th>
                                <th>Deaths</th>
                                </tr>
                            </thead>
                            <tbody>
      
                                <tr v-for="x in districtName" :key="x">
                                    
                                    <td class="text-primary"><b>{{ x }}</b></td>
                                    <td class="text-primary"><b>{{distTable[x].confirmed }}</b></td>
                                    <td class="text-success"><b>{{ distTable[x].recovered }}</b></td>
                                    <td class="text-warning"><b>{{distTable[x].active }}</b></td>
                                    <td class="text-danger"><b>{{ distTable[x].deceased }}</b></td>
                                    
                                </tr>

                            
                                

                            </tbody>
                        </table>

                    </div>

</div>

</template>

<script>
import  { mapActions , mapGetters , mapState } from 'vuex';
import LineChart from "../graph/graph.vue";

export default {
  name: 'District',
  components:{
      LineChart,
  },
  data: function(){
      return{
          state: "",
          code: "",
          totalConfirmed: [],
          totalRecovered : [],
          totalDeceased : [],
          districtName: [],
          distTable: [],

      };
  },

  methods:{
        ...mapActions(['getData']),
  },

  computed: {
      ...mapGetters(['districts','statesgraph']),
      ...mapState(['districts' , 'statesgraph'])
  },

  created(){
      this.getData().then(() => {
      this.state = this.$route.query.state;
      this.code = this.$route.query.code;
      }).then(() => {
          
          // logic for graph to separate data
          const statesGraph =  this.statesgraph.states_daily;
            let i = 1;

            const stCode = this.code.toLowerCase();

            var skipDate = 1;
            statesGraph.forEach((d) => {

            if(skipDate > 270){
  
            const date = d.date;
            
            if(i == 1){
            const conf = d[stCode];
            this.totalConfirmed.push({ date, data: conf });
            }
            if( i == 2){
                const recov = d[stCode];
                this.totalRecovered.push({ date, data: recov });
            
            }
            if( i == 3 ){
                const death = d[stCode];
                this.totalDeceased.push({ date, data: death });
                i = 0;
            }

            i++;
            }
            else{
                
                skipDate++;
            }
            
            });
      }).then(() => {

          //logic for table
          this.distTable =  this.districts[this.state].districtData;
          
          this.districtName = Object.keys(this.distTable);

          console.log(this.districtName);
          
      });

      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 , h3 {
    text-align: center;
    color: #0e6660;
    margin: 5vh 5% 0 5%;
    
}

.table-responsive-xl{
    padding: 0 2vw 0 2vw;
    margin-top: 10vh;
}
</style>
