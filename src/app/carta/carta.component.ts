import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  public img:string="https://as01.epimg.net/meristation/imagenes/2022/05/15/noticias/1652600213_062393_1652616420_portada_normal.jpg";
  public Titulo:string="Galeria Fotos";
  constructor() { }

  ngOnInit(): void {
  }

}
