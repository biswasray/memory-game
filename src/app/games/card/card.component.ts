import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() index:number;
  @Input() val:number;
  @Input() style:string;
  @Output() onClick:EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    //console.log(typeof (this.style));
  }

  clickMe() {
    this.onClick.emit(this.index);
  }

}
