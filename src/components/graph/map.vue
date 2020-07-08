<template>
  <div class="container">
    <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle" :zoom = "zoom" :center= "center">
      <MglNavigationControl position="top-right" />
      <MglGeolocateControl position="top-right" />
      <MglPopup :coordinates="popupCoordinates">
        <span>Hello world!</span>
      </MglPopup>
    </MglMap>
  </div>
</template>

<script>
import {
  MglMap,
  MglNavigationControl,
  MglGeolocateControl,
  MglPopup
} from "vue-mapbox";

export default {
  name: 'map',
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglPopup
  },
  data() {
    return {
      accessToken: "pk.eyJ1Ijoia2FzaDE1aWYiLCJhIjoiY2tiMXNlMW9zMDZzbTJ3cjFmeHJxN2RvYyJ9.55UJJiIIQnwnEhTdo43PEQ",
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
      popupCoordinates: [77, 28],
      zoom: 3.5,
      center: [77,24]
    };
  },
};
</script>

<style scoped>


</style>














