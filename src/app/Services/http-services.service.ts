import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  private apiUrl = 'https://fakestoreapi.com/products';
  private api2='https://fakestoreapi.com/products/category/jewelery';

  constructor(private http:HttpClient) { }

  fetchProducts():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl);
  }

  getProducts():Observable<any[]>{
    return this.http.get<any[]>(this.api2);
  }
}
