import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, InjectionToken } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoNetAppsKitModule, SoNetConfigService } from "@iradek/sonet-appskit";

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
        SoNetConfigService,
        // {
        //     provide: APP_INITIALIZER,
        //     useFactory: initializeApp,
        //     deps: [SoNetConfigService],
        //     multi: true
        // }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

//point the loader to a file with configuration settings
const configFilePath = 'assets/apps.config.json';
export function configLoaderFactory(configService: SoNetConfigService) {
    //Note: this factory needs to return a function that returns a promise
    return () => configService.loadAsync(configFilePath);
}


export function initializeApp(configService: SoNetConfigService) {
    return () => configService.loadAsync(configFilePath);
}
