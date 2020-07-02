import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FirebaseAuthService } from 'src/app/providers/base-provider/firebase-auth-service.service';

@Injectable()
export class ProfilePageResolver implements Resolve<any> {

  constructor(private firebaseAuthService: FirebaseAuthService) {}

  resolve() {
    return this.firebaseAuthService.getProfileData();
  }
}
