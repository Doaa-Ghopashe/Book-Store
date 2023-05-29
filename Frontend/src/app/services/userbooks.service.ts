import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserbooksService {

  constructor(private http: HttpClient) { }

  reseveBook(status: string, id: string) {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post('http://localhost:5000/reservebook', JSON.stringify({ book_id: id, user_id: "DD18", shelve: status }),
      {
        headers
      }).subscribe()
  }

}
