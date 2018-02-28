import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
  private usersURL = 'https://jsonplaceholder.typicode.com/users';
  private albumsURL = 'https://jsonplaceholder.typicode.com/albums';
  private photosURL = 'https://jsonplaceholder.typicode.com/photos';
  selectedAlbums = [];

  constructor(private http: Http) { }

  // Handle service error
  private handleError(error: any) {
    const errMsg = error.toString();
    return Observable.throw(errMsg);
  }

  getUsers() {
    return this.http.get(this.usersURL)
      .map(response => {
        return response.json();
      })
      .catch(this.handleError.bind(this));
  }

  getAlbums() {
    return this.http.get(this.albumsURL)
    .map(response => {
      return response.json();
    })
    .catch(this.handleError.bind(this));
  }

  getPhotos() {
    return this.http.get(this.photosURL)
    .map(response => {
      return response.json();
    })
    .catch(this.handleError.bind(this));
  }

}
