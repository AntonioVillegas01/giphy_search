import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent {


  // usar el operador "!" para decir que siempre va a venir este objeto
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;


  constructor(private gifsService: GifsService) {
  }

  buscar(): void {
    const valor = this.txtBuscar.nativeElement.value;

    if ( valor.trim().length <= 0) { return; }
    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }
}
