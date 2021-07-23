import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PexelsapiService {

  constructor(private http: HttpClient) {
    console.log('Pexels services listo para usar');
  }

  getQuery(query: string) {
    const url = `https://api.pexels.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'563492ad6f91700001000001dfd9fddc06f241779fb9797b566e9511'

    });

    return this.http.get(url , {headers})
  }

  getPhotos() {

    return this.getQuery('curated')
      .pipe(map ((data: any) =>{
        return data.photos;
      }))

    // const headers = new HttpHeaders({
    //   'Authorization':'563492ad6f91700001000001dfd9fddc06f241779fb9797b566e9511'
    // })

    // return this.http.get(`https://api.pexels.com/v1/curated`, {headers})
    //   .pipe( map ((data: any) => {
    //     return data.photos;
    //   }))
  }


  getPhoto(termino: string) {


    return this.getQuery(`search/?query=${termino}`)
      .pipe(map ((data: any) => {
        return data.photos;
      }))

    // const headers = new HttpHeaders({
    //   'Authorization':'563492ad6f91700001000001dfd9fddc06f241779fb9797b566e9511'
    // })

    // return this.http.get(`https://api.pexels.com/v1/search/?query=${termino}`, {headers})
    //   .pipe(map ((data: any) =>{
    //     return data.photos;
    //   }))
  }

  getNextPage() {
    return this.getQuery(`curated?page=2&per_page=40`)
      .pipe(map ((data: any) => {
        return data.photos;
      }))
  }
}
