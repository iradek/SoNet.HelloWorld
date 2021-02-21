import { Injectable } from '@angular/core';
import { SoNetApiClient, SoNetProxy, SoNetAppsConfig } from "@iradek/sonet-appskit";

@Injectable({
    providedIn: 'root'
})
export class MySoNetApiClient extends SoNetApiClient {

    constructor(protected sonetProxy: SoNetProxy, protected appsConfig: SoNetAppsConfig) {
        super(sonetProxy, appsConfig);
    }
}
