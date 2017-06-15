var myApp = angular.module('myApp', []);

myApp.controller('HttpController', function(randomService, searchService) {

  var vm = this;

  vm.random = function() {
    randomService.getRandom().then(function() {
      vm.randData = randomService.newData;
    });
  };

vm.search = function(string){
  searchService.getSearch().then(function(){
      console.log('search string:',string);
      vm.searchData = searchService.searchData;
      console.log(vm.searchData);
  });
};

});
