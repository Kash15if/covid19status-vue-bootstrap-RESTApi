<template>
  <div class="symptom bg-dark">
    <h2 style="text-align: center;">Symptoms for Covid-19</h2>

    <!--gif row-->
    <div class="row gifRow ">
      <div class="col">
        <img src="../../assets/cough.gif" alt="" />
        <p>dry cough</p>
      </div>
      <div class="col">
        <img src="../../assets/fever.gif" alt="" />
        <p>fever</p>
      </div>
      <div class="col">
        <img src="../../assets/tiredness.gif" alt="" />
        <p>tiredness</p>
      </div>
    </div>

    <h6 style="text-align: center;">
      COVID-19 affects different people in different ways. Most infected people
      will develop mild to moderate illness and recover without hospitalization.
    </h6>
    <br />

    <!--list row-->
    <div class="row list ">
      <div class="col-md-4">
        <p>~ Most common symptoms:</p>
        <ul class="b">
          <li>fever</li>
          <li>dry cough</li>
          <li>tiredness</li>
        </ul>
        <br />
      </div>

      <div class="col-md-4">
        <p>~ Less common symptoms:</p>
        <ul class="b">
          <li>aches and pains</li>
          <li>sore throat</li>
          <li>conjunctivitis</li>
          <li>headache</li>
          <li>loss of taste or smell</li>
          <li>a rash on skin, or discolouration of fingers or toes</li>
        </ul>
        <br />
      </div>

      <div class="col-md-4">
        <p>~ Serious symptoms:</p>
        <ul class="b">
          <li>difficulty breathing or shortness of breath</li>
          <li>chest pain or pressure</li>
          <li>loss of speech or movement</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Symptoms",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.symptom {
  padding-top: 7vh;
  padding-bottom: 25vh;
  margin: 0;
  color: #3eaca4;
  overflow: auto;
}

ul.b {
  list-style-type: square;
}

h2 {
  margin-top: 5vh;
  color: #8fd8d3;
}
h6 {
  margin: 5vh 3.5% 2vh 3.5%;
  font-size: 18px;
}

.list {
  font-size: 17px;
  width: 90%;
  padding-left: 10%;
}

img {
  width: 20%;
  margin-left: 40%;
  margin-right: 40%;
}

@media (max-width: 530px) {
  img {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
}

.row {
  margin-top: 7.5vh;
}

.gifRow {
  margin: 10vh 0 5vh 0;
  text-align: center;
  color: #8fd8d3;
}
</style>
