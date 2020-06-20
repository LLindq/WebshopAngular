import { Component, OnInit } from '@angular/core';
import { DataretrievalService } from 'src/app/services/dataretrieval.service';
import Orders from 'src/app/models/orders';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  theDatabase;

  constructor(private dataretrieval: DataretrievalService) { }

  ngOnInit(): void {
    this.dataretrieval.theDatabase.subscribe((data: Orders[]) => { this.theDatabase = data
  });
    this.dataretrieval.getDatabase();
  }
}

