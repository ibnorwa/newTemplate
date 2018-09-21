import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  dominator: number;
  numerator: number;
  constructor(public auth: UserService) { }

  ngOnInit() {
  }

  calculate (): number {
    this.numerator = 5;
    this.dominator = 10;
    const res = this.dominator / this.numerator;
    return (res);
  }

}
