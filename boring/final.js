System.register("@bandagedbd/bdapi", [], function (exports_1) {
    "use strict";
    return {
        setters: [],
        execute: function () {
            exports_1("BdApi", BdApi);
        }
    };
});
System.register("react", [], function (exports_1) {
    "use strict";
    return {
        setters: [],
        execute: function () {
            for (let k in BdApi.React) {
                exports_1(k, BdApi.React[k]);
            }
            exports_1('default', BdApi.React);
        }
    };
});
System.register("react-dom", [], function (exports_1) {
    "use strict";
    return {
        setters: [],
        execute: function () {
            for (let k in BdApi.ReactDOM) {
                exports_1(k, BdApi.ReactDOM[k]);
            }
            exports_1('default', BdApi.ReactDOM);
        }
    };
});
module.exports = __instantiate('./plugin', false).default;