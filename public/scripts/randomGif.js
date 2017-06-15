myApp.service('randomService', function($http) {
  var sv = this;

  sv.getRandom = function() {
    var randURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&';
    return $http({
      method: 'GET',
      url: randURL
    }).then(function(response) {
      sv.newData = response.data.data;
    });
  };
});
