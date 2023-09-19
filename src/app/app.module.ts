import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';
import { PracticeFormComponent } from './practice-form/practice-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './practice-form/profiles/profile/profile.component';
import { CounterMoudule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeroComponent,
    // ListComponent,
    PracticeFormComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, CounterMoudule, HeroesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
