import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

function shuffle(array: number[]): number[] {
  let ci = array.length;
  let ri = 0;
  while (ci !== 0) {
    ri = Math.floor(Math.random() * ci);
    ci--;
    [array[ci], array[ri]] = [array[ri], array[ci]];
  }
  return array;
}

@Component({
  selector: 'app-singleplayer',
  templateUrl: './singleplayer.component.html',
  styleUrls: ['./singleplayer.component.css']
})

export class SingleplayerComponent implements OnInit {
  @Input() title: string;
  array: number[];
  styles: string[];
  player: string;
  score: number;
  moves: number;
  prevIndex=-1;
  prevMoves=(localStorage.getItem('singlemoves'));
  // @Input() counter:number;
  // @Output() clicky:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.moves=0;
    this.score=0;
    this.array=[];
    this.styles=[];
    this.player = 'player1';
    for (let i = 0; i < 11; i++) {
      this.array.push(i);
      this.array.push(i);
      this.styles.push('');
      this.styles.push('');
    }
    this.array=shuffle(this.array);
  }

  gameover() {
    if(this.prevMoves) {
      if(parseInt(this.prevMoves)>this.moves) {
        localStorage.setItem('singlemoves',this.moves.toString());
        alert("New Best Score "+this.moves);
      }
      else {
        alert("Your Score "+this.moves+"\nBest score "+this.prevMoves);
      }
    }
    else {
      localStorage.setItem('singlemoves',this.moves.toString());
      alert("New High Score "+this.moves);
    }
  }

  push(i: number):void {
    // this.clicky.emit();
    //console.log(i);
    if(i===this.prevIndex)
      return;
    //console.log("i");
    this.styles[i]='show';
    if(this.prevIndex===-1) {
      this.prevIndex=i;
    }
    else if(this.array[this.prevIndex]===this.array[i]) {
      setTimeout(()=>{
        this.styles[i]='hide';
        this.styles[this.prevIndex]='hide';
        this.prevIndex=-1;
        this.moves++;
        this.score++;
        if(this.score===this.array.length/2)
          this.gameover();
      },1200);
    }
    else {
      setTimeout(()=>{
        this.styles[i]='';
        this.styles[this.prevIndex]='';
        this.prevIndex=-1;
        this.moves++;
      },1200);
    }
  }

}
