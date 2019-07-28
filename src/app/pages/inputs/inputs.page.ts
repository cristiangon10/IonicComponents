import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  nombre:string;

  usuario = {
    email:'',
    password:''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log("Form Submit");
    console.log(this.usuario);
    
  }

}
