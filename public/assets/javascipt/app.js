$.ajax({
  url: '/results',
  method: 'GET'
}).then(function(data) {
  console.log(data);
  var previous_user_score;
  var current_user_score;
  var score_arr = [];
  var matched_user;

  for (var i = 0; i < data.length - 1; i++) {
    //extract the values from the objects and input into an array
    previous_user_data = Object.values(data[i]);

    //User ID
    current_user_data = Object.values(data[data.length - 1]);

    //Get the question scores
    var current_user_score = current_user_data.slice(1, 11);
    var previous_user_score = previous_user_data.slice(1, 11);

    // call the compareArr function and push the score differences to score_arr
    score_arr.push(compareArr(current_user_score, previous_user_score));
  }

  matched_user = findSmallestNum(score_arr);

  $('#submit').on('click', function() {
    if (!$('input').val() || !$('select').val()) {
      alert("Please fill out all required fields");
    } else {
      displayMatchedUser(matched_user[0], data);
    }
  });


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
      user_id = i + 1;
    }
  }

  resultArr.push(user_id, smallestNumber);

  return resultArr;
}

function displayMatchedUser(matchedUserID, usersObj) {
  //loop through object to find the userID and ImageURl
  var matched_user_img_url;
  var matched_user_name;
  for (var user in usersObj) {
    if (usersObj[user].user_id === matchedUserID) {
      matched_user_img_url = usersObj[user].img_url;
      matched_user_name = usersObj[user].name;
      var matchedUserName = $('<h1>').text(matched_user_name);
      var matchedUserImage = $(`<img style="width:100%;" src="${matched_user_img_url}" alt="Matched Person">`);
      $('.modal-body').append(matchedUserName);
      $('.modal-body').append(matchedUserImage);
      $('#resultModal').modal('show')
    }
  }
}
