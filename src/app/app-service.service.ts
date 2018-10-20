import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getlisteusers() {  
    
    return  this.http.get("http://127.0.0.1:3000/users");
  } 
  addUser(id,name,email,password) { 
    
     return  this.http.post("http://127.0.0.1:3000/user",
     JSON.stringify({ "Id":id,
     "name":name ,
     "email":email,
     "password":password
      }),
     );
  }

  addVoiture(id,Name,marque,votes) { 
    
    return  this.http.post("http://127.0.0.1:3000/voiture",
    JSON.stringify({ "Id":id,
    "name":Name ,
    "email":marque,
    "password":votes
     }),
    );
 }

 getlisteVoiture() {  
    
  return  this.http.get("http://127.0.0.1:3000/voitures");
} 

}
