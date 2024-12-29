const navmeshcppjs = require(`./bindings/build/Release/navmeshcppjs.node`);

class Navmeshcppjs {
	static initialize(inflate = 0) {
		navmeshcppjs.initialize(inflate);
	}

	/**
	 * @param {import('./index2').Point} startPoint 
	 * @param {import('./index2').Point} endPoint 
	 * @returns {import('./index2').Point[]}
	 */
	static getPath(startPoint, endPoint) {
		return navmeshcppjs.pf(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
	}
}

module.exports = Navmeshcppjs;
