import { Component } from '@angular/core';
import { PexelsapiService } from '../../services/pexelsapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  photofind: any[] = [];
  loading: boolean;

  constructor( private pexelsapiservices: PexelsapiService) {



  }


  buscarFoto(termino: string) {
    console.log(termino)
    this.loading = true;


    this.pexelsapiservices.getPhoto(termino)
      .subscribe( (data: any ) => {
        console.log(data);
        this.photofind = data;
        this.loading = false;
      });
  }


}
