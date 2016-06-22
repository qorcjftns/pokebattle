var moveinfo = require('./moveinfo.js');
var type = require('./type.js');
var Move = function(moveid) {this.info = moveinfo[moveid];}
var proto = Move.prototype;

proto.calcDmg = function(attacker, defender, field) {
	var dmg, mod1, mod2, mod3, rand, crit, amp, eff1, eff2;

	// Calculate Mod1
	var fired = (attacker.condition == "BURN" && this.info.category == "Physical") ? 0.5 : 1;
	var shield = ((this.info.category == "Physical" && field.defender.reflector) || (this.info.category == "Special" && field.defender.lightscreen)) ? 0.5 : 1;
	var weather = 1;
	if( (field.weather == "SUNLIGHT" && this.info.type == type.type["FIRE"]) ||
		(field.weather == "RAIN" && this.info.type == type.type["WATER"]) ) {
		weather = 1.5;
	}
	if( (field.weather == "SUNLIGHT" && this.info.type == type.type["WATER"]) ||
		(field.weather == "RAIN" && this.info.type == type.type["FIRE"]) ) {
		weather = 0.5;
	}
	mod1 = fired * shield * weather;

	// Calculate Mod2
	mod2 = 1;

	// Calculate Mod3
	mod3 = 1;

	// Calculate Rand
	rand = Math.floor(Math.random() * 16) + 85;

	// Calculate Crit
	crit = (1 / 16);

	// Calculate Amp
	amp = (attacker.type1 == this.type || attacker.type2 == this.type) ? 1.5 : 1;

	// Check Effeciency


	// Calculate Damage
	dmg = Math.floor((attacker.level * 2) / 5) + 2;
	dmg = Math.floor((dmg * this.info.power * attacker.av.atk) / 50);
	dmg = Math.floor(dmg / defender.av.def);
	dmg = Math.floor(dmg * mod1) + 2;
	dmg = Math.floor(dmg * crit * mod2 * rand / 100);
	dmg = Math.floor(dmg * amp * eff1 * eff2 * mod3);

	return dmg;
}

proto.run = function(attacker, defender, field) {
	var dmg = this.calcDmg(attacker, defender, field);
	defender.hp -= dmg;
}

module.exports = Move;