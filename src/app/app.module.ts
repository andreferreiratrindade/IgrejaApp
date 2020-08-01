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
import { BaseProvider } from './providers/base-provider/base-provider';
import { BuscarCEPService } from './providers/buscaCEP/buscar-cep.service';
import { Http, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { MaskTelefonePipe } from './pipes/mask-telefone.pipe';
import { PipesModule } from './pipes/pipes';
import { SortByPipe } from './pipes/sortBy/sort-by.pipe';
import { ConfirmAlert } from './helpers/confirmAlert';
firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    IonicModule.forRoot({ mode: 'ios' }),
    AppRoutingModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    PipesModule.forRoot()
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BuscarCEPService,
    CallNumber,
    BaseProvider,
    SocialSharing,
    FirebaseAuthService,
    ConfirmAlert,
    SortByPipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
