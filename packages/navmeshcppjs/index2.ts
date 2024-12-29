
// @ts-ignore
import navmeshcppjs from './bindings/build/Release/navmeshcppjs.node';
//const navmeshcppjs = require('./bindings/build/Release/navmeshcppjs.node');

export type Point = {
	x: number;
	y: number;
};

class Navmeshcppjs {
	static initialize(inflate = 0) {
		navmeshcppjs.initialize(inflate);
	}

	static getPath(startPoint: Point, endPoint: Point): Point[] {
		return navmeshcppjs.pf(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
	}
}

export default Navmeshcppjs;
