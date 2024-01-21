import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import * as mapboxgl from "mapbox-gl";

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map')
  public divMap?: ElementRef;
  public zoom: number = 10;
  public map?: mapboxgl.Map;
  public currentLnglat?: mapboxgl.LngLat = new mapboxgl.LngLat(-74.34618731024227, 40.09070068472067 );

  ngAfterViewInit(): void {
    if (!this.divMap) throw new Error("HTML Element not found");
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiaWZmYXQxOTk3IiwiYSI6ImNscm16cGw4NzExcGQyanB3NHQ1ajNlbnEifQ.wPAAN7tQBA8Lk7881JaSBw',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    this.mapListener();
  }

  mapListener(): void {
    if (!this.map) throw new Error("Map not initialized");
    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    })

    this.map.on('zoomend', (ev) => {
      if(this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    })

    this.map.on('move', () => {
      this.currentLnglat = this.map!.getCenter();
    })
  }

  zoomIn(): void {
    this.map?.zoomIn();
  }

  zoomOut(): void {
    this.map?.zoomOut();
  }

  zoomChanged(value: string) {
    this.zoom = +value;
    this.map?.zoomTo(this.zoom);
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

}
