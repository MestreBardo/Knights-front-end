import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnightCardComponent } from './knight-card/knight-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IdadePipe } from './pipes/idade.pipe';
import { AtaquePipe } from './pipes/ataque.pipe';
import { ExperienciaPipe } from './pipes/experiencia.pipe';
import { ModificadoresPipe } from './pipes/modificadores.pipe';
import { KnightDetailsComponent } from './knight-details/knight-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    KnightCardComponent,
    IdadePipe,
    AtaquePipe,
    ExperienciaPipe,
    ModificadoresPipe,
    KnightDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
