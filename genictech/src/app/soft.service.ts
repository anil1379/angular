import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SoftService {
  http: any;
  post(arg0:string){
    throw new Error('method not implemented');
  }
    

  constructor(private httpService :HttpClient) {
    

    
   }

   getDeatis(){
    return this.http.get('dfsf')
   }

}
