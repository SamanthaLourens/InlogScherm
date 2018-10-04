import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InlogSchermComponent } from './inlogscherm/inlogscherm.component';
import { AgendaComponent } from './agenda/agenda.component';
import { VindiemandComponent } from './vindiemand/vindiemand.component';
import { EvenementenComponent } from './evenementen/evenementen.component';
import { UitloggenComponent } from './uitloggen/uitloggen.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';


const appRoutes: Routes = [
  { path: 'inloggen', component: InlogSchermComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'vindiemand', component: VindiemandComponent },
  { path: 'evenementen', component: EvenementenComponent },
  { path: 'uitloggen', component: UitloggenComponent },
  { path: 'searchbar', component: SearchbarComponent },
  { path: 'searchresults', component:SearchresultsComponent},
  { path: '',   redirectTo: 'inloggen', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    InlogSchermComponent,
    AgendaComponent,
    VindiemandComponent,
    EvenementenComponent,
    UitloggenComponent,
    SearchbarComponent,
    InlogSchermComponent,
    SearchresultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }) // <-- debugging purposes only
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


