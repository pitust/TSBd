import { BdApi } from "@bandagedbd/bdapi";
// If you want react:
// import React from "react";

export default class AppShortName {
    getName() {
        return 'AppName'
    }
    getDescription() {
        return 'AppDescr'
    }
    getVersion() {
        return '0.0.1';
    }
    getAuthor() {
        return 'Author'
    }
    start() {
        BdApi.showToast('AppName started! Go to src/plugin.tsx to start modifying!');
    }
}
