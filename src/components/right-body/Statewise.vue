<template>
  <div>
    <!--Search Box-->
    <div
      class="input-group mb-3"
      style="width: 90%;margin-left: 5%;margin-top: 70px;"
    >
      <input
        type="text"
        class="form-control"
        placeholder="Search States"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        v-model="search"
      />

    </div>

    <!--states lists with grid-->
    <div class="container" style="margin-top: 50px;">
      <div class="row">
        <div
          class="col-md-4 col-sm-6"
          v-for="{ i, state, code } in filterStates"
          :key="i"
        >
          <router-link
            :to="{ path: '/distwise', query: { state: state, code: code } }"
            exact
          >
            <div class="statebox">
              <b>{{ state }}</b>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router";

import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "Statewise",

  data() {
    return {
      stateLists: [],
      search: ''
    };
  },

  methods: {
    ...mapActions(["getData"]),
  },
  computed: {
    ...mapGetters(["nationwide"]),
    ...mapState(["nationwide"]),
    filterStates: function (){

      return this.stateLists.filter((stateList) => {
        return stateList.state.toLowerCase().match(this.search.toLowerCase())
      });
    }
  },
  created() {
    this.getData().then(() => {
      const statesData = this.nationwide.statewise;
      let i = -1;

      statesData.forEach((d) => {
        if (i >= 0) {
          let sts = d.state;
          let code = d.statecode;

          this.stateLists.push({ i, state: sts, code: code });
        }
        i++;
      });
    });

  },
};
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
  margin-left: 5%;
}
</style>
