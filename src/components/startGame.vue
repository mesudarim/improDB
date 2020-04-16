<template >
  <div class="p-0">
    <div class="mr-3 mt-3" style="position: absolute; top: 0">
      <p>טעויות: {{ errorNumber }}</p>
    </div>
    <div
      class="mr-3 mt-3"
      style="position: absolute; top: 0; left: 10px"
      @click="showMap = true, missingWordAnswer = '' "
    >
      <p>מפה</p>
    </div>

    <div class="time" style="direction: ltr">{{ secondsToTime }}</div>

    <div v-if="rowPhotoMissingWord" style="display: block" class="p-3">
      <p class="userName rtl" right>
        חפשו על המפה את
        <span
          class="font-weight-bold"
        >הנקודה מספר {{ Object.values(points)[pointsArrayOrder[pointNum]].pointNumber }}</span> הגיעו אליו וחפשו את השלט המופיע על התמונה למטה.
      </p>
      <p
        class="userName rtl"
        right
      >אחד המילים על השלט חסרה בתמונה. הכתבו את המילה החסרה מתחת לתמונה ואשרו את תשובתכם על ידי לחיצה על כפתור "שלח" .</p>
      <img id="imgUrl" class="black--text align-end" width="100%" :src="getImgUrl" />
      <div class="mt-3">
        <div class="form-group">
          <label for="missingWordAnswer">מילה חסרה בשלט</label>
          <input
            class="form-control"
            aria-describedby="missingWordAnswer"
            placeholder="מילה חסרה בשלט"
            name="missingWordAnswer"
            label="missingWordAnswer"
            id="missingWordAnswer"
            v-model="missingWordAnswer"
            required
          />
        </div>
      </div>
      <button
        class="fullWidth colorBtn btn font-weight-bold"
        style="background-color: green"
        @click="checkMissingWord"
      >שלח</button>
    </div>

    <div v-if="rowPhotoMissingWord === false" style="display: block" align="center">
      <div class="my-5">
        <p class="question" right>{{ questionSuffled[questionNumber].question }}</p>
      </div>

      <div :key="answer.id" v-for="answer in getAnswerArray">
        <button
          class="fullWidth colorBtn btn font-weight-bold mb-3"
          style="background-color: green"
          @click="checkAnswer(answer)"
        >{{ answer }}</button>
      </div>
    </div>

    <div v-if="dialogCorrectAnswer" class="over">
      <div class="myModal p-4 mb-5 green">
        <div class="h2 mb-4 rtl text-center">יפה לכם!</div>
        <div class="rtl mb-4 text-center">תשובה נכונה!</div>
        <div>
          <button
            class="fullWidth colorBtn btn font-weight-bold mt-5"
            style="background-color: green; position: relative; top: 100px"
            @click="hideImageQuestion"
          >אז בואו נשמיך</button>
        </div>
      </div>
    </div>

    <!-- <div v-if="dialogWithLetter" class="over">
      <div class="myModal p-4 mb-5 green">
        <div class="h3 rtl">האות שלכם</div>
        <div
          class="rtl mb-5"
        >קיבלתם אות חדשה שיעזור לכם לפתור את החידה ולמצוא את האוצר בעזרת הקבוצות האחרות.</div>

        <div class="rtl mb-5 h1">{{ letter }}</div>
        <div>
          <button
            class="fullWidth colorBtn btn font-weight-bold mt-5"
            style="background-color: green"
            @click="hideImageQuestion"
          >אז בואו נמשיך</button>
        </div>
      </div>
    </div>-->

    <div v-if="dialogWrongAnswer" class="over">
      <div class="myModal p-4 mb-5 red">
        <div class="col h2 mb-4 rtl text-center">אופס...</div>
        <div class="col rtl mb-4 text-center">התשובה לא נכונה</div>
        <button
          class="fullWidth colorBtn btn font-weight-bold"
          style="background-color: green; position: relative; top: 100px"
          @click="dialogWrongAnswer = false, missingWordAnswer = '' "
        >ננסה שוב</button>
      </div>
    </div>

    <div v-if="showLastDialog" class="over">
      <div class="myModal p-4 mb-5 green">
        <div class="h3 rtl mb-2">יופי סיימתם את ניווט !</div>
        <div
          class="rtl mb-5"
        >עשכיו אתם צריכים למצוא את האוצר. תרכיבו מילה או מילים עם האותיות שקיבלתם ובעזרת הקבוצות האחרות תרכיבו משפט שיעזור לכם למצוא את מיקום האוצר.</div>
        <button
          class="fullWidth colorBtn btn font-weight-bold"
          style="background-color: green; position: relative; top: 100px"
          @click="showResults"
        >תוצאות</button>
      </div>
    </div>

    <div
      v-if="showMap"
      style="position: fixed; top: 0; right: 0; height: 100vh; width: 100vw; z-index: 100; overflow: hidden"
    >
      <span
        @click="showMap=false"
        style="position: absolute; top: 9px; font-size: 20px; z-index: 100; color: white; font-weight: bold; right: 15px"
      >לסגור</span>
      <GmapMap
        :center="{lat:32.656549, lng:35.416317}"
        :zoom="15"
        map-type-id="satellite"
        style="width: 100vw; height: 100vh"
        :options="{
   zoomControl: false,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: false,
   disableDefaultUi: false
 }"
      >
        <GmapMarker
          style="margin-right: 10px !important"
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          :label="{'text': `${index+1}`, 'color': 'white', 'fontSize': '9px'}"
          @click="center=m.position"
        />
      </GmapMap>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  data() {
    return {
      secondsToTime: "00:00:00",
      totalSeconds: 0,
      showMap: false,
      showLastDialog: false,
      dialogWithLetter: false,
      key: "",
      questiomMultipleChoices: true,
      rowPhotoMissingWord: true,
      dialogWrongAnswer: false,
      dialogCorrectAnswer: false,
      missingWordAnswer: "",
      loading: false,
      src: "",
      questionNumber: 0,
      errorNumber: 0,
      pointNum: 0,
      letter: "",
      allLetters: "",
      markers: [
        { position: { lat: 32.660958, lng: 35.416243 } },
        { position: { lat: 32.661789, lng: 35.414207 } },
        { position: { lat: 32.659775, lng: 35.418373 } },
        { position: { lat: 32.657926, lng: 35.41924 } },
        { position: { lat: 32.659349, lng: 35.41387 } },
        { position: { lat: 32.653956, lng: 35.414696 } },
        { position: { lat: 32.654909, lng: 35.416246 } },
        { position: { lat: 32.65551, lng: 35.4178184 } },
        { position: { lat: 32.657037, lng: 35.417072 } },
        { position: { lat: 32.656123, lng: 35.419569 } },
        { position: { lat: 32.65896, lng: 35.416515 } }
      ]
    };
  },
  mounted() {
    history.pushState(null, null, location.href);
    window.onpopstate = function() {
      history.go(1);
    };
    this.countSeconds();
  },
  computed: {
    initMap() {
      var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
      return map;
    },
    group() {
      return this.$store.getters.group;
    },
    points() {
      console.log("[computed] => points", this.$store.getters.points);
      return this.$store.getters.points;
    },
    questions() {
      console.log("[computed] => questions", this.$store.getters.questions);
      return this.$store.getters.questions;
    },
    getImgUrl() {
      return Object.values(this.points)[this.pointsArrayOrder[this.pointNum]]
        .imageUrl;
    },
    pointsArrayOrder() {
      console.log(
        "[computed] => pointsArrayOrder",
        this.$store.getters.pointsArrayOrder
      );
      return this.$store.getters.pointsArrayOrder;
    },
    questionSuffled() {
      console.log(
        "[computed] => questionsShuffled",
        this.$store.getters.questionsShuffled
      );
      return this.$store.getters.questionsShuffled;
    },
    getAnswerArray() {
      let answerArray = [
        this.questionSuffled[this.questionNumber].wrongAnswer1,
        this.questionSuffled[this.questionNumber].wrongAnswer2,
        this.questionSuffled[this.questionNumber].wrongAnswer3,
        this.questionSuffled[this.questionNumber].correctAnswer
      ];
      let currentIndex = answerArray.length,
        temporaryValue,
        randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = answerArray[currentIndex];
        answerArray[currentIndex] = answerArray[randomIndex];
        answerArray[randomIndex] = temporaryValue;
      }
      return answerArray;
    }
  },
  methods: {
    countSeconds() {
      setInterval(_ => {
        this.totalSeconds++;
        var pad = function(num, size) {
            return ("000" + num).slice(size * -1);
          },
          time = parseFloat(this.totalSeconds).toFixed(3),
          hours = Math.floor(time / 60 / 60),
          minutes = Math.floor(time / 60) % 60,
          seconds = Math.floor(time - minutes * 60);

        this.secondsToTime =
          pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);
      }, 1000);
    },
    showResults() {
      this.$store.dispatch("checkResults", {
        errorNumber: this.errorNumber,
        secondsToTime: this.secondsToTime,
        totalSeconds: this.totalSeconds
      });
      this.$router.push("/results");
    },
    checkMissingWord() {
      if (
        this.missingWordAnswer ===
        Object.values(this.points)[this.pointsArrayOrder[this.pointNum]]
          .missingWord
      ) {
        this.dialogCorrectAnswer = true;
      } else {
        this.dialogWrongAnswer = true;
        this.errorNumber++;
      }
    },
    checkAnswer(answer) {
      if (answer === this.questionSuffled[this.questionNumber].correctAnswer) {
        // if (this.$store.getters.lettersArray[this.pointNum]) {
        //   this.letter = this.$store.getters.lettersArray[this.pointNum];
        // } else {
        //   this.letter = "_";
        // }
        // this.allLetters = this.allLetters + " - " + this.letter;
        var allPoints = Object.keys(this.points);
        if (
          Object.values(this.points)[this.pointsArrayOrder[this.pointNum]]
            .pointNumber === "1"
        ) {
          console.log(
            "this.points[this.pointsArrayOrder[this.pointNum]].pointNum === 1"
          );
          this.showLastDialog = true;
        } else {
          console.log(
            "!!!!!!!!!!this.points[this.pointsArrayOrder[this.pointNum]].pointNum === 1"
          );
          this.dialogCorrectAnswer = true;
        }
      } else {
        this.dialogWrongAnswer = true;
        this.errorNumber++;
      }
    },
    // showLetter() {
    //   this.dialog = false;
    //   if (this.rowPhotoMissingWord === false) {
    //     this.dialogWithLetter = true;
    //   } else {
    //     this.hideImageQuestion();
    //   }
    // },
    hideImageQuestion() {
      this.dialogCorrectAnswer = false;

      if (this.questionSuffled[this.questionNumber + 1] != null) {
        this.missingWordAnswer = "";
        this.rowPhotoMissingWord = !this.rowPhotoMissingWord;
        // this.dialogWithLetter = false;
        if (this.rowPhotoMissingWord) {
          this.questionNumber++;
          this.pointNum++;
          console.log(
            "[hideImageQuestion] this.questionNumber",
            this.questionNumber
          );
        }
      } else {
        this.questionNumber = this.questionNumber + 2;
        console.log(
          "[hideImageQuestion] this.questionNumber",
          this.questionNumber
        );
        this.rowPhotoMissingWord = !this.rowPhotoMissingWord;
        this.dialogCorrectAnswer = false;
      }
    }
  }
};
</script>

