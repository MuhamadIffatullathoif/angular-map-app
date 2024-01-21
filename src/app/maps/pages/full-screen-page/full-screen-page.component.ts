import {AfterViewInit, Component} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

// (mapboxgl as any).accessToken = 'pk.eyJ1IjoiaWZmYXQxOTk3IiwiYSI6ImNscm16cGw4NzExcGQyanB3NHQ1ajNlbnEifQ.wPAAN7tQBA8Lk7881JaSBw';
@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css'
})
export class FullScreenPageComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiaWZmYXQxOTk3IiwiYSI6ImNscm16cGw4NzExcGQyanB3NHQ1ajNlbnEifQ.wPAAN7tQBA8Lk7881JaSBw',
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

}
