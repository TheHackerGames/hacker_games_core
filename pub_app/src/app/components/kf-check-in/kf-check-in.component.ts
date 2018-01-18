import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kf-check-in',
  templateUrl: './kf-check-in.component.html',
  styleUrls: ['./kf-check-in.component.scss']
})
export class KfCheckInComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    public moodRating: number;

    setMoodRating(rating: number) {
        this.moodRating = rating;
    }


}