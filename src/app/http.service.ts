import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const appKey = "a5f2a2370a102bf2740c07edb082eba2"
const appSecret = "9aca54db24d3e51ad319ca7e0590f9b3"
const uniquenessId = "8d2f7f9e-7e34-4cc5-a14b-4a61e56884b5"

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
  }),
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  searchAPI = "https://api-live.wiseai.tech/face/v2/search"


  constructor(private http: HttpClient) { }

  body = new FormData();

  search(base64: string){
    this.body.append("appKey",appKey)
    this.body.append("appSecret",appSecret)
    this.body.append("imageBase64One",base64)
    this.body.append("uniquenessId",uniquenessId)
    this.http.post(this.searchAPI,this.body,httpOptions).subscribe(response => {
      console.log(response)
      return response
      
    })
  }


  test(base64: string){
    this.body.append("appKey",appKey)
    this.body.append("appSecret",appSecret)
    this.body.append("imageBase64One",base64)
    this.body.append("uniquenessId",uniquenessId)
    console.log(this.body)
  }
}
