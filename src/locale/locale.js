import en from './en'
import Store from '../store';

const localeObj = { en }

function locale() {
    return localeObj[Store.lang];
}

export default locale;