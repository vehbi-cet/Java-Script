import { equivalentKeyPresses } from "./easy/32_equalvalentKEyPresses.js";

//console.log(equivalentKeyPresses(["a,b,c,d", "a,b,c,c,-B,d"]));//true
//console.log(equivalentKeyPresses(["-B,-B,-B,c,c", "c,c"]));//true
console.log(equivalentKeyPresses(["", "a,-B,-B,a,-B,a,b,c,c,c,d"]));//false