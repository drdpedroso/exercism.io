var Bob = function() {};

Bob.prototype.hey = function(input) {
  var check = /^\s*$/.test(input);

  if(check){
    return 'Fine. Be that way!';
  } else {
    if(input === input.toUpperCase() && input.toLowerCase() != input){
      return 'Whoa, chill out!';
    } else if (input[input.length - 1] == '?' ) {
      return 'Sure.';
    } else if (input == '' || !input) {
      return 'Fine. Be that way!';
    } else {
      return 'Whatever.';
    }
  }

};

module.exports = Bob;
