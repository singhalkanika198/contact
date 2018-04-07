var pageApp = angular.module("pageApp", []);
pageApp.controller("pageController", function($scope, $http) {
	
	$http.get('js/data.json').success(function(data) {
		$scope.contactDetails = data;
	});

	$scope.data = [];
	$scope.addContacts = function() {
		$scope.name = $scope.fname,
		$scope.email = $scope.emailWork,
		$scope.contactNo = $scope.phWork;
		
		var result = confirm("Do you want to save the changes?");
		console.log("out1");
		if (result) {
			var contactDetailsList = [];

			contactDetailsList = $scope.data;
			contactDetailsList.push
			{
				$scope.name = $scope.fname;
				$scope.email = $scope.emailWork;
				$scope.contactNo = $scope.phWork;
			}
			;
			console.log(contactDetailsList);
		}
//		console.log("out2");
		        
        var theJSON = JSON.stringify(contactDetailsList);
//		$scope.post('js/data.json', theJSON).success(function() {
//			alert("Contact is added successfully.");
//		}).error(function() {
//			alert("Failed");
//		});
	}
	
});

function addEmail(){
    var emailArea= document.getElementById("emailArea");
    emailArea.innerHTML = emailArea.innerHTML + '<div class="row"><div class="col-md-3"> <select class="pull-right"><option>Work</option><option>Personal</option> </select></div><div class="col-md-8"> <input type="text" name="emailWork" ng-model="emailWork" style="width:100%"></div><div class="col-md-1"> <i class="fa fa-minus-circle fa-2x pull-right" aria-hidden="true"></i></div></div>';
}

function addNumber (){
    var numberArea = document.getElementById("numberArea");
    numberArea.innerHTML = numberArea.innerHTML + '<div class="row"><div class="col-md-3"> <select class="pull-right"><option>Work</option><option>Personal</option> </select></div><div class="col-md-8"> <input type="text" name="phWork" ng-model="phWork" style="width:100%"></div><div class="col-md-1"> <i class="fa fa-minus-circle fa-2x pull-right" aria-hidden="true"></i></div></div>'

}
