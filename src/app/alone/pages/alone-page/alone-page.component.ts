import { Component } from '@angular/core';
import {CounterAloneComponent} from "../../components/counter-alone/counter-alone.component";

@Component({
  standalone: true,
  imports: [CounterAloneComponent],
  templateUrl: './alone-page.component.html',
  styleUrl: './alone-page.component.css'
})
export class AlonePageComponent {

}
