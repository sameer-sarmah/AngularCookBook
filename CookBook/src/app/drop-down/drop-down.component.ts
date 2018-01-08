import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  backgroundColorButton="#3AA2AD"
  textColorButton="#FFF"
  backgroundColorMenu="#36c2b6"
  textColorMenu="#FFF"
  onHoverEnabled=true;
  onHover={buttonColor:"#3AA2AD",textColor:"#FFF"};
  height="100%";
  width="100%";
  text="More";
  menuItems:Array<any>=[{itemText:"Cart"},{itemText:"My Profile"},{itemText:"Logout"}];
  constructor() { }

  ngOnInit() {
  }

}
