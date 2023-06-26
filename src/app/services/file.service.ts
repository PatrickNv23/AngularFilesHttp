import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseURL = 'https://localhost:7139/api'

  constructor(private httpClient: HttpClient) { }

  upload(formData: FormData): Observable<any> {
    return this.httpClient.post<FormData>(`${this.baseURL}/File/upload`, formData);
  }
}
