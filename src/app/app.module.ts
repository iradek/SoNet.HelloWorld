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
    bootstrap: [AppComponent]
})

export class AppModule { }
