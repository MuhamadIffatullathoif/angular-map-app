import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: 'maps-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit {

  @Input()
  public lngLat?: [number, number];
  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.lngLat) throw new Error("lngLat can't be null");
    if (!this.divMap) throw new Error("Map div not found");
    const maps = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiaWZmYXQxOTk3IiwiYSI6ImNscm16cGw4NzExcGQyanB3NHQ1ajNlbnEifQ.wPAAN7tQBA8Lk7881JaSBw',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat,
      zoom: 15,
      interactive: false
    });

    new mapboxgl.Marker()
      .setLngLat(this.lngLat)
      .addTo(maps);
  }

}
