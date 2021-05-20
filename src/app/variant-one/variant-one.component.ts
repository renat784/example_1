import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variant-one',
  templateUrl: './variant-one.component.html',
  styleUrls: ['./variant-one.component.scss']
})
export class VariantOneComponent implements OnInit {

  data = [];

  ngOnInit(): void {
    let url = "https://swapi.dev/api/people/";

    fetch(url)
    .then(i => i.json())
    .then(i => {
      this.data = i.results;
    })
  }

  save(){
    console.log(this.data);
  }

}
