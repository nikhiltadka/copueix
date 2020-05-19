import { Component, OnInit } from '@angular/core';
import { CustomHttpService } from '../custom-http.service';

@Component({
  selector: 'app-ledger-bal',
  templateUrl: './ledger-bal.component.html',
  styleUrls: ['./ledger-bal.component.css']
})
export class LedgerBalComponent implements OnInit {

  ledgerFilter = 'month';
  ledgerRecord = {
    available_balance: 0,
    total_tokens_credited: 0,
    total_tokens_debited: 0,
    transaction_records: []
  };

  constructor(private customHttpService: CustomHttpService) { }

  ngOnInit(): void {
    this.filterLegder();
  }
  
  filterLegder() {
    const request = {
      user_id: 27,
      interval: this.ledgerFilter
    };

    this.customHttpService.getLedgerInfo(request).subscribe(d => {
      this.ledgerRecord = d.response;
    });
  }

}
