import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoIosApp';
  inputValue:string = '';
  newword:string = '';

  onKey(event) {this.inputValue = event.target.value;}

  public fooSave(){
    localStorage.setItem('test', this.inputValue);
    this.newword = "";
    }

  public fooPaste() {
    this.newword = localStorage.getItem('test');   
  }

}


