import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interceptores',
  templateUrl: './interceptores.component.html',
  styleUrls: ['./interceptores.component.css'],
})
export class InterceptoresComponent implements OnInit {
  constructor(private usuarioService: UsuariosService) {}

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe(
      (rpta) => {
        console.log(rpta.data);
      },
      (error) => {
        console.log('Error en el interceptor component');
      }
    );
  }
}
