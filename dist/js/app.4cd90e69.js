(function(t){function o(o){for(var s,a,r=o[0],l=o[1],u=o[2],d=0,m=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&m.push(i[a][0]),i[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(o);while(m.length)m.shift()();return n.push.apply(n,u||[]),e()}function e(){for(var t,o=0;o<n.length;o++){for(var e=n[o],s=!0,r=1;r<e.length;r++){var l=e[r];0!==i[l]&&(s=!1)}s&&(n.splice(o--,1),t=a(a.s=e[0]))}return t}var s={},i={app:0},n=[];function a(o){if(s[o])return s[o].exports;var e=s[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=s,a.d=function(t,o,e){a.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,o){if(1&o&&(t=a(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var s in t)a.d(e,s,function(o){return t[o]}.bind(null,s));return e},a.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(o,"a",o),o},a.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=o,r=r.slice();for(var u=0;u<r.length;u++)o(r[u]);var c=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"3e62":function(t,o,e){},"450f":function(t,o,e){},"4ec2":function(t,o,e){"use strict";var s=e("450f"),i=e.n(s);i.a},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"mainDiv"}},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light",staticStyle:{background:"rgba(160, 160, 160, 0.3)","border-bottom":"grey dashed 1px"}},[e("div",{staticClass:"navbar-brand",staticStyle:{"margin-left":"calc(50vw - 60px)","font-family":"'Rock Salt', cursive",color:"white"},domProps:{textContent:t._s(t.title)}})]),e("div",{staticStyle:{"min-height":"calc(100vh - 56px)"}},[e("router-view")],1)])},n=[],a={data:function(){return{title:"ID d'impro"}},computed:{user:function(){return this.$store.getters.user}},name:"App"},r=a,l=(e("89f2"),e("2877")),u=Object(l["a"])(r,i,n,!1,null,null,null),c=u.exports,d=e("8c4f"),m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container",staticStyle:{"text-align":"left"}},[t._m(0),e("div",{staticClass:"tab-content py-3 px-3 px-sm-0",attrs:{id:"nav-tabContent"}},[e("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-random",role:"tabpanel","aria-labelledby":"nav-random-tab"}},[e("div",{attrs:{"primary-title":"",dark:""}},[e("h2",[t._v("Salut "+t._s(t.userName))]),e("h3",[t._v("Tu cherches des idées?")])]),e("div",{staticClass:"h5"},[t._v("Situation en plein Corona Time")]),e("div",{staticClass:"randomDiv"},[t._v(t._s(t.randomSituationCorona))]),e("div",{staticClass:"h5"},[t._v("Situation")]),e("div",{staticClass:"randomDiv"},[t._v(t._s(t.randomSituation))]),e("div",{staticClass:"h5"},[t._v("Un endroit")]),e("div",{staticClass:"randomDiv",staticStyle:{height:"30px"}},[t._v(t._s(t.randomPlace))]),e("div",{staticClass:"h5"},[t._v("Une émotion")]),e("div",{staticClass:"randomDiv",staticStyle:{height:"30px"}},[t._v(t._s(t.randomEmotion))]),e("button",{staticClass:"btn btn-primary mt-1 btn-sm btn-block",attrs:{block:"",type:"submit",loading:t.loading,outline:""},on:{click:t.getRandomData}},[t._v(" Générer "),e("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"})])]),e("div",{staticClass:"tab-pane fade",attrs:{id:"nav-addToDB",role:"tabpanel","aria-labelledby":"nav-addToDB-tab"}},[e("div",{staticClass:"p-3"},[e("form",{attrs:{width:"90%"},on:{submit:function(o){return o.preventDefault(),t.addSituationCorona(o)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"addSituationCorona"}},[t._v("Spéciale situation CoronaTime")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.situationCorona,expression:"situationCorona"}],staticClass:"form-control",attrs:{"aria-describedby":"addSituationCorona",placeholder:"Ajouter une situation aux temps du covid-19",name:"addSituationCorona",dark:"",label:"addSituationCorona",id:"addSituationCorona",required:""},domProps:{value:t.situationCorona},on:{input:function(o){o.target.composing||(t.situationCorona=o.target.value)}}})]),e("div",{attrs:{xs12:""}},[e("button",{staticClass:"btn btn-primary mt-1 btn-sm btn-block",attrs:{block:"",type:"submit",loading:t.loading,outline:""}},[t._v(" Ajouter la situation CoronaTime "),e("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"})])])])]),e("div",{staticClass:"p-3"},[e("form",{attrs:{width:"90%"},on:{submit:function(o){return o.preventDefault(),t.addSituation(o)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"addSituation"}},[t._v("Nouvelle situation")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.situation,expression:"situation"}],staticClass:"form-control",attrs:{"aria-describedby":"addSituation",placeholder:"Ajouter une situation",name:"addSituation",dark:"",label:"addSituation",id:"addSituation",required:""},domProps:{value:t.situation},on:{input:function(o){o.target.composing||(t.situation=o.target.value)}}})]),e("div",{attrs:{xs12:""}},[e("button",{staticClass:"btn btn-primary mt-1 btn-sm btn-block",attrs:{block:"",type:"submit",loading:t.loading,outline:""}},[t._v(" Ajouter la situation "),e("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"})])])])]),e("div",{staticClass:"p-3"},[e("form",{attrs:{width:"90%"},on:{submit:function(o){return o.preventDefault(),t.addPlace(o)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"addPlace"}},[t._v("Nouvel endroit")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.place,expression:"place"}],staticClass:"form-control",attrs:{"aria-describedby":"addPlace",placeholder:"Ajouter un endroit",name:"addPlace",dark:"",label:"addPlace",id:"addPlace",required:""},domProps:{value:t.place},on:{input:function(o){o.target.composing||(t.place=o.target.value)}}})]),e("div",{attrs:{xs12:""}},[e("button",{staticClass:"btn btn-primary mt-1 btn-sm btn-block",attrs:{block:"",type:"submit",loading:t.loading,outline:""}},[t._v(" Ajouter l'endroit "),e("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"})])])])]),e("div",{staticClass:"p-3"},[e("form",{attrs:{width:"90%"},on:{submit:function(o){return o.preventDefault(),t.addEmotion(o)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"addEmotion"}},[t._v("Nouvelle émotion")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.emotion,expression:"emotion"}],staticClass:"form-control",attrs:{"aria-describedby":"addEmotion",placeholder:"Ajouter une émotion",name:"addEmotion",dark:"",label:"addEmotion",id:"addEmotion",required:""},domProps:{value:t.emotion},on:{input:function(o){o.target.composing||(t.emotion=o.target.value)}}})]),e("div",{attrs:{xs12:""}},[e("button",{staticClass:"btn btn-primary mt-1 btn-sm btn-block",attrs:{block:"",type:"submit",loading:t.loading,outline:""}},[t._v(" Ajouter l'émotion "),e("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"})])])])])])])])},p=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("nav",[e("div",{staticClass:"nav nav-tabs nav-fill",staticStyle:{color:"black"},attrs:{id:"nav-tab",role:"tablist"}},[e("a",{staticClass:"nav-item nav-link active",attrs:{id:"nav-random-tab","data-toggle":"tab",href:"#nav-random",role:"tab","aria-controls":"nav-random","aria-selected":"true"}},[t._v("Cours des miracles")]),e("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-addToDB-tab","data-toggle":"tab",href:"#nav-addToDB",role:"tab","aria-controls":"nav-addToDB","aria-selected":"false"}},[t._v("Base de donnée")])])])}],h={data:function(){return{userName:localStorage.getItem("idImproUserName"),key:"",emotion:"",place:"",situation:"",situationCorona:"",randomEmotion:"",randomSituationCorona:"",randomPlace:"",randomSituation:""}},mounted:function(){console.log("[mounted] admin"),this.$store.dispatch("fetchSubjects")},computed:{emotions:function(){return this.$store.getters.emotions},user:function(){return this.$store.getters.user},loading:function(){return this.$store.getters.loading}},methods:{getRandomData:function(){var t=this.$store.getters.emotions,o=this.$store.getters.situationsCorona,e=this.$store.getters.places,s=this.$store.getters.situations;this.randomSituationCorona=o[Math.floor(Math.random()*o.length)],this.randomPlace=e[Math.floor(Math.random()*e.length)],this.randomSituation=s[Math.floor(Math.random()*s.length)],this.randomEmotion=t[Math.floor(Math.random()*t.length)]},addSituationCorona:function(){console.log("create situationCoronaTime",this.situationCorona),this.$store.dispatch("addSituationCorona",this.situationCorona),this.situationCorona=""},addSituation:function(){console.log("create situationCoronaTime",this.situation),this.$store.dispatch("addSituation",this.situation),this.situation=""},addPlace:function(){console.log("create situationCoronaTime",this.place),this.$store.dispatch("addPlace",this.place),this.place=""},addEmotion:function(){console.log("create situationCoronaTime",this.emotion),this.$store.dispatch("addEmotion",this.emotion),this.emotion=""}}},f=h,g=(e("4ec2"),Object(l["a"])(f,m,p,!1,null,"83336e86",null)),v=g.exports,b=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"container position-relative"},[e("div",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[t._m(0),t._m(1),e("div",{staticClass:"py-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"center fullWidth",attrs:{name:"userName",label:"Nom et Prénom",id:"userName",required:""},domProps:{value:t.userName},on:{input:function(o){o.target.composing||(t.userName=o.target.value)}}})]),e("button",{staticClass:"fullWidth colorBtn btn font-weight-bold",staticStyle:{"background-color":"green"},on:{click:function(o){return t.onSignin()}}},[t._v("Départ")]),t.error?e("div",{attrs:{row:""}},[e("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1):t._e()])]),!0===t.confirmNameAndGroup?e("div",{staticClass:"over center"},[e("div",{staticClass:"p-3 myModal",staticStyle:{"background-color":"white"}},[e("div",{staticClass:"mt-3 text-center"},[e("div",{staticClass:"h2"},[t._v(" מעולה "+t._s(t.userName)+" ")]),e("div",{staticClass:"mt-3"},[t._v("אנחנו ממש מוכנים והמשחק מתחיל אחרי לחיצה על הכפתור")]),e("div",{staticClass:"mt-3 h3"},[t._v("בהצלחה!")])]),e("button",{staticClass:"fullWidth colorBtn btn font-weight-bold position-relative",staticStyle:{"background-color":"green",bottom:"-62px",left:"10px"},on:{click:t.onSignin}},[t._v("בואו נצא לדרך!")])])]):t._e()])},C=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"p-3",attrs:{"primary-title":""}},[t._v("3 - 2 - 1 - IMPRO!")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"p-3",attrs:{"primary-title":""}},[t._v("Donne moi ton nom camarade, que l'on puisse commencer à rigoler!")])])}],S={data:function(){return{yourName:!1,confirmNameAndGroup:!1,userName:"",myStyle:{color:this.groupColorEnglish}}},mounted:function(){var t=localStorage.getItem("idImproUserName");console.log("[mounted] userName",t),t&&(this.$store.dispatch("fetchSubjects"),this.$router.push("/admin"))},computed:{error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},methods:{onSignin:function(){"admin"===this.userName?this.$router.push("/admin"):(this.$router.push("/admin"),this.$store.dispatch("createNewUser",{userName:this.userName}))},onDismissed:function(){this.$store.dispatch("clearError")}}},y=S,w=(e("f085"),Object(l["a"])(y,b,C,!1,null,"0ac880d4",null)),_=w.exports,N=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"p-0"},[e("div",{staticClass:"mr-3 mt-3",staticStyle:{position:"absolute",top:"0"}},[e("p",[t._v("טעויות: "+t._s(t.errorNumber))])]),e("div",{staticClass:"mr-3 mt-3",staticStyle:{position:"absolute",top:"0",left:"10px"},on:{click:function(o){t.showMap=!0,t.missingWordAnswer=""}}},[e("p",[t._v("מפה")])]),e("div",{staticClass:"time",staticStyle:{direction:"ltr"}},[t._v(t._s(t.secondsToTime))]),t.rowPhotoMissingWord?e("div",{staticClass:"p-3",staticStyle:{display:"block"}},[e("p",{staticClass:"userName rtl",attrs:{right:""}},[t._v(" חפשו על המפה את "),e("span",{staticClass:"font-weight-bold"},[t._v("הנקודה מספר "+t._s(Object.values(t.points)[t.pointsArrayOrder[t.pointNum]].pointNumber))]),t._v(" הגיעו אליו וחפשו את השלט המופיע על התמונה למטה. ")]),e("p",{staticClass:"userName rtl",attrs:{right:""}},[t._v('אחד המילים על השלט חסרה בתמונה. הכתבו את המילה החסרה מתחת לתמונה ואשרו את תשובתכם על ידי לחיצה על כפתור "שלח" .')]),e("img",{staticClass:"black--text align-end",attrs:{id:"imgUrl",width:"100%",src:t.getImgUrl}}),e("div",{staticClass:"mt-3"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"missingWordAnswer"}},[t._v("מילה חסרה בשלט")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.missingWordAnswer,expression:"missingWordAnswer"}],staticClass:"form-control",attrs:{"aria-describedby":"missingWordAnswer",placeholder:"מילה חסרה בשלט",name:"missingWordAnswer",label:"missingWordAnswer",id:"missingWordAnswer",required:""},domProps:{value:t.missingWordAnswer},on:{input:function(o){o.target.composing||(t.missingWordAnswer=o.target.value)}}})])]),e("button",{staticClass:"fullWidth colorBtn btn font-weight-bold",staticStyle:{"background-color":"green"},on:{click:t.checkMissingWord}},[t._v("שלח")])]):t._e(),!1===t.rowPhotoMissingWord?e("div",{staticStyle:{display:"block"},attrs:{align:"center"}},[e("div",{staticClass:"my-5"},[e("p",{staticClass:"question",attrs:{right:""}},[t._v(t._s(t.questionSuffled[t.questionNumber].question))])]),t._l(t.getAnswerArray,(function(o){return e("div",{key:o.id},[e("button",{staticClass:"fullWidth colorBtn btn font-weight-bold mb-3",staticStyle:{"background-color":"green"},on:{click:function(e){return t.checkAnswer(o)}}},[t._v(t._s(o))])])}))],2):t._e(),t.dialogCorrectAnswer?e("div",{staticClass:"over"},[e("div",{staticClass:"myModal p-4 mb-5 green"},[e("div",{staticClass:"h2 mb-4 rtl text-center"},[t._v("יפה לכם!")]),e("div",{staticClass:"rtl mb-4 text-center"},[t._v("תשובה נכונה!")]),e("div",[e("button",{staticClass:"fullWidth colorBtn btn font-weight-bold mt-5",staticStyle:{"background-color":"green",position:"relative",top:"100px"},on:{click:t.hideImageQuestion}},[t._v("אז בואו נשמיך")])])])]):t._e(),t.dialogWrongAnswer?e("div",{staticClass:"over"},[e("div",{staticClass:"myModal p-4 mb-5 red"},[e("div",{staticClass:"col h2 mb-4 rtl text-center"},[t._v("אופס...")]),e("div",{staticClass:"col rtl mb-4 text-center"},[t._v("התשובה לא נכונה")]),e("button",{staticClass:"fullWidth colorBtn btn font-weight-bold",staticStyle:{"background-color":"green",position:"relative",top:"100px"},on:{click:function(o){t.dialogWrongAnswer=!1,t.missingWordAnswer=""}}},[t._v("ננסה שוב")])])]):t._e(),t.showLastDialog?e("div",{staticClass:"over"},[e("div",{staticClass:"myModal p-4 mb-5 green"},[e("div",{staticClass:"h3 rtl mb-2"},[t._v("יופי סיימתם את ניווט !")]),e("div",{staticClass:"rtl mb-5"},[t._v("עשכיו אתם צריכים למצוא את האוצר. תרכיבו מילה או מילים עם האותיות שקיבלתם ובעזרת הקבוצות האחרות תרכיבו משפט שיעזור לכם למצוא את מיקום האוצר.")]),e("button",{staticClass:"fullWidth colorBtn btn font-weight-bold",staticStyle:{"background-color":"green",position:"relative",top:"100px"},on:{click:t.showResults}},[t._v("תוצאות")])])]):t._e(),t.showMap?e("div",{staticStyle:{position:"fixed",top:"0",right:"0",height:"100vh",width:"100vw","z-index":"100",overflow:"hidden"}},[e("span",{staticStyle:{position:"absolute",top:"9px","font-size":"20px","z-index":"100",color:"white","font-weight":"bold",right:"15px"},on:{click:function(o){t.showMap=!1}}},[t._v("לסגור")]),e("GmapMap",{staticStyle:{width:"100vw",height:"100vh"},attrs:{center:{lat:32.656549,lng:35.416317},zoom:15,"map-type-id":"satellite",options:{zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUi:!1}}},t._l(t.markers,(function(o,s){return e("GmapMarker",{key:s,staticStyle:{"margin-right":"10px !important"},attrs:{position:o.position,clickable:!0,draggable:!1,label:{text:""+(s+1),color:"white",fontSize:"9px"}},on:{click:function(e){t.center=o.position}}})})),1)],1):t._e()])},A=[],k=(e("fb6a"),e("b680"),e("b64b"),e("07ac"),{data:function(){return{secondsToTime:"00:00:00",totalSeconds:0,showMap:!1,showLastDialog:!1,dialogWithLetter:!1,key:"",questiomMultipleChoices:!0,rowPhotoMissingWord:!0,dialogWrongAnswer:!1,dialogCorrectAnswer:!1,missingWordAnswer:"",loading:!1,src:"",questionNumber:0,errorNumber:0,pointNum:0,letter:"",allLetters:"",markers:[{position:{lat:32.660958,lng:35.416243}},{position:{lat:32.661789,lng:35.414207}},{position:{lat:32.659775,lng:35.418373}},{position:{lat:32.657926,lng:35.41924}},{position:{lat:32.659349,lng:35.41387}},{position:{lat:32.653956,lng:35.414696}},{position:{lat:32.654909,lng:35.416246}},{position:{lat:32.65551,lng:35.4178184}},{position:{lat:32.657037,lng:35.417072}},{position:{lat:32.656123,lng:35.419569}},{position:{lat:32.65896,lng:35.416515}}]}},mounted:function(){history.pushState(null,null,location.href),window.onpopstate=function(){history.go(1)},this.countSeconds()},computed:{initMap:function(){var t=new google.maps.Map(document.getElementById("map"),{center:{lat:-34.397,lng:150.644},zoom:8});return t},group:function(){return this.$store.getters.group},points:function(){return console.log("[computed] => points",this.$store.getters.points),this.$store.getters.points},questions:function(){return console.log("[computed] => questions",this.$store.getters.questions),this.$store.getters.questions},getImgUrl:function(){return Object.values(this.points)[this.pointsArrayOrder[this.pointNum]].imageUrl},pointsArrayOrder:function(){return console.log("[computed] => pointsArrayOrder",this.$store.getters.pointsArrayOrder),this.$store.getters.pointsArrayOrder},questionSuffled:function(){return console.log("[computed] => questionsShuffled",this.$store.getters.questionsShuffled),this.$store.getters.questionsShuffled},getAnswerArray:function(){var t,o,e=[this.questionSuffled[this.questionNumber].wrongAnswer1,this.questionSuffled[this.questionNumber].wrongAnswer2,this.questionSuffled[this.questionNumber].wrongAnswer3,this.questionSuffled[this.questionNumber].correctAnswer],s=e.length;while(0!==s)o=Math.floor(Math.random()*s),s-=1,t=e[s],e[s]=e[o],e[o]=t;return e}},methods:{countSeconds:function(){var t=this;setInterval((function(o){t.totalSeconds++;var e=function(t,o){return("000"+t).slice(-1*o)},s=parseFloat(t.totalSeconds).toFixed(3),i=Math.floor(s/60/60),n=Math.floor(s/60)%60,a=Math.floor(s-60*n);t.secondsToTime=e(i,2)+":"+e(n,2)+":"+e(a,2)}),1e3)},showResults:function(){this.$store.dispatch("checkResults",{errorNumber:this.errorNumber,secondsToTime:this.secondsToTime,totalSeconds:this.totalSeconds}),this.$router.push("/results")},checkMissingWord:function(){this.missingWordAnswer===Object.values(this.points)[this.pointsArrayOrder[this.pointNum]].missingWord?this.dialogCorrectAnswer=!0:(this.dialogWrongAnswer=!0,this.errorNumber++)},checkAnswer:function(t){if(t===this.questionSuffled[this.questionNumber].correctAnswer){Object.keys(this.points);"1"===Object.values(this.points)[this.pointsArrayOrder[this.pointNum]].pointNumber?(console.log("this.points[this.pointsArrayOrder[this.pointNum]].pointNum === 1"),this.showLastDialog=!0):(console.log("!!!!!!!!!!this.points[this.pointsArrayOrder[this.pointNum]].pointNum === 1"),this.dialogCorrectAnswer=!0)}else this.dialogWrongAnswer=!0,this.errorNumber++},hideImageQuestion:function(){this.dialogCorrectAnswer=!1,null!=this.questionSuffled[this.questionNumber+1]?(this.missingWordAnswer="",this.rowPhotoMissingWord=!this.rowPhotoMissingWord,this.rowPhotoMissingWord&&(this.questionNumber++,this.pointNum++,console.log("[hideImageQuestion] this.questionNumber",this.questionNumber))):(this.questionNumber=this.questionNumber+2,console.log("[hideImageQuestion] this.questionNumber",this.questionNumber),this.rowPhotoMissingWord=!this.rowPhotoMissingWord,this.dialogCorrectAnswer=!1)}}}),x=k,q=(e("f310"),Object(l["a"])(x,N,A,!1,null,"ac6b1868",null)),P=q.exports;s["a"].use(d["a"]);var M=new d["a"]({routes:[{path:"/admin",name:"admin",component:v},{path:"/startGame",name:"startGame",component:P},{path:"/",name:"welcomePage",component:_}]}),W=(e("4989"),e("ab8b"),e("2f62")),$=e("8535"),E=e.n($),O=(e("7db0"),e("4160"),e("d81d"),e("159b"),e("59ca")),j=e.n(O),I=(e("ea7b"),e("66ce"),e("588e"),{state:{places:[],emotions:[],situationsCorona:[],points:[],situations:[],imageUrl:"",userName:localStorage.getItem("idImproUserName")},mutations:{addSituationCorona:function(t,o,e){t.situationsCorona.push(o),console.log("[addSituationCorona] payload",o),console.log("[addSituationCorona] this.situationCorona",this.getters.situationsCorona)},addSituation:function(t,o,e){t.situations.push(o),console.log("[addSituation] payload",o),console.log("[addSituation] this.addSituation",this.getters.situations)},addPlace:function(t,o,e){t.places.push(o),console.log("[places] payload",o),console.log("[places] this.places",this.getters.places)},addEmotion:function(t,o,e){t.emotions.push(o),console.log("[emotions] payload",o),console.log("[emotions] this.emotions",this.getters.emotions)},setUser:function(t,o){t.user=o},setPointsArray:function(t,o){console.log("[setPointsArray] payload",o),t.pointsArrayOrder=o},setPoints:function(t,o){t.points=o},setQuestions:function(t,o){t.questions=o},setQuestionsSuffled:function(t,o){t.questionsShuffled=o},addPoint:function(t,o){t.points.push(o)},setResults:function(t,o){console.log("[setResults] payload",o),t.allResults=o}},actions:{addSituationCorona:function(t,o){var e=t.commit,s=(t.getters,localStorage.getItem("idImproUserName")),i=j.a.database();i.ref("situationCorona/").push(o),i.ref("users/"+s+"/situationCorona").push(o),e("addSituationCorona",o)},addSituation:function(t,o){var e=t.commit,s=(t.getters,localStorage.getItem("idImproUserName")),i=j.a.database();i.ref("situations/").push(o),i.ref("users/"+s+"/situations").push(o),e("addSituation",o)},addPlace:function(t,o){var e=t.commit,s=(t.getters,localStorage.getItem("idImproUserName")),i=j.a.database();i.ref("places/").push(o),i.ref("users/"+s+"/places").push(o),e("addPlace",o)},addEmotion:function(t,o){var e=t.commit,s=(t.getters,localStorage.getItem("idImproUserName")),i=j.a.database();i.ref("emotions/").push(o),i.ref("users/"+s+"/emotions").push(o),e("addEmotion",o)},createNewUser:function(t,o){var e=t.commit;if(localStorage.setItem("idImproUserName",o.userName),e("setLoading",!0),"admin"==o.userName);else{var s=j.a.database();s.ref("users/ "+o.userName).set(o.userName),e("setUser",o),console.log("[]"),s.ref("users").on("value",(function(t){var o=t.val();Object.keys(o).map((function(t){return[o[t]]}))}))}e("setLoading",!1)},fetchSubjects:function(t){var o=t.commit;t.getters;o("setLoading",!0),j.a.database().ref("/emotions/").once("value").then((function(t){t.forEach((function(t){t=t.val();o("addEmotion",t),console.log("[fetchSubjects] emotion",t)}))})),j.a.database().ref("/places/").once("value").then((function(t){t.forEach((function(t){t=t.val();o("addPlace",t),console.log("[fetchSubjects] places",t)}))})),j.a.database().ref("/situations/").once("value").then((function(t){t.forEach((function(t){t=t.val();o("addSituation",t),console.log("[fetchSubjects] situations",t)}))})),j.a.database().ref("/situationCorona/").once("value").then((function(t){t.forEach((function(t){t=t.val();o("addSituationCorona",t),console.log("[fetchSubjects] emotion",t)}))}))},fetchQuestions:function(t){var o=t.commit,e=t.dispatch;o("setLoading",!0),j.a.database().ref("/questions/").once("value").then((function(t){e("suffleQuestions",t),t.forEach((function(t){t.val()}))}))},suffleQuestions:function(t,o){var e=t.commit,s=t.dispatch;this.questions=o.val(),console.log("[suffleQuestions] this.questions",this.questions),e("setQuestions",this.questions);var i,n,a=this.questions,r=a.length;while(0!==r)n=Math.floor(Math.random()*r),r-=1,i=a[r],a[r]=a[n],a[n]=i;a[0]?(e("setQuestionsSuffled",a),e("setLoading",!1)):(console.log("[suffleQuestions] questionSuffled[0] === null RESHUFFLE"),s("suffleQuestions",o))}},getters:{situationsCorona:function(t){return t.situationsCorona},places:function(t){return t.places},emotions:function(t){return t.emotions},situations:function(t){return t.situations},allResults:function(t){return t.allResults},user:function(t){return t.user},points:function(t){return t.points},questions:function(t){return t.questions},questionsShuffled:function(t){return t.questionsShuffled},group:function(t){return t.group},pointsArrayOrder:function(t){return t.pointsArrayOrder},getUser:function(t){return function(o){return t.users.find((function(t){return t.id===o}))}}}}),D={state:{loading:!1,error:null},mutations:{setLoading:function(t,o){t.loading=o},setError:function(t,o){t.error=o},clearError:function(t){t.error=null}},actions:{clearError:function(t){var o=t.commit;o("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}};s["a"].use(W["a"]);var T=new W["a"].Store({modules:{events:E.a,user:I,shared:D}}),U=(e("e71f"),e("755e"));s["a"].use(U,{load:{key:"AIzaSyACbBFnoaG5EVR7-IDGn8lsiTtPHxWQWB4",libraries:"places"},installComponents:!0}),s["a"].config.productionTip=!1;var B={apiKey:"AIzaSyDWpSHNBshvTDYgyJ1kxYmYMgKyo3w0AOU",authDomain:"improdb-5a99d.firebaseapp.com",databaseURL:"https://improdb-5a99d.firebaseio.com",projectId:"improdb-5a99d",storageBucket:"improdb-5a99d.appspot.com",messagingSenderId:"779231460308",appId:"1:779231460308:web:0e71558f4e8f5eb317b441",measurementId:"G-SNJYWCBLWQ"};j.a.initializeApp(B),new s["a"]({router:M,store:T,rtl:!0,render:function(t){return t(c)}}).$mount("#app")},"79e1":function(t,o,e){},8535:function(t,o){},"89f2":function(t,o,e){"use strict";var s=e("c9d2"),i=e.n(s);i.a},c9d2:function(t,o,e){},f085:function(t,o,e){"use strict";var s=e("3e62"),i=e.n(s);i.a},f310:function(t,o,e){"use strict";var s=e("79e1"),i=e.n(s);i.a}});
//# sourceMappingURL=app.4cd90e69.js.map