<style scoped>
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
.red {
  --box-shadow-color: red;
}
.green {
  --box-shadow-color: darkgreen;
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
.colorBtn {
  border-radius: 36px;
  height: 56px;
  color: white;
}
.fullWidth {
  width: 95%;
  display: block;
  margin: 0px auto;
}
.question {
  text-align: center;
  font-family: "Assistant", sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: black;
}
.btnAnswer {
  margin: 0 auto;
  width: 320px;
  height: 60px;
  border-radius: 35px;
  font-size: 20px;
  color: white;
  background: rgb(64, 150, 83) !important;
}
.title {
  font-size: 25px;
  text-align: right;
  color: black;
}
.userName {
  font-size: 18px;
  text-align: right;
  color: black;
}
.time {
  letter-spacing: 0.05em;
  font-size: 50px;
  padding: 5px 0;
  font-family: "Inconsolata", monospace;
  text-align: center;
  position: relative;
  left: 50%;
  top: 52px;
  transform: translate(-50%, -50%);
  color: rgb(47, 107, 12);
  text-shadow: 0 0 20px rgb(60, 134, 84), 0 0 20px rgba(10, 230, 83, 0);
  /* letter-spacing: 0.05em;
  font-size: 50px;
  padding: 5px 0;
  font-family: "Inconsolata", monospace;
  color: #ffffff;
  text-align: center;
  position: relative;
  left: 50%;
  margin-top: 50px;
  top: 40px;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0); */
}
.startTime {
  letter-spacing: 0.05em;
  font-size: 40px;
  padding: 5px 0;
  font-family: "Inconsolata", monospace;
  color: #ffffff;
  text-align: center;
  position: relative;
  left: 50%;
  margin-top: 50px;
  top: -24px;
  transform: translate(-50%, -50%);
  color: #daf6ff;
}
.hebrewText {
  text-align: right;
  font-size: 15px;
  padding-right: 5px;
  color: black;
}
</style>

// this.loggedOut = false
// let d = new Date()
// this.startTime = d.toLocaleTimeString('he')
// this.loading = true
    // timeNow() {
    //   return setInterval(_ => {
    //     let d = new Date();
    //     this.time = d.toLocaleTimeString("he");
    //   }, 1000);
    // }
// ///////////////// GET LOCATION ////////////////////////////////

// console.log('getLocation')
// if (!navigator.geolocation) {
// console.log('no geolocation in browser')
// return
// }
// console.log('after if navigator');
// let sawAlert = false
// We hide the button and show the spinner
// this.searchingForLocation = true
// console.log('just before navigator.geolocation.getCurrentPosition');
// setTimeout(_ => {
// this.searchingForLocation = false
// if (sawAlert === false && this.fetchedLocation === {lat: 0, lng: 0}) {
// console.log('should show the alert')
// alert('Couldn\'t load location, please try again')
// sawAlert = true
// console.log('[getLocation] this.fetchedLocation in the setTimeout', this.fetchedLocation)
// this.loading = false
// } else {
// console.log('[getLocation] this.fetchedLocation in the setTimeout ELSE!!!', this.fetchedLocation)
// this.$store.dispatch('addStartShift', {readibleStartTime: this.startTime, location: this.fetchedLocation})
// this.shiftStarted = true
// this.loading = false
// }
// }, 5000)
// navigator.geolocation.getCurrentPosition(position => {
// console.log('in navigator.geolocation.getCurrentPosition')
// this.fetchedLocation = {lat: position.coords.latitude, lng: position.coords.longitude}
// console.log('[getLocation] this.fetchedLocation', this.fetchedLocation)
// this.lat = position.coords.latitude
// this.lon = position.coords.longitude
// var geocoder = new google.maps.Geocoder()
// let myPlace = new google.maps.LatLng(this.lat, this.lon)
// let geopos = `${this.lat},${this.lon}`
// let latlngStr = geopos.split(',', 2)
// var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])}
// console.log('latlng =>', latlng)
// geocoder.geocode({'location': latlng}, (results, status) => {
// console.log('results ', results)
// // this.address = {
// // administrative_area_level_1: results[4].address_components["0"].long_name,
// // country: results[4].address_components[1].long_name,
// // latitude: this.lat,
// // longitude: this.lon,
// // locality: results["0"].address_components[1].long_name,
// // route: results["0"].address_components["0"].long_name,
// // street_number: results["0"].address_components["0"].long_name
// // }
// this.address = {
// latitude: this.lat,
// longitude: this.lon
// }
// console.log('[this address nvo object]', this.address)
// })
// this.searchingForLocation = false
// })
// checkOut () {
// this.loading = true

// let d = new Date()
// this.endTime = d.toLocaleTimeString('he')

// // ///////////////// GET LOCATION ////////////////////////////////

// console.log('getLocation')
// if (!navigator.geolocation) {
// console.log('no geolocation in browser')
// return
// }
// // console.log('after if navigator');
// let sawAlert = false
// // We hide the button and show the spinner
// this.searchingForLocation = true
// // console.log('just before navigator.geolocation.getCurrentPosition');
// setTimeout(_ => {
// this.searchingForLocation = false
// if (sawAlert === false && this.fetchedLocation === {lat: 0, lng: 0}) {
// console.log('should show the alert')
// alert('Couldn\'t load location, please try again')
// sawAlert = true
// console.log('[getLocation] this.fetchedLocation in the setTimeout', this.fetchedLocation)
// this.loading = false
// } else {
// console.log('[getLocation] this.fetchedLocation in the setTimeout ELSE!!!', this.fetchedLocation)
// this.$store.dispatch('endShift', {readibleEndTime: this.endTime, location: this.fetchedLocation})
// this.loading = false
// this.loggedOut = true
// this.shiftEnded = true
// }
// }, 5000)
// navigator.geolocation.getCurrentPosition(position => {
// console.log('in navigator.geolocation.getCurrentPosition')
// this.fetchedLocation = {lat: position.coords.latitude, lng: position.coords.longitude}
// console.log('[getLocation] this.fetchedLocation', this.fetchedLocation)
// this.lat = position.coords.latitude
// this.lon = position.coords.longitude
// var geocoder = new google.maps.Geocoder()
// let myPlace = new google.maps.LatLng(this.lat, this.lon)
// let geopos = `${this.lat},${this.lon}`
// let latlngStr = geopos.split(',', 2)
// var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])}
// console.log('latlng =>', latlng)
// geocoder.geocode({'location': latlng}, (results, status) => {
// console.log('results ', results)
// // this.address = {
// // administrative_area_level_1: results[4].address_components["0"].long_name,
// // country: results[4].address_components[1].long_name,
// // latitude: this.lat,
// // longitude: this.lon,
// // locality: results["0"].address_components[1].long_name,
// // route: results["0"].address_components["0"].long_name,
// // street_number: results["0"].address_components["0"].long_name
// // }
// this.address = {
// latitude: this.lat,
// longitude: this.lon
// }
// console.log('[this address nvo object]', this.address)
// })
// this.searchingForLocation = false
// })

// },
// reset () {
// this.shiftEnded = false
// this.shiftStarted = false
// }


