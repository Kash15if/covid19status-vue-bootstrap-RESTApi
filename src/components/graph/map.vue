<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: 'pk.eyJ1Ijoia2FzaDE1aWYiLCJhIjoiY2tiMXNlMW9zMDZzbTJ3cjFmeHJxN2RvYyJ9.55UJJiIIQnwnEhTdo43PEQ', // your access token. Needed if you using Mapbox maps
      mapStyle:'mapbox://styles/mapbox/streets-v11' // your map style
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }
};
</script>

<style scoped>

</style>