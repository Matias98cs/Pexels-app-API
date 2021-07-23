import { Component } from '@angular/core';
import { PexelsapiService } from '../../services/pexelsapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent   {

  photos: any[] = [];
  loading: boolean;
  photosNext: any[] = [];

  mostrar: boolean;

  constructor(private pexelsapi: PexelsapiService) {


    this.mostrar = false

    this.loading = true;
    this.pexelsapi.getPhotos()
      .subscribe((data: any) =>{
        console.log(data);
        this.photos = data;
        this.loading = false
      });



    this.pexelsapi.getNextPage()
      .subscribe((data: any)=> {
        console.log(data);
        this.photosNext = data;
        
      })

  }

  MostrarImages(){
    return this.mostrar = true;

  }



}
