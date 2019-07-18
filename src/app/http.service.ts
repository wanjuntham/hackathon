import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "multipart/form-data",
  }),
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  searchAPI = "https://api-live.wiseai.tech/face/v2/search"

  fixedBody = {"appKey" : "a5f2a2370a102bf2740c07edb082eba2",
              "appSecret" : "9aca54db24d3e51ad319ca7e0590f9b3",
            "uniquenessId" : "8d2f7f9e-7e34-4cc5-a14b-4a61e56884b5",
            "resultTop" : 3,
            }
  constructor(private http: HttpClient) { }


  search(base64: String){
    this.http.post(this.searchAPI,this.fixedBody["imageBase64One"]=base64,httpOptions)
    .subscribe(response => {
      console.log(response)
    })
    console.log(this.fixedBody)
  }


  test(base64: String){
    this.fixedBody["imageBase64One"]=base64
    console.log(this.fixedBody)
  }
}
