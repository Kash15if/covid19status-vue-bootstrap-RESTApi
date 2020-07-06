<template>

<div>

                <div class="row" style="margin-top: 100px;">

                    <div class="col-md-4 col-sm-12 text-center text-primary">
                       
                        <h4><b>Total Case</b></h4>
                        <h6> {{'*' + ' '}} {{ worldwide.Global.TotalConfirmed}}</h6>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center text-success">
                        <h4><b>Recovered</b></h4>
                        <h6> {{'*' + ' '}} {{ worldwide.Global.TotalRecovered }}</h6>
                    </div>

                    <div class="col-md-4 col-sm-12 text-center text-danger">
                        <h4><b>Death</b></h4>
                        <h6> {{'*' + ' '}} {{ worldwide.Global.TotalDeaths }}</h6>
                    </div>

                </div>


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
      
                            
                            
                                <tr  v-for="country in worldwide.Countries" :key="country.CountryCode">

                                    <td><b>{{ country.Date }}</b></td>
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


export default {
  name: 'Worldwide',
  data(){
      return{

      };
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

.col-sm-12{
    margin-top: 5vh;
}

.table{
    margin-top: 10vh;
}
</style>
