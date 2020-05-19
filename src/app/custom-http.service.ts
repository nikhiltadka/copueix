import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(private http: HttpClient) { }

  getLedgerInfo(payload) {
    return this.http.post<any>(environment.apiUrl + 'test/token_ledger_report', payload);
  }
}
