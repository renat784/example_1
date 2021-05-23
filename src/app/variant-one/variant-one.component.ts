import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../services/getdata.service';
import { User } from './../models/user';

@Component({
  selector: 'app-variant-one',
  templateUrl: './variant-one.component.html',
  styleUrls: ['./variant-one.component.scss'],
})
export class VariantOneComponent implements OnInit {
  data: User[];

  constructor(private service: GetdataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((i: any) => {
      this.data = i.results as User[];
    });
  }

  save() {
    console.log(this.data);
  }
}
