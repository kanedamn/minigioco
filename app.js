var app = angular.module('plunker', ['angularUtils.directives.dirTerminalType']);
// var el = document.getElementById("ok");

app.controller('MainCtrl', function($scope, $timeout) {

   $scope.showInputForm = function() {
    $scope.showform = true;
    $timeout(function() {
      document.getElementById("myInput").focus();
    }, 50);
  }

  $scope.textEntered = function() {
    $scope.p7 = true;
    $scope.p8 = true;
    document.getElementById("myInput").blur();
  }

  goBack = function(){
    document.getElementById("error").style.opacity = 0;
  }

  goToPage = function(){
    if(document.getElementById("myInput").value == ("iocicredo")){
      window.open('../Indizio 1/index_indizio1.html', "_self");
    } else if(document.getElementById("myInput").value == ("iono")){
      window.open('../Miniprova 1/index_mini1.html', "_self");
    } else{
      document.getElementById("error").style.opacity = 1;
    }
  }

});

// document.getElementById("myInput").value == ("iocicredo")
// window.open('Prova 1/prova1.html', "_self");
