import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import  {Observable} from 'rxjs/Rx';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';

@Injectable()
export class ClasesService {

  constructor (private http: Http) {

   }

  getClases(): Observable<any>{
    return this.http.get("http://localhost:5000/api/clases")
      .map( (res: Response) => res.json() )
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



  /*getClasesAPI(): Observable<any>{
    return this.http.get("http://localhost:5000")
      .map( (res: Response) => res.json() )
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }*/
  /*getClases() : string[]{
    return ['algebra', 'programacion', 'robótica', 'ASE3', 'otra clase'];
  }

  createClase(newClasCode : string, newName : string) : Observable<any> {
    return this.http.post("http://localhost:3200/horario", {name: newName, clasCode: newClasCode})
  }*/
}
