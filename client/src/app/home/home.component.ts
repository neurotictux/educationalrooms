import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title = ''
  allTitle = 'Quiz Room'
  index = 1

  constructor() {
    setTimeout(() => {
        this.animateText()
      }, 1000)
  }

  animateText() {
    if (this.title.length < this.allTitle.length) {
      this.title = this.allTitle.substring(0, this.index)
      this.index++
      setTimeout(() => {
        this.animateText()
      }, 50)
    } else {
      setTimeout(() => {
        this.title = ''
        this.index = 1
        this.animateText()
      }, 10000)
    }
  }

  ngOnInit() {
  }

}
