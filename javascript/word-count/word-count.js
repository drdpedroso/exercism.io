var Words = function() {};

Words.prototype.count = function(word) {
	var words = {};
	word.trim().split(/[\s,]+/).map(function(el){
		el = el.toLowerCase();
		if(words[el] && el != " "){
			words[el] = words[el] + 1; 
		} else if(el != /[\s,]+/) {
			words[el] = words[el];
			words[el] = 1;
		}
	})
	return words;
};

module.exports = Words;