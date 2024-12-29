# navmeshcppjs

path finding library for [LeagueEmulatorJS](https://github.com/Karmel0x/LeagueEmulatorJS) with nodejs bindings  
atm just for testing purposes..  


navmesh source:  
[github.com/ilyanikolaevsky/navmesh](https://github.com/ilyanikolaevsky/navmesh)

# Todo
- NavMesh::ConeOfVision - may be usefull too
- class to instance pathfinding
- possibility to pass polygons from js

# Usage
```
const Navmeshcppjs = require('../navmeshcppjs');

Navmeshcppjs.initialize(); // atm static polygons for SR

var startPoint = {x: 60, y: 80};
var endPoint = {x: 240, y: 260};
var path = Navmeshcppjs.getPath(startPoint, endPoint);
// [{x, y}, ...]
```

# Build
```
cd bindings
npm install -g node-gyp
npm install node-addon-api
node-gyp configure
node-gyp build
```
