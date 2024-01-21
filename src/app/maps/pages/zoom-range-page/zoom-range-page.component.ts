import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as mapboxgl from "mapbox-gl";

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit{
  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) throw new Error("HTML Element not found");
    const map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiaWZmYXQxOTk3IiwiYSI6ImNscm16cGw4NzExcGQyanB3NHQ1ajNlbnEifQ.wPAAN7tQBA8Lk7881JaSBw',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
