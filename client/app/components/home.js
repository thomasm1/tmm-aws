angular.module('tmm').component('home', {
  templateUrl:  'views/home.html',
  controller: 'homeController',
  controllerAs: 'homeCtrl', function() {
    homeCtrl.greeting = 'Welcome to TMM';
  
    homeCtrl.toggleGreeting = function() {
      homeCtrl.greeting = (homeCtrl.greeting == 'Welcome to TMM') ? 'Thomas M. Maestas' :  'Welcome to TMM';
    };
  }
});
 