// requires
var base = require('./basestat.js');
var move = require('./move.js');

// Initializer
function Pokemon(dexid) {
	this.dex_id = dexid;
	this.loadBaseStats();
}
var proto = Pokemon.prototype;


// methods
proto.loadBaseStats = function() {
	// int to string:
	var index = this.dex_id.toString();
	if(index.length == 1) {
		index = "00" + index;
	} else if (index.length == 2) {
		index = "0" + index;
	}
	var stats = base[index];
	this.base = {
		hp: stats.hp,
		atk: stats.atk,
		def: stats.def,
		spatk: stats.spatk,
		spdef: stats.spdef,
		spd: stats.spd
	};
	this.name = stats.name_en;
}
proto.calcHP = function(base, iv, ev, lvl) {
	// [{(45 * 2) + 31 + (31 / 4)} * (50 / 100)] + 10 + 50
	var hp = base * 2;
	hp += iv;
	hp += Math.floor(ev / 4);
	hp *= (lvl / 100);
	hp = Math.floor(hp);
	hp += 10 + lvl;
	return hp;
}
proto.calcStat = function(base, iv, ev, lvl) {
	// [{(49 * 2) + 31 + (31 / 4)} * (50/100) + 5]
	var stat = base * 2;
	stat += iv + Math.floor(ev / 4);
	stat *= (lvl / 100);
	stat = Math.floor(stat);
	stat += 5;
	return stat;
}
proto.calculateStats = function() {
	this.av = {
		hp: this.calcHP(this.base.hp, this.iv.hp, this.ev.hp, this.level),
		atk: this.calcStat(this.base.atk, this.iv.atk, this.ev.atk, this.level),
		def: this.calcStat(this.base.def, this.iv.def, this.ev.def, this.level),
		spatk: this.calcStat(this.base.spatk, this.iv.spatk, this.ev.spatk, this.level),
		spdef: this.calcStat(this.base.spdef, this.iv.spdef, this.ev.spdef, this.level),
		spd: this.calcStat(this.base.spd, this.iv.spd, this.ev.spd, this.level),
	}
}

// Setters
proto.setDexID = function(dexid) { this.dex_id = dexid; }
proto.setLevel = function(lvl) { this.level = lvl; }
proto.setIV = function(hp, atk, def, spatk, spdef, spd) {
	this.iv = {
		hp: hp,
		atk: atk,
		def: def,
		spatk: spatk,
		spdef: spdef,
		spd: spd
	};
}
proto.setEV = function(hp, atk, def, spatk, spdef, spd) {
	this.ev = {
		hp: hp,
		atk: atk,
		def: def,
		spatk: spatk,
		spdef: spdef,
		spd: spd
	};
}
proto.setMoves = function(m) {
	this.moves = m;	
}

// Exports
module.exports = {Pokemon: Pokemon};