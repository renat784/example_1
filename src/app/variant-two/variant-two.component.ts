import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { take, toArray, filter } from 'rxjs/operators';
import { User } from '../models/user';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-variant-two',
  templateUrl: './variant-two.component.html',
  styleUrls: ['./variant-two.component.scss'],
})
export class VariantTwoComponent implements OnInit {
  data: User[];
  filteredData: User[];

  selectCount = [5, 10, 15, 20, 50];
  currentSelectCount = 50;
  filterShows = '';

  constructor(private service: GetdataService) {}

  ngOnInit(): void {
    this.service.getData().subscribe((i: any) => {
      this.data = i.results as User[];
      this.filteredData = this.data;
    });
  }

  filterByShows(isChecked) {
    // i don't have 'shows' in API so it's filtering by 'gender' (female)
    this.filterShows = isChecked ? 'female' : '';
    this.filterUserData();
  }

  // filter by 'gender' first
  // then by 'count' in dropdown (results on page)
  filterUserData() {
    this.filteredData = this.data;
    let userObs$ = of(...this.filteredData);

    if (this.filterShows == 'female') {
      userObs$ = userObs$.pipe(filter((i) => i.gender == this.filterShows));
    }

    userObs$
      .pipe(take(this.currentSelectCount))
      .pipe(toArray())
      .subscribe((i) => (this.filteredData = i));
  }

  itemsToSee(value) {
    this.currentSelectCount = value;
    this.filterUserData();
  }
}
