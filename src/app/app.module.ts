import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InlogschermComponent } from './inlogscherm/inlogscherm.component';
import { AgendaComponent } from './agenda/agenda.component';
import { VindiemandComponent } from './vindiemand/vindiemand.component';
import { EvenementenComponent } from './evenementen/evenementen.component';
import { UitloggenComponent } from './uitloggen/uitloggen.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HeaderComponent } from './header/header.component';
import { MenubalkComponent } from './menubalk/menubalk.component';



const appRoutes: Routes = [
  { path: 'inloggen', component: InlogschermComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'vindiemand', component: VindiemandComponent },
  { path: 'evenementen', component: EvenementenComponent },
  { path: 'uitloggen', component: UitloggenComponent },
  { path: 'searchbar', component: SearchbarComponent },
  { path: '',   redirectTo: 'inloggen', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    InlogschermComponent,
    AgendaComponent,
    VindiemandComponent,
    EvenementenComponent,
    UitloggenComponent,
    SearchbarComponent,
    HeaderComponent,
    MenubalkComponent
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


