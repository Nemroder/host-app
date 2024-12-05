import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'inventarios',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './InventariosModule',
      }).then((m) => m.InventariosModule),
  },
  {
    path: 'compras',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './ComprasModule',
      }).then((m) => m.ComprasModule),
  },
  {
    path: 'pqrs-soul',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './pqrs-soul',
      }).then((m) => m.PqrsSoulModule),
  },
  {
    path: 'soul-bi',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './soul_bi',
      }).then((m) => m.SoulBiModule),
  },
  {
    path: 'standards',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './standars',
      }).then((m) => m.StandardsModule),
  },
  { path: '', redirectTo: 'inventarios', pathMatch: 'full' }, // Ruta por defecto
  { path: '**', redirectTo: 'inventarios' }, // Ruta para no encontrados
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}