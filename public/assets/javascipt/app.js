$.ajax({
	url: '/results',
	method: 'GET'
}).then(function(data){
  var previous_user_score;
  var QuestionNumber;
  var current_user_score;
  var score_arr = [];
	for (var i=0; i < data.length - 1; i++){
    //extract the values from the objects and input into an array
    previous_user_score = Object.values(data[i]);

    //Fetch the last array (current user's score)
    current_user_score = Object.values(data[data.length - 1]);

    //remove the first index of the array because it's the question number, not the score
    current_user_score.splice(0, 1);
    previous_user_score.splice(0, 1)

    //call the compareArr function and push the score differences to score_arr
    score_arr.push(compareArr(current_user_score, previous_user_score));

  }

  console.log("score array: ", score_arr);

  console.log("user id and least number array: ",  findSmallestNum(score_arr));

  

});

function compareArr(prev_score, cur_score) {
  var final_score = 0;
  for (var i = 0; i < cur_score.length; i++) {

    for (var j = 0; j < prev_score.length; j++) {
      var diff = Math.abs(cur_score[i] - prev_score[i]);
    }

    final_score += diff;
  }

  return final_score;

}

function findSmallestNum(arr) {
  var user_id = 1;
  var smallestNumber = arr[0];
  var resultArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
      user_id = i;
    }
  }

  resultArr.push(user_id, smallestNumber);

  return resultArr;
}