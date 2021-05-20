import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variant-two',
  templateUrl: './variant-two.component.html',
  styleUrls: ['./variant-two.component.scss']
})
export class VariantTwoComponent implements OnInit {
  data = [];
  selectCount = [5, 10, 15, 20, 50];
  currentSelectCount = 50;
  filterShows = '';

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    let url = "https://swapi.dev/api/people/";

    fetch(url)
    .then(i => i.json())
    .then(i => {
      this.data = i.results.filter((item, index) => this.currentSelectCount > index);
      if(this.filterShows){
        // i don't have 'shows' in API so it's filtering by 'gender' (female)
        this.data = this.data.filter(i => i.gender == this.filterShows);
      }
    })
  }

  filterByShows(isChecked){
    // i don't have 'shows' in API so it's filtering by 'gender' (female)
    if(isChecked){
      this.filterShows = 'female';
    }else{
      this.filterShows = "";
    }

    this.getData();
  }

  itemsToSee(value){
    this.currentSelectCount = value;
    this.getData();
  }
}
