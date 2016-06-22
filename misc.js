var type = {};

type["NORMAL"] = {id: 1, strong: 0, weak: 34, noeffect: 16};
type["FIRE"] = {id: 2, strong: 20546, weak: 98344, noeffect: 0};
type["WATER"] = {id: 3, strong: 66080, weak: 49160, noeffect: 0};
type["GRASS"] = {id: 4, strong: 33312, weak: 83274, noeffect: 0};
type["ELECTRIC"] = {id: 5, strong: 33024, weak: 24584, noeffect: 512};
type["ICE"] = {id: 6, strong: 17160, weak: 102402, noeffect: 0};
type["FIGHTING"] = {id: 7, strong: 135206, weak: 1473, noeffect: 16};
type["POISON"] = {id: 8, strong: 16385, weak: 1584, noeffect: 2};
type["GROUND"] = {id: 9, strong: 74796, weak: 16448, noeffect: 256};
type["FLYING"] = {id: 10, strong: 18496, weak: 8226, noeffect: 0};
type["PSYCHIC"] = {id: 11, strong: 3072, weak: 130, noeffect: 4};
type["BUG"] = {id: 12, strong: 16526, weak: 68883, noeffect: 0};
type["ROCK"] = {id: 13, strong: 69952, weak: 2562, noeffect: 0};
type["GHOST"] = {id: 14, strong: 144, weak: 4, noeffect: 131072};
type["DRAGON"] = {id: 15, strong: 8, weak: 2, noeffect: 1};
type["DARK"] = {id: 16, strong: 144, weak: 2053, noeffect: 0};
type["STEEL"] = {id: 17, strong: 4129, weak: 106498, noeffect: 0};
type["FAIRY"] = {id: 18, strong: 2060, weak: 66652, noeffect: 0};

function checkEfficiency(from, to) {
	var test = (from.strong >> (18 - to.id)) & 1;
	if(test == 1) {
		return 2;
	}
	test = (from.weak >> (18 - to.id)) & 1;
	if(test == 1) {
		return 0.5;
	}
	test = (from.noeffect >> (18 - to.id)) & 1;
	if(test == 1) {
		return 0;
	}

	return 1;
}

module.exports = {checkEfficiency: checkEfficiency, type: type};