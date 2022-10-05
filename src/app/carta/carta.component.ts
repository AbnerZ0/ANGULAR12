import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  public img:string="https://www.sccnewsbyte.co.uk/wp-content/uploads/2020/08/securitythumbnail400x400.png";
  public Titulo:string="Galeria Fotos";
  constructor() { }

  ngOnInit(): void {
  }

}
