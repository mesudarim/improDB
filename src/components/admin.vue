<template >
  <div class="container" style="text-align: left">
    <nav>
      <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist" style="color:black">
        <a
          class="nav-item nav-link active"
          id="nav-random-tab"
          data-toggle="tab"
          href="#nav-random"
          role="tab"
          aria-controls="nav-random"
          aria-selected="true"
        >Cours des miracles</a>
        <a
          class="nav-item nav-link"
          id="nav-addToDB-tab"
          data-toggle="tab"
          href="#nav-addToDB"
          role="tab"
          aria-controls="nav-addToDB"
          aria-selected="false"
        >Base de donnée</a>
      </div>
    </nav>

    <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-random"
        role="tabpanel"
        aria-labelledby="nav-random-tab"
      >
        <div primary-title dark>
          <h2>Salut {{ userName }}</h2>

          <h3>Tu cherches des idées?</h3>
        </div>
        <div class="h5">Situation en plein Corona Time</div>
        <div class="randomDiv">{{randomSituationCorona}}</div>
        <div class="h5">Situation</div>
        <div class="randomDiv">{{randomSituation}}</div>
        <div class="h5">Un endroit</div>
        <div class="randomDiv" style="height: 30px">{{randomPlace}}</div>
        <div class="h5">Une relation</div>
        <div class="randomDiv" style="height: 30px">{{randomRelation}}</div>
        <div class="h5">Une émotion</div>
        <div class="randomDiv" style="height: 30px">{{randomEmotion}}</div>
        <button
          block
          type="submit"
          :loading="loading"
          outline
          class="btn btn-primary mt-1 btn-sm btn-block"
          @click="getRandomData"
        >
          Générer
          <span slot="loader" class="custom-loader"></span>
        </button>
      </div>

      <div class="tab-pane fade" id="nav-addToDB" role="tabpanel" aria-labelledby="nav-addToDB-tab">
        <div class="p-3">
          <form @submit.prevent="addSituationCorona" width="90%">
            <div class="form-group">
              <label for="addSituationCorona">Spéciale situation CoronaTime</label>
              <textarea
                class="form-control"
                aria-describedby="addSituationCorona"
                placeholder="Ajouter une situation aux temps du covid-19"
                name="addSituationCorona"
                dark
                label="addSituationCorona"
                id="addSituationCorona"
                v-model="situationCorona"
                required
              />
            </div>

            <div xs12>
              <button
                block
                type="submit"
                :loading="loading"
                outline
                class="btn btn-primary mt-1 btn-sm btn-block"
              >
                Ajouter la situation CoronaTime
                <span slot="loader" class="custom-loader"></span>
              </button>
            </div>
          </form>
        </div>

        <div class="p-3">
          <form @submit.prevent="addSituation" width="90%">
            <div class="form-group">
              <label for="addSituation">Nouvelle situation</label>
              <textarea
                class="form-control"
                aria-describedby="addSituation"
                placeholder="Ajouter une situation"
                name="addSituation"
                dark
                label="addSituation"
                id="addSituation"
                v-model="situation"
                required
              />
            </div>

            <div xs12>
              <button
                block
                type="submit"
                :loading="loading"
                outline
                class="btn btn-primary mt-1 btn-sm btn-block"
              >
                Ajouter la situation
                <span slot="loader" class="custom-loader"></span>
              </button>
            </div>
          </form>
        </div>

        <div class="p-3">
          <form @submit.prevent="addPlace" width="90%">
            <div class="form-group">
              <label for="addPlace">Nouvel endroit</label>
              <input
                class="form-control"
                aria-describedby="addPlace"
                placeholder="Ajouter un endroit"
                name="addPlace"
                dark
                label="addPlace"
                id="addPlace"
                v-model="place"
                required
              />
            </div>

            <div xs12>
              <button
                block
                type="submit"
                :loading="loading"
                outline
                class="btn btn-primary mt-1 btn-sm btn-block"
              >
                Ajouter l'endroit
                <span slot="loader" class="custom-loader"></span>
              </button>
            </div>
          </form>
        </div>

        <div class="p-3">
          <form @submit.prevent="addRelation" width="90%">
            <div class="form-group">
              <label for="addRelation">Nouvelle relation</label>
              <input
                class="form-control"
                aria-describedby="addRelation"
                placeholder="Ajouter une relation"
                name="addRelation"
                dark
                label="addRelation"
                id="addRelation"
                v-model="relation"
                required
              />
            </div>

            <div xs12>
              <button
                block
                type="submit"
                :loading="loading"
                outline
                class="btn btn-primary mt-1 btn-sm btn-block"
              >
                Ajouter la relation
                <span slot="loader" class="custom-loader"></span>
              </button>
            </div>
          </form>
        </div>

        <div class="p-3">
          <form @submit.prevent="addEmotion" width="90%">
            <div class="form-group">
              <label for="addEmotion">Nouvelle émotion</label>
              <input
                class="form-control"
                aria-describedby="addEmotion"
                placeholder="Ajouter une émotion"
                name="addEmotion"
                dark
                label="addEmotion"
                id="addEmotion"
                v-model="emotion"
                required
              />
            </div>

            <div xs12>
              <button
                block
                type="submit"
                :loading="loading"
                outline
                class="btn btn-primary mt-1 btn-sm btn-block"
              >
                Ajouter l'émotion
                <span slot="loader" class="custom-loader"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: localStorage.getItem("idImproUserName"),
      key: "",
      emotion: "",
      place: "",
      situation: "",
      situationCorona: "",
      randomEmotion: "",
      randomSituationCorona: "",
      randomPlace: "",
      randomSituation: "",
      relation: "",
      randomRelation: ""
    };
  },
  mounted() {
    console.log("[mounted] admin");
    this.$store.dispatch("fetchSubjects");
  },
  computed: {
    emotions() {
      return this.$store.getters.emotions;
    },
    user() {
      return this.$store.getters.user;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    getRandomData() {
      var emotions = this.$store.getters.emotions;
      var situationsCorona = this.$store.getters.situationsCorona;
      var places = this.$store.getters.places;
      var situations = this.$store.getters.situations;
      var relations = this.$store.getters.relations;

      this.randomSituationCorona =
        situationsCorona[Math.floor(Math.random() * situationsCorona.length)];
      this.randomPlace = places[Math.floor(Math.random() * places.length)];
      this.randomSituation =
        situations[Math.floor(Math.random() * situations.length)];
      this.randomEmotion =
        emotions[Math.floor(Math.random() * emotions.length)];
      this.randomRelation =
        relations[Math.floor(Math.random() * relations.length)];
    },
    addSituationCorona() {
      console.log("create situationCoronaTime", this.situationCorona);
      this.$store.dispatch("addSituationCorona", this.situationCorona);
      this.situationCorona = "";
    },
    addSituation() {
      console.log("create situationCoronaTime", this.situation);
      this.$store.dispatch("addSituation", this.situation);
      this.situation = "";
    },
    addPlace() {
      console.log("create situationCoronaTime", this.place);
      this.$store.dispatch("addPlace", this.place);
      this.place = "";
    },
    addEmotion() {
      console.log("create situationCoronaTime", this.emotion);
      this.$store.dispatch("addEmotion", this.emotion);
      this.emotion = "";
    },
    addRelation() {
      console.log("create situationCoronaTime", this.relation);
      this.$store.dispatch("addRelation", this.relation);
      this.relation = "";
    }
  }
};
</script>

