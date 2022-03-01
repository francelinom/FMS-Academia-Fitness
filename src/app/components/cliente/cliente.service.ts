import { Cliente } from './cliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  url = 'http://localhost:3001/clientes';

  constructor(private http: HttpClient) {}

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }

  list(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }
}
