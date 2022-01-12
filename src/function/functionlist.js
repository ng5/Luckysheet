import functionImplementation from './functionImplementation';
import Store from '../store/index'
import locale from '../locale/locale';

const functionlist = function () {
    let _locale = locale();
    // internationalization,get function list
    let functionListOrigin = _locale.functionlist;

    // add new property f
    for (let i = 0; i < functionListOrigin.length; i++) {
        let func = functionListOrigin[i];
        if (functionImplementation[func.n]) {
            func.f = functionImplementation[func.n];
        }
    }
    if (window.customFunctions) {
        for (let i = 0; i < functionListOrigin.length; i++) {
            let func = functionListOrigin[i];
            if (window.customFunctions[func.n]) {
                func.f = window.customFunctions[func.n];
            }
        }
    }
    // get n property
    const luckysheet_function = {};

    for (let i = 0; i < functionListOrigin.length; i++) {
        let func = functionListOrigin[i];
        luckysheet_function[func.n] = func;
    }

    Store.functionlist = functionListOrigin;

    window.luckysheet_function = luckysheet_function; //Mount window for eval() calculation formula

    Store.luckysheet_function = luckysheet_function;
}

export default functionlist;