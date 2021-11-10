

const app = new Vue({
  // si inserisce il codice vue
  // dico a Vue dove deve puntare l'app
  el: '#app',
  // in data inserisco tutte le variabili e saranno delle proprietà di data
  data: {
    saluto: 'Hello World !',
    srcImmagine: 'https://cdn.pixabay.com/photo/2016/04/01/22/32/world-1301744_1280.png',
    classeImmagine: 'img-background'
  }
})