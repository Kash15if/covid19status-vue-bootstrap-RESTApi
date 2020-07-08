<template>

<div>
                <h1>Worldwide Data</h1>

                <div class="row" style="margin-top: 100px;">

                    <div class="col-md-4 col-sm-12 text-center text-primary">
                       
                        <h4><b>Total Case</b></h4>
                        <h6> {{'~' + ' '}} {{ worldwide.Global.TotalConfirmed}}</h6>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center text-success">
                        <h4><b>Recovered</b></h4>
                        <h6> {{'~' + ' '}} {{ worldwide.Global.TotalRecovered }}</h6>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center text-danger">
                        <h4><b>Death</b></h4>
                        <h6> {{'~' + ' '}} {{ worldwide.Global.TotalDeaths }}</h6>
                    </div>

                </div>

                <h3>Search your country here</h3>
                <div class="map">
                <Map style='width: 100%; height: 80vh'>
                <MglMap
                :mapboxGl="mapbox-gl"
                @load="onMapLoaded"
                /></Map>
                </div>
                

                    <h3>Tablewise Data</h3>
                    <div class="table-responsive-xl " >

                        <table class="table table-dark table-striped">
                            <thead>
                                <th>Country</th>
                                <th>Total cases</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                            </thead>
                            <tbody>
      
                            
                            
                                <tr  v-for="country in worldwide.Countries" :key="country.CountryCode">
                                    <td><b>{{ country.Country}}</b></td>
                                    <td><b>{{ country.TotalConfirmed}}</b></td>
                                    <td><b>{{ country.TotalRecovered}}</b></td>
                                    <td><b>{{ country.TotalDeaths}}</b></td>
                                    
                                </tr>
                            
                                

                            </tbody>
                        </table>

                    </div>


</div>


</template>

<script>

import  { mapActions , mapGetters} from 'vuex';
import Map from "../graph/map.vue";


export default {
  name: 'Worldwide',
  data(){
      return{

      };
  },
  components:{
      Map
  },
  methods:{
      ...mapActions(['getData'])
  },
  computed: {
      ...mapGetters(['worldwide'])
  },
  created(){
        this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h4{
    margin-top: 2vh;
}

.col-sm-12{
    margin-top: 1vh;
}

.table{
    margin-top: 10vh;
}

th{
    font-size: 22px;
    font-weight: bold;
    color: rgb(128, 253, 191);
}

.map{
    padding: 10vh 0vw 10vh 2vw;
}

h1 , h3 {
    text-align: center;
    color: #0e6660;
    margin-top: 5vh;
}

.table-responsive-xl{
    padding: 0 2vw 0 2vw;
}
</style>
