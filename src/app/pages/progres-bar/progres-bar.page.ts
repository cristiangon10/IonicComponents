import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progres-bar',
  templateUrl: './progres-bar.page.html',
  styleUrls: ['./progres-bar.page.scss'],
})
export class ProgresBarPage implements OnInit {

  porcentaje: Number;


  constructor() {
  }

  ngOnInit() {
  }

  cambioRango(event) {
    let valor = event.detail.value;
    this.porcentaje = (valor / 100);
  }
}
