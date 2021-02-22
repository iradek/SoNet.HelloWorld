import { Injectable } from '@angular/core';
import { ISoNetAppsConfig, SoNetApiClient, SoNetConfigService, SoNetProxy } from "@iradek/sonet-appskit";

@Injectable({
    providedIn: 'root'
})
export class MySoNetApiClient extends SoNetApiClient {

    constructor(protected sonetProxy: SoNetProxy, private sonetConfigService: SoNetConfigService) {
        super(sonetProxy, sonetConfigService);
    }
}
