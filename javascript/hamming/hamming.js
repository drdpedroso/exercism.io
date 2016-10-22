var Hamming = function() {};

Hamming.prototype.compute = function(s1, s2) {
  var count = 0;
  if(s1.length != s2.length){
    throw new Error('DNA strands must be of equal length.');
  } else {
    for(var i = 0; i < s1.length; i++){
        if(s1[i] != s2[i]){
          count = count + 1;
        }
    }
    return count;
  }
};

module.exports = Hamming;
