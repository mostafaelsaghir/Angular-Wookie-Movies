import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'mat-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StarRatingComponent implements OnInit {

  @Input('rating') private rating: number;
  @Input('starCount') private starCount: number;
  @Input('color')  color: string;
  @Output() private ratingUpdated = new EventEmitter();

  private snackBarDuration: number = 2000;
   ratingArr = [];
  halfDone = false;
  constructor(private snackBar: MatSnackBar) {
  }


  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating:number) {

    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }

  showIcon(index:number) {
  
    const current = index + 1;
    const prev = index;
    const next = index + 2;
    if(this.rating < current && this.rating > prev && this.rating < next)
      return 'star_half';
    else if(this.rating >= current)
        return 'star';
    else 
      return 'star_border';
    
  }

}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}
