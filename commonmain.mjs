// Importing named exports
import { add, PI, subtract } from "./mathUtils.js";

import * as jadoo from "./mathUtils.js";

// Importing default export
import multiply from "./mathUtils.js";

export { add, multiply, PI, subtract };
console.log("Add: ", jadoo.add(5, 3));
console.log("Subtract: ", jadoo.subtract(5, 3));
console.log("PI: ", jadoo.PI);
console.log("Multiply: ", multiply(5, 3));