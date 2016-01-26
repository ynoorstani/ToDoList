var app = angular.module("sampleApp", ["firebase", "angularMoment"]);



app.controller("SampleCtrl", function($scope, $firebaseArray){



	var ref = new Firebase("https://torrid-fire-2602.firebaseio.com");
	
	
	// create a sychronized array
	 $scope.messages = $firebaseArray(ref);
	 // console.log($scope.messages);
	 // $scope.msgsInLastWeek = fetchMessage($scope.messages);
	 // console.log($scope.msgsInLastWeek);


	// add new items to the array
	// the message is automatically added to your Firebase database!
	$scope.addMessage = function(){
		$scope.messages.$add({
			text: $scope.newMessageText,
			createdAt: Date.now()
		});
	};

	$scope.formatTime = function(createdAt) {
		console.log(createdAt);
		return createdAt.moment().format('MMMM Do YYYY, h:mm:ss a');
	}

	$scope.completeTask = function(msg){
		console.log(msg);
		msg.completed = true; // Make this save to the DB

		$scope.messages.$save().then(function(ref) {
		  ref.key() === $scope.messages[2].$id; // true
		});

		console.log($scope.messages);
	}
	// click on index.html above
	// to see $remove() and $save() in action
	
});

// TO find out if it is older than 7 days
// Time.now - 7*60*60*24



// After I complete, possibly add a second controller 
// use a stateprovider + templates




// lists
// completed status
// a due date





// complete
// For 7 days, make a timestamp of the current time as an attribute on each message
// Stub a fake time that is over 7 days old to test
// Do math to find out the current time - the message time and convert the seconds to days 




// var fetchMessage = function(message){
// 	var output = {};

// 	var currentTime = moment();

// 	for(var k in object){
// 		if(object[k].createdAt > currentTime.subtract(1, "minute")){
// 			output[k] = object[k]
// 		}
// 	}
// 	return output;
// };







































