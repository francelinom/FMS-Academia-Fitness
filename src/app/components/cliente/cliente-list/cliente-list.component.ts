import { HeaderService } from './../../template/header/header.service';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
})
export class ClienteListComponent implements OnInit {
  clientes!: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Lista de cliente',
      icon: 'fa fa-eye',
      routeUrl: '/clientes',
    };
  }

  ngOnInit(): void {
    this.clienteService.list().subscribe((clientes) => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }
}
