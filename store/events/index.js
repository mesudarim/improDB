// // import * as firebase from 'firebase'
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/storage'
// /* eslint-disable */
// // Here we are not eporting anymore a store, it's done in the index.js of the all store, so we export a normal JS object
// // export const store = new Vuex.Store({
// export default {
//     state: {
//         questions: [],
//         points: [],
//         imageUrl: ''
//     },
//     mutations: {
//         // addEvent (state, payload) {
//         // // IL FAUT VOIR POURQUOI IL NE LES VOIS PAS DANS STATE.EVENTS
//         // if (state.events.findIndex(events => events.key === payload.key) < 0) {
//         // state.events.push(payload)
//         // }
//         // else {
//         // console.log('[addEvent] event not added as already existing');
//         // }
//         // },
//         addPoint(state, payload) {
//             state.points.push(payload)
//         },
//         addQuestion(state, payload) {
//             state.questions.push(payload)
//         },
//         // updateEventCounter (state, payload) {
//         // const eventData = state.events.find(event => {
//         // return event.key === payload.key
//         // })
//         // },
//         // updateEvent (state, payload) {
//         // const eventData = state.events.find(event => {
//         // return event.key === payload.key
//         // })
//         // eventData.event = payload.event
//         // console.log('[updateEvent] eventData', eventData);
//         // console.log('[updateEvent] mutation payload', payload);
//         // }
//     },
//     actions: {
//         createNewPoint({
//             commit,
//             getters
//         }, payload) {
//             commit('setLoading', true)
//             const db = firebase.database()
//             db.ref('points/' + payload.pointNumber).set(payload)
//                 .then(_ => {
//                     // I stock the event's image in FB storage
//                     const filename = payload.image.name
//                     // const ext = filename.slice(filename.lastIndexOf('.'))
//                     const ext = 'png'
//                     return firebase.storage().ref('points/' + payload.pointNumber + '.' + ext).put(payload.image)
//                 })
//                 .then(fileData => {
//                     console.log('fileData', fileData.task.uploadUrl_)
//                     console.log('fileData', fileData)
//                     console.log('Firebase.Storage.StorageReference.GetDownloadUrlAsync()', firebase.storage().ref('points/' + payload.pointNumber + '.png').getDownloadURL())
//                     // imageUrl = fileData.metadata.downloadURLs[0]
//                     firebase.storage().ref('points/' + payload.pointNumber + '.png').getDownloadURL()
//                         .then(imageUrl => {
//                             console.log('imageUrl', imageUrl)
//                             this.imageUrl = imageUrl
//                             return firebase.database().ref('points').child(payload.pointNumber).update({
//                                 imageUrl: this.imageUrl
//                             })
//                         })
//                         .then(_ => {
//                             return firebase.database().ref('points/' + payload.pointNumber + '/pictures/' + payload.pointNumber).update({
//                                 imageUrl: this.imageUrl
//                             })
//                         })
//                         .then(_ => {
//                             return firebase.database().ref('points/' + payload.pointNumber + '/pictures/').once('value')
//                         })
//                         .then(data => {
//                             console.log('create points picture => data.val()', data.val());
//                             this.pictures = data.val()
//                             console.log('create points picture => this.pictures', this.pictures);
//                         })
//                     commit('addPoint', payload)
//                     commit('setLoading', false)
//                     console.log('createNewPoint - payload', payload)
//                 })
//         },
//         createNewQuestion({
//             commit,
//             getters
//         }, payload) {
//             commit('setLoading', true)
//             const db = firebase.database()
//             db.ref('questions/').push(payload)
//             commit('addQuestion', payload)

//         },
//     },
//     // getters: {
//     // getEventData (state) {
//     // return (key) => {
//     // console.log('[getEventData] key', key);
//     // return state.events.find((event) => {
//     // // console.log('[getEventData] event', event);
//     // return event.key === key
//     // })
//     // }
//     // },
//     // loadedNotifications (state) {
//     // return state.loadedNotifications.sort((notificationA, notificationB) => {
//     // console.log('notificationA, notificationB', notificationA, notificationB);
//     // return notificationA.date < notificationB.date
//     // })
//     // }
//     // }
// }