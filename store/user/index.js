import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
// import router from '../../src/router'

/* eslint-disable */
export default {
    state: {
        places: [],
        relations: [],
        emotions: [],
        situationsCorona: [],
        points: [],
        situations: [],
        imageUrl: '',
        userName: localStorage.getItem("idImproUserName")
    },
    mutations: {
        // setLettersArray(state, payload) {
        //     state.lettersArray = payload
        // },
        addSituationCorona(state, payload, getters) {
            state.situationsCorona.push(payload)
        },
        addSituation(state, payload, getters) {
            state.situations.push(payload)
        },
        addPlace(state, payload, getters) {
            state.places.push(payload)
            console.log('[places] payload', payload)
            console.log('[places] this.places', this.getters.places)
        },
        addEmotion(state, payload, getters) {
            state.emotions.push(payload)
        },
        addRelation(state, payload, getters) {
            state.relations.push(payload)
            console.log('[relations] payload', payload)
            console.log('[relations] this.relations', this.getters.relations)
        },
        setUser(state, payload) {
            state.user = payload
        },
        setPointsArray(state, payload) {
            console.log('[setPointsArray] payload', payload)
            state.pointsArrayOrder = payload
        },
        setPoints(state, payload) {
            state.points = payload
        },
        setQuestions(state, payload) {
            state.questions = payload
        },
        setQuestionsSuffled(state, payload) {
            state.questionsShuffled = payload
        },
        addPoint(state, payload) {
            state.points.push(payload)
        },
        setResults(state, payload) {
            console.log('[setResults] payload', payload)
            state.allResults = payload
        }
    },
    actions: {
        addSituationCorona({
            commit,
            getters
        }, payload) {
            let userName = localStorage.getItem("idImproUserName")
            const db = firebase.database()
            db.ref('situationCorona/').push(payload)
            db.ref('users/' + userName + '/situationCorona').push(payload)
            commit('addSituationCorona', payload)
        },
        addSituation({
            commit,
            getters
        }, payload) {
            let userName = localStorage.getItem("idImproUserName")

            const db = firebase.database()
            db.ref('situations/').push(payload)
            db.ref('users/' + userName + '/situations').push(payload)
            commit('addSituation', payload)
        },
        addPlace({
            commit,
            getters
        }, payload) {
            let userName = localStorage.getItem("idImproUserName")
            const db = firebase.database()
            db.ref('places/').push(payload)
            db.ref('users/' + userName + '/places').push(payload)
            commit('addPlace', payload)
        },
        addEmotion({
            commit,
            getters
        }, payload) {
            let userName = localStorage.getItem("idImproUserName")
            // commit('setLoading', true)
            const db = firebase.database()
            db.ref('emotions/').push(payload)
            db.ref('users/' + userName + '/emotions').push(payload)
            commit('addEmotion', payload)
        },
        addRelation({
            commit,
            getters
        }, payload) {
            let userName = localStorage.getItem("idImproUserName")
            const db = firebase.database()
            db.ref('relations/').push(payload)
            db.ref('users/' + userName + '/relations').push(payload)
            commit('addRelation', payload)
        },
        createNewUser({
            commit
        }, payload) {
            localStorage.setItem('idImproUserName', payload.userName);
            commit('setLoading', true)
            if (payload.userName == "admin") {} else {
                const db = firebase.database()
                db.ref('users/ ' + payload.userName).set(payload.userName)
                commit('setUser', payload)
                console.log('[]')
                db.ref(`users`).on("value", (snapshot) => {
                    let users = snapshot.val()
                    var result = Object.keys(users).map(function (key) {
                        return [users[key]];
                    });
                })
            }
            commit('setLoading', false)
        },

        fetchSubjects({
            commit,
            getters
        }) {
            const points = ''
            commit('setLoading', true)
            firebase.database().ref('/emotions/').once('value')
                .then(data => {
                    data.forEach(emotions => {
                        var emotions = emotions.val()
                        commit('addEmotion', emotions)
                        console.log("[fetchSubjects] emotion", emotions)
                    })
                })
            firebase.database().ref('/places/').once('value')
                .then(data => {
                    data.forEach(places => {
                        var places = places.val()
                        commit('addPlace', places)
                        console.log("[fetchSubjects] places", places)
                    })
                })
            firebase.database().ref('/situations/').once('value')
                .then(data => {
                    data.forEach(situations => {
                        var situations = situations.val()
                        commit('addSituation', situations)
                        console.log("[fetchSubjects] situations", situations)
                    })
                })
            firebase.database().ref('/situationCorona/').once('value')
                .then(data => {
                    data.forEach(situationCorona => {
                        var situationCorona = situationCorona.val()
                        commit('addSituationCorona', situationCorona)
                        console.log("[fetchSubjects] emotion", situationCorona)
                    })
                })
            firebase.database().ref('/relations/').once('value')
                .then(data => {
                    data.forEach(relation => {
                        var relation = relation.val()
                        commit('addRelation', relation)
                        console.log("[fetchSubjects] relations", relation)
                    })
                })
        },
        fetchQuestions({
            commit,
            dispatch
        }) {
            const questions = ''
            commit('setLoading', true)
            firebase.database().ref('/questions/').once('value')
                .then(data => {
                    dispatch('suffleQuestions', data)
                    data.forEach(eachQuestion => {
                        var question = eachQuestion.val()
                    })
                })
        },
        suffleQuestions({
            commit,
            dispatch
        }, payload) {

            this.questions = payload.val()
            console.log("[suffleQuestions] this.questions", this.questions);

            commit('setQuestions', this.questions)

            let questionSuffled = this.questions;
            let currentIndex = questionSuffled.length,
                temporaryValue,
                randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = questionSuffled[currentIndex];
                questionSuffled[currentIndex] = questionSuffled[randomIndex];
                questionSuffled[randomIndex] = temporaryValue;
            }
            if (questionSuffled[0]) {
                // console.log("[suffleQuestions] questionSuffled[0] != null")

                commit('setQuestionsSuffled', questionSuffled)
                commit('setLoading', false)
            } else {
                console.log("[suffleQuestions] questionSuffled[0] === null RESHUFFLE")

                dispatch('suffleQuestions', payload)

            }
        }
    },
    getters: {
        situationsCorona(state) {
            return state.situationsCorona
        },
        places(state) {
            return state.places
        },
        relations(state) {
            return state.relations
        },
        emotions(state) {
            return state.emotions
        },
        situations(state) {
            return state.situations
        },
        allResults(state) {
            return state.allResults
        },
        // lettersArray(state) {
        //     return state.lettersArray
        // },
        user(state) {
            return state.user
        },
        points(state) {
            return state.points
        },
        questions(state) {
            return state.questions
        },
        questionsShuffled(state) {
            return state.questionsShuffled
        },
        group(state) {
            return state.group
        },
        pointsArrayOrder(state) {
            return state.pointsArrayOrder
        },
        getUser(state) {
            return (userId) => {
                return state.users.find((user) => {
                    return user.id === userId
                })
            }
        }
    }
}