import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  public img:string="https://as01.epimg.net/meristation/imagenes/2022/07/21/noticias/1658389050_817312_1658389673_noticia_normal.jpg";
  public Titulo:string="Galeria Fotos";
  constructor() { }

  ngOnInit(): void {
  }

}
