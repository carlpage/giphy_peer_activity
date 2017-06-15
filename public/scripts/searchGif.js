myApp.service('searchService', function($http) {
  var sv = this;

  sv.getSearch = function() {
    var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + sv.searchTerm + '&api_key=dc6zaTOxFJmzC';
    return $http({
      method: 'GET',
      url: searchURL
    }).then(function(response) {
      sv.searchData = response.data.data;
      console.log(sv.searchData);
    });
  };
});
