import { Component, OnInit, AfterViewInit } from '@angular/core';


declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})

export class MapaPage implements OnInit  {


  constructor() { }

  ngOnInit() {mapboxgl.accessToken = 'pk.eyJ1IjoiZjRjdW5kMDIiLCJhIjoiY2p0enZ6d2piMnp3bDQ1cGl4cGI1czM3OCJ9.mbvid-soKRzFA72ZlgZb6Q';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

 
}
