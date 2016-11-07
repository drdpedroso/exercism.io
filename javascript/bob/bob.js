var Bob = function() {};

Bob.prototype.hey = function(input) {
  if(input[input.length - 1] == '?' && input != input.toUpperCase()){
    return 'Sure.';
  } else if (input === input.toUpperCase()) {
    return 'Whoa, chill out!';
  } else if (input == '' || !input) {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }



};

module.exports = Bob;
