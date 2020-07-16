import { Injectable } from '@angular/core';
import { FavoritoRepService } from 'src/app/repository/favorito/favorito-rep.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  AdicionaPrestadorFavorito(prestadorUsuarioId: string, usuarioId: any):Promise<any> {
     return  this.favoritoRepService.AdicionaPrestadorFavorito(prestadorUsuarioId,usuarioId);
  }

  RemovePrestadorFavorito(prestadorUsuarioId: string, usuarioId: any):Promise<any> {
    return  this.favoritoRepService.RemovePrestadorFavorito(prestadorUsuarioId,usuarioId);

  }
  constructor(private favoritoRepService: FavoritoRepService) {



   }
}
