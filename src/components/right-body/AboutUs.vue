<template>
  <div class="row rowBody bg-dark">
    <!-- imagebox container-->
    <div class="col-md-4 col-sm-12">
      <img :src="this.photoLink" />
    </div>

    <!--my details and social media handle-->
    <div class="myDetails col-md-8 col-sm-12">
      <h2 style="margin-top: 5%;">
        Hi. I'm <b class="name "> Kashif Ahmad.</b>
      </h2>
      <h5 style="margin-top: 5%;">
        A Focused and enthusiastic Full Stack Developer with a keen interest in web and android 
        development and solving DSA problems. I am a passionate individual who thrives to build 
        and apply algorithms to solve real-world industry problems. worked on various technologies 
        like git, cloud, devops, etc.
      </h5>
      <h5 style="margin-top: 5%;">Skills :-</h5>

      <div class="row">
        <div class="col-md-6 col-sm-12">
          <p>Back End</p>
          <ul style="list-style-type: square;">
            <li>Node.js , Express.js</li>
            <li>Java</li>
            <li>MongoDb , MySql</li>
          </ul>
        </div>

        <div col-md-6 col-sm-12>
          <p>Front End</p>
          <ul style="list-style-type: square;">
            <li>HTML , CSS , Vanilla js</li>
            <li>Framework: Vue , React</li>
            <li>CSS library: bootstrap , materialize , bulma</li>
          </ul>
        </div>

        <div class="col-md-6 col-sm-12">
          <h5 style="margin-top: 5%;">Follow me :</h5>
          <a
            href="https://github.com/Kash15if"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-github-square"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/kashif-ahmad-373286164/"
            target="_blank"
            rel="noopener noreferrer"
            ><i class="fab fa-linkedin"></i
          ></a>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import photoLink from "../../assets/kash.jpg";

export default {
  name: "Aboutus",

  data() {
    return {
      photoLink: photoLink,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 37vh;
  width: 70%;
  border-radius: 50%;
  margin-left: 15%;
  margin-top: 20%;
}

b {
  font-family: cursive;
  color: #8fd8d3;
}

.name {
  font-size: 45px;
  margin-left: 10px;
}

.rowBody {
  padding-top: 20vh;
  padding-bottom: 30vh;
  color: #3eaca4;
}

.row {
  padding-left: 5%;
}

i {
  width: 22.5%;
  font-size: 45px;
  color: #4fbbb4;
}

i:hover:not(.active) {
  color: #d2ebf8;
  font-size: 55px;
}
</style>
