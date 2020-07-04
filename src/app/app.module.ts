import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseAuthService } from './providers/base-provider/firebase-auth-service.service';
import { environment } from 'src/environments/environment';
import { ComponentsModule } from './components/components.module';
import { MensagemValidacaoComponent } from './components/mensagem-validacao/mensagem-validacao.component';
import { BaseProvider } from './providers/base-provider/base-provider';
import { BuscarCEPService } from './providers/buscaCEP/buscar-cep.service';
import { Http, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule ,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseAuthService,
      BuscarCEPService,
      BaseProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
