var app = angular.module("sampleApp", ["firebase"]);



app.controller("SampleCtrl", function($scope, $firebaseArray){



	var ref = new Firebase("https://torrid-fire-2602.firebaseio.com");
	
	
	// create a sychronized array
	 $scope.messages = $firebaseArray(ref);
	

	// add new items to the array
	// the message is automatically added to your Firebase database!
	$scope.addMessage = function(){
		$scope.messages.$add({
			text: $scope.newMessageText
		});
	};

	$scope.completeTask = function(msg){
		console.log($scope.messages);
		msg.completed = true;

		$scope.messages.$save(2).then(function(ref) {
		  ref.key() === $scope.messages[2].$id; // true
		});

		console.log($scope.messages);
	}
	// click on index.html above
	// to see $remove() and $save() in action
	
});








































