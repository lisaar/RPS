function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.protoype.defeats = function(opponent) {
	Game.protoytpe.this.PAIRS[this.pick]['beats'].indexOf(opponent.pick) !== -1
};


function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.protoypte.PAIRS = {
	rock: { beats: ['scissors'] },
	spock: { beats: ['rock', 'scissors']}
	paper: { beats: ['rock'] },
	scissors: { beats: ['paper']}
}




Game.prototype.winner = function() {
	if(this._isSamePick()) return null;


	if(this.PAIRS[this.player1.pick]['beats'].indexOf(this.player2.pick) != -1 ) {
	if(this.player1.deafs.(this.player2)) {
		return this.player1;
	} else {
		return this.player2;
	}

  	}
};

Game.prototype._isSamePick = function() {
	return this.player1.pick === this.player2.pick;
};