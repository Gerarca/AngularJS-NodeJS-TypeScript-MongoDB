import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import {Photo} from '../interfaces/Photo'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URI = environment.apiURL;

  constructor(private http: HttpClient) { }

  createPhoto(title: string, description: string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    return this.http.post(this.URI, fd);
  }

  getPhotos() { 
    return this.http.get<Photo[]>(this.URI);
  }

  getPhoto(id: string | undefined) {
    return this.http.get<Photo>(`${this.URI}/${id}`);
  }

  deletePhoto(id: string | undefined) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updatePhoto(id: string | undefined, title: string | undefined, description: string | undefined) {
    return this.http.put(`${this.URI}/${id}`, {title, description});
  }
}