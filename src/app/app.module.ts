import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PracticeFormComponent } from './practice-form/practice-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './practice-form/profiles/profile/profile.component';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [AppComponent, PracticeFormComponent, ProfileComponent],
  imports: [BrowserModule, ReactiveFormsModule, HeroesModule, DbzModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
