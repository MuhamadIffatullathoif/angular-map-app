import {Component, ElementRef, ViewChild} from '@angular/core';
import * as mapboxgl from "mapbox-gl";

interface MarkerAndColor {
  color: string;
  marker: mapboxgl.Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {
  @ViewChild('map')
  public divMap?: ElementRef;
  public map?: mapboxgl.Map;
  public markers: MarkerAndColor[] = [];
  public currentLnglat: mapboxgl.LngLat = new mapboxgl.LngLat(-74.34618731024227, 40.09070068472067);

  ngAfterViewInit(): void {
    if (!this.divMap) throw new Error("HTML Element not found");
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiaWZmYXQxOTk3IiwiYSI6ImNscm16cGw4NzExcGQyanB3NHQ1ajNlbnEifQ.wPAAN7tQBA8Lk7881JaSBw',
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40],
      zoom: 10
    });
    this.readFromLocalStorage();
    // const marker = new mapboxgl.Marker()
    //   .setLngLat(this.currentLnglat)
    //   .addTo(this.map);
  }

  createMarker(): void {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const lngLat = this.map!.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: mapboxgl.LngLat, color: string): void {
    if (!this.map) return;
    const marker = new mapboxgl.Marker({
      color: color,
      draggable: true
    }).setLngLat(lngLat)
      .addTo(this.map);
    this.markers.push({color, marker});
    this.saveToLocalStorage();
  }

  deleteMarker(index: number): void {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  flyTo(marker: mapboxgl.Marker): void {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage(): void {
    const plainMarker: PlainMarker[] = this.markers.map(({color, marker}) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });
    localStorage.setItem('plainMarkers', JSON.stringify(plainMarker));
  }

  readFromLocalStorage(): void {
    const plainMarkerString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkerString);

    plainMarkers.forEach(({color, lngLat}) => {
      const [lng, lat] = lngLat;
      const coords = new mapboxgl.LngLat(lng, lat);

      this.addMarker(coords, color);
    })
  }
}
