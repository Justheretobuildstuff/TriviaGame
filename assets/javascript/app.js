$(document).ready(function() {

    $('#triviaQuestions').hide()
    $('#summary').hide()

$("#start").on("click", function(){
    $('#start').hide()
    $('#triviaQuestions').show()
    startTimer()
});

function startTimer() {
    document.getElementById('timer').innerHTML =
  03 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
}
// starting trivia

$.fn.every = function(callback) {
    var numElements = this.length;
    return this.filter(callback).length == numElements;
  };
  
  $.fn.simpleQuiz = function(options) {
    if(!this.length) { return; };
    
    this.each(function() {
      var form = $(this);
      var questions = form.find('.question');
      var choices = form.find(':radio');
  
      var init = function() {
        choices.on('change', answerChanged);
        form.on('submit', answersSubmitted);
      };
  
      var answersSubmitted = function(event) {
        if(!hasPassed()) {
          event.preventDefault();
          alert('Please try again.');
        }
      };
  
      var correctAnswers = function() {
        return form.find(':checked[data-correct]').length;
        console.log(correctAnswers)
      };
  
      var hasPassed = function() {
        return score() == questions.length;
      };
  
      var hasCheckedElement = function() {
        return $(this).has(':checked').length;
      };
  
      var allQuestionsAnswered = function() {
        return questions.every(hasCheckedElement);
      };
  
      init();
    });
  
  };

  $("#done").on("click", function(){
    $('#triviaQuestions').hide()
    $('#summary').show()
});

});