import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css'],
})
export class UsuarioNuevoComponent implements OnInit {
  constructor(private activaredRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activaredRoute.parent.params.subscribe((params) => {
      console.log(params['id']);
    });
  }
}
