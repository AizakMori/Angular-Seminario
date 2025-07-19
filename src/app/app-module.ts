import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SummonList } from './monster-list/summon-list';
import { SummonSelect } from './monster-select/summon-select';
import { FormsModule } from '@angular/forms';
import { SummonersAbout } from './summoners-about/summoners-about';
import { Monsters } from './monster-container/monsters';
import { InputInteger } from './input-integer/input-integer';

@NgModule({
  declarations: [
    App,
    SummonList,
    SummonSelect,
    SummonersAbout,
    Monsters,
    InputInteger
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
