import { Component, OnInit, Inject } from '@angular/core';
import { MySoNetApiClient } from './services/sonet-api-client.service';
import { SoNetConfigService } from '@iradek/sonet-appskit';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'iradek-sonet-helloworld';
    engineSettings$: Promise<any>;

    sonetConfig = SoNetConfigService.Config;

    constructor(private mySonetApiClient: MySoNetApiClient, private sonetConfigService: SoNetConfigService) {
        console.log("config in constructor",  sonetConfigService.config);
        mySonetApiClient.getSettingsAsync().then(settings=>console.log("setting from api", settings));
    }

    ngOnInit(): void {                      
        console.log("sonet config", this.sonetConfigService.config);
    }

}
