import en from './en'
import Store from '../store';
let combined = { en };
let storedFunctions = window.customFunctionList;
function locale() {
    if (!storedFunctions) {
        storedFunctions = window.customFunctionList;
        if (storedFunctions)
            combined[Store.lang]["functionlist"].push(...storedFunctions["customFunctionList"]);
    }
    return combined[Store.lang];
}

export default locale;