<style scoped>
#nav-tabContent {
  background: rgba(255, 255, 255, 0.2);
}
#nav-addToDB-tab,
#nav-random-tab {
  color: #ffffff;
}
#nav-addToDB-tab.active,
#nav-random-tab.active {
  color: black;
  background: rgba(255, 255, 255, 0.8);
}

.randomDiv {
  height: 100px;
  background: rgba(255, 255, 255, 0.8);
  padding: 5px;
  color: black;
  margin-bottom: 10px;
}
.myModal {
  min-height: 340px;
  width: 300px;
  border-radius: 10px;
  display: block;
  margin: 0px auto;
  margin-top: calc(50vh - 170px);
  background-color: white;
  /* border: 5px solid; */
  -moz-box-shadow: 0 0 15px 15px;
  -webkit-box-shadow: 0 0 15px 15px;
  box-shadow: 0 0 15px 15px var(--box-shadow-color);
}
.over {
  position: absolute;
  top: 0px;
  font-size: 18px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
}
.fitScreen {
  max-width: 100%;
}
.uploadPicture {
  border-style: dashed;
  border-color: grey;
  border-width: thin;
  height: 144px;
  margin: 0 auto;
}
.container {
  margin-top: 0px;
  background-color: rgba(255, 255, 255, 0);
  margin: 0px;
  padding: 0px;
}
</style>



