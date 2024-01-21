import {Component} from '@angular/core';

interface House {
  title: string;
  description: string;
  lngLat: [number, number];
}

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  public houses: House[] = [
    {
      title: 'Semarang',
      description: 'Description Semarang',
      lngLat: [-75, 45]
    },
    {
      title: 'Surabaya',
      description: 'Description Surabaya',
      lngLat: [-75, 45]
    },
    {
      title: 'Bandung',
      description: 'Description Bandung',
      lngLat: [-75, 45]
    },
  ];
}
