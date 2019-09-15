var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: {

    }
  },
  methods: {             //collection of methods our application can use
    fetchPatients() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())    //Once a response has been received from the fetch function, only then will this get executed
      .then(json => {waitingApp.patients = json.results[0]});

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});

    }
  },
  created: function() {       //method called on creaton
    this.fetchPatients();
  }

})
