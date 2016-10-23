var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function (input) {
  var rna = [];
    for (var i=0; i < input.length; i++) {
      switch(input[i]) {
          case 'G':
              rna.push('C');
              continue;
          case 'C':
              rna.push('G');
              continue;
          case 'T':
              rna.push('A');
              continue;
          case 'A':
              rna.push('U');
      }
    }
  return rna.join('');
};

module.exports = inputTranscriber;
