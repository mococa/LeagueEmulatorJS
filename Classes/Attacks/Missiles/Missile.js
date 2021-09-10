
const { Vector2 } = require('three');
const IStat = require('../../Units/Stats/IStat');


//global.baseMissileNetId = 0x60000000;
global.Missiles = global.Missiles || {};
global.MissilesCount = global.MissilesCount || {count: 0};

class Missile {
	callbacks = {
		move: {},
		collision: {},
	};
	appendGlobal(){

		this.id = global.MissilesCount.count;
		++global.MissilesCount.count;

		global.Missiles[this.netId] = this;
	}
	removeGlobal(){
		
		delete global.Missiles[this.netId];
	}
	initialize(){
		// override
	}
	constructor(parent, options = {}){
		this.parent = parent;
		this.initialize();
		//Object.assign(this, config);
		this.netId = this.netId || ++global.lastNetId;
		this.stats = {};
		this.stats.MoveSpeed = new IStat(options.speed || 2000);

		console.debug(Date.now(), 'Created Missile', this.constructor.name);
		this.appendGlobal();
	}
	destructor(){
		this.removeGlobal();
	}
	fire_TargetNetID(TargetNetID, WindupPercent = 20){

		if(!global.UnitsNetId[TargetNetID])
			return console.log('global.Units[netId] does not contain', TargetNetID);

		var target = global.UnitsNetId[TargetNetID];
		this.fire(target, WindupPercent);
	}
	async fire(target, WindupPercentt = 10){
		// https://leagueoflegends.fandom.com/wiki/Basic_attack#Windup
		let WindupPercent = WindupPercentt / 100;
		let WindupModifier = 1;//?

		let bWindupTime = 1 / this.parent.stats.AttackSpeed.BaseValue;
		let cAttackTime = 1 / this.parent.stats.AttackSpeed.Total;
		let windup = bWindupTime + ((cAttackTime * WindupPercent) - bWindupTime) * WindupModifier;

		console.debug('windup', windup, this.parent.stats.AttackSpeed);
		await global.Utilities.wait(windup * 1000);
		this.firefire(target, windup);
	}
	Waypoints = [new Vector2(0, 0)];
	moveTime = 0;
	firefire(target){

		this.Waypoints = [this.parent.Waypoints[0].clone()];
		console.debug('Missile.firefire',
			'this.parent.netId', this.parent.netId, 'this.parent.Waypoints[0]', this.parent.Waypoints[0],
			'this.netId', this.netId, 'this.Waypoints[0]', this.Waypoints[0],
			'target.netId', target.netId, 'target.Waypoints[0]', target.Waypoints[0]);

		this.fly(target);
	}
	reachedDest(target){
		// override
		console.log('Missile.reachedDest');
	}
	fulfillRange = 1;
	fly(target){

		console.debug(this.Waypoints[0].distanceTo(target.Waypoints[0]), this.fulfillRange);
		if(this.Waypoints[0].distanceTo(target.Waypoints[0]) > this.fulfillRange){
			this.callbacks.move._ = {
				options: {
					range: this.fulfillRange,
				},
				function: () => {
					delete this.callbacks.move._;
					console.log('Missile.fly callbacks.move._');
					this.fly(target);
				}
			};
			this.move1(target.Waypoints[0]);
			return;
		}
		this.reachedDest(target);
	}

	move1(position){
		this.Waypoints = [this.Waypoints[0], position];
	}
}


module.exports = Missile;
