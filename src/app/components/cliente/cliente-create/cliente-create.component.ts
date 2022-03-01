import { Cliente } from './../cliente.model';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css'],
})
export class ClienteCreateComponent implements OnInit {
  cliente: Cliente = {
    nome: '',
    idade: null,
    endereco: '',
  };

  constructor(private router: Router, private clienteService: ClienteService) {}

  ngOnInit(): void {}

  cancelar(): void {
    this.router.navigate(['/clientes']);
  }

  criarCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      alert('Produto Criado com Sucesso');
      this.router.navigate(['/clientes']);
    });
  }
}
