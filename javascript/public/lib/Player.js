function Player(name) {
  this.name = name;
  this.score = 0
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
}

Player.prototype._defeats = function(opponent) {
	return Object.keys(Game.prototype.PAIRS[this.pick]).indexOf(opponent.pick) > -1;
};

Player.prototype.random = function() {
	var choices = ['monkey', 'ninja', 'pirate', 'zombie', 'robot'];
	return choices[Math.floor(Math.random() * choices.length)];
}

Player.prototype.wins = function() {
	this.score = this.score + 1;
};
