import { wasmBrowserInstantiate } from "./init.js";
import { getRandomInt } from "../utils/helperFunctions.js"

const runWasmCalculator = async () => {
    // Instantiate our wasm module
    const wasmModule = await wasmBrowserInstantiate("../build/optimized.wasm");

    // Generate random numbers in range from 1 to 100
    const a = getRandomInt(1, 100);
    const b = getRandomInt(1, 100);

    // Call the functions exported from wasm and save the result
    const addResult = wasmModule.instance.exports.add(a, b);
    const subtractResult = wasmModule.instance.exports.subtract(a, b);
    const multiplyResult = wasmModule.instance.exports.multiply(a, b);
    const divideResult = wasmModule.instance.exports.divide(a, b);

    // Set the results onto the body
    document.querySelector("#add").textContent = `Add: ${a} + ${b} = ${addResult}`;
    document.querySelector("#subtract").textContent = `Subtract: ${a} + ${b} = ${subtractResult}`;
    document.querySelector("#multiply").textContent = `Multiply: ${a} + ${b} = ${multiplyResult}`;
    document.querySelector("#divide").textContent = `Divide: ${a} + ${b} = ${divideResult}`;
};

// Run WASM
runWasmCalculator()
    .then(res => res)
    .catch(err => console.log(err));
