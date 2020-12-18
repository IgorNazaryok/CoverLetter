import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { CoverLetterFormComponent } from './cover-letter-form/cover-letter-form.component';
import { CoverLetterTableComponent } from './cover-letter-table/cover-letter-table.component';
import { DisableControlDirective } from './shared/disable-control.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoverLetterComponent,
    CoverLetterFormComponent,
    CoverLetterTableComponent,
    DisableControlDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
