import capiConfig from './config.json';

export default class Capi {
    static expose(Store) {
        Store.exposeProperty('logoBgColor', capiConfig.capi.logoBgColor);
    }
}

