import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'clientes',
    component: ClienteComponent,
  },
  {
    path: 'clientes/create',
    component: ClienteCreateComponent,
  },
  {
    path: 'clientes/update/:id',
    component: ClienteUpdateComponent,
  },
  {
    path: 'clientes/delete/:id',
    component: ClienteDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
