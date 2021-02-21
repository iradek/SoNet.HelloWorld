import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { tap } from 'rxjs/operators';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MySonetAppsConfig } from './sonet-apps.config';

import { SoNetAppsConfig, SoNetAppsKitModule } from "@iradek/sonet-appskit";
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SoNetAppsKitModule //import the module
    ],
    providers: [
        // {
        //     provide: SoNetAppsConfig,
        //     useClass: MySonetAppsConfig
        // }
        //register custom SoNetAppsConfig when you want to provide settings dynamically from a code
        // {
        //     provide: SoNetAppsConfig,
        //     useFactory: configLoaderFactory,
        //     deps: [HttpClient]
        //     //multi: true
        // }
        //register configLoader when you want to drive settings from a file; those values override code-based SoNetAppsConfig settings when needed
        {
            provide: APP_INITIALIZER,
            useFactory: configLoader,
            deps: [HttpClient],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

//TRY : https://medium.com/better-programming/how-to-handle-async-providers-in-angular-51884647366

//const myConfig : SoNetAppsConfig = { api_baseUrl: "http://www.sonet.com", _configFromFile: "", _logging: "", _oauth_client_id: "", _oauth_client_secret: "", _siteName : "" };

export function configLoaderFactory(httpClient: HttpClient) {
    return new MySonetAppsConfig();
};

// //point the loader to a file with configuration settings
export function configLoader(httpClient: HttpClient) {
    console.log('configLoader');
    return () => httpClient.get<SoNetAppsConfig>('assets/apps.config.json').toPromise();
    //Note: this factory needs to return a function that returns a promise
}
