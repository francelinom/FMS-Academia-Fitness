import { Cliente } from './../cliente.model';
import { ClienteService } from './../cliente.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css'],
})
export class ClienteDeleteComponent implements OnInit {
  cliente!: Cliente;

  constructor(private router: Router, private clienteService: ClienteService) {}

  ngOnInit(): void {
    const id: any = '1';
    this.clienteService.readById(id).subscribe((cliente) => {
      this.cliente = cliente;
    });
  }

  excluirCliente(): void {}

  cancelar(): void {
    this.router.navigate(['/clientes']);
  }
}
