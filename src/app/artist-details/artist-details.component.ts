import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html'
})
export class ArtistDetailsComponent implements OnInit {

  @Input() artist: object;
  constructor() { }

  ngOnInit() {
  }

}
