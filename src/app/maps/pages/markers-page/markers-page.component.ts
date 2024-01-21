import {Component, ElementRef, ViewChild} from '@angular/core';
import * as mapboxgl from "mapbox-gl";

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {
  @ViewChild('map')
  public divMap?: ElementRef;
  public map?: mapboxgl.Map;
  public currentLnglat: mapboxgl.LngLat = new mapboxgl.LngLat(-74.34618731024227, 40.09070068472067 );

  ngAfterViewInit(): void {
    if (!this.divMap) throw new Error("HTML Element not found");
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiaWZmYXQxOTk3IiwiYSI6ImNscm16cGw4NzExcGQyanB3NHQ1ajNlbnEifQ.wPAAN7tQBA8Lk7881JaSBw',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40],
      zoom: 10
    });

    const marker = new mapboxgl.Marker()
      .setLngLat(this.currentLnglat)
      .addTo(this.map);
  }
}
