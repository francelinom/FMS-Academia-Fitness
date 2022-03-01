import { Cliente } from './../cliente.model';
import { ClienteService } from './../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css'],
})
export class ClienteDeleteComponent implements OnInit {
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

  excluirCliente(): void {
    this.clienteService.delete(`${this.cliente.id}`).subscribe(() => {
      alert('Cliente excluido!');
      this.router.navigate(['/clientes']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/clientes']);
  }
}
