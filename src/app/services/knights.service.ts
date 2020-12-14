import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Knight from '../classes/knight.class';

@Injectable({
  providedIn: 'root'
})
export class KnightsService {

  constructor(private http: HttpClient) { }
  private apiEndpoint = 'http://localhost:3000/knights';
  getKnightList(filter?: string) {
    const consulta = filter === 'heroes' ? this.apiEndpoint + `?filter=heroes` : this.apiEndpoint;
    return this.http.get<Knight[]>(consulta);
  }

  getKnightById(id: string | null) {
    return this.http.get<Knight>(`${this.apiEndpoint}/${id}`);
  }

  saveKnight(knight: Knight) {
    return this.http.post<Knight>(`${this.apiEndpoint}`, knight);
  }

  moveKnightToHall(id: string | undefined) {
    return this.http.delete<Knight>(`${this.apiEndpoint}/${id}`);
  }

  updateAKnight(id: string | undefined, newNickname: string) {
    return this.http.patch<Knight>(`${this.apiEndpoint}/${id}`, {nickname: newNickname});
  }


}
