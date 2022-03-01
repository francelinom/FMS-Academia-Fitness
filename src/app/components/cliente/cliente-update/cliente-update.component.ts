import { Cliente } from './../cliente.model';
import { ClienteService } from './../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css'],
})
export class ClienteUpdateComponent implements OnInit {
  cliente!: Cliente;

  constructor(
    private router: Router,
    private clienteService: ClienteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.clienteService.readById(id).subscribe((cliente) => {
      this.cliente = cliente;
    });
  }

  atualizarCliente(): void {
    this.clienteService.update(this.cliente).subscribe(() => {
      alert('Cliente Atualizado!');
      this.router.navigate(['/clientes']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/clientes']);
  }
}
