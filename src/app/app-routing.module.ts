import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
   },
  {
    path: 'pokemon/:name',
    loadChildren: () => import('./pages/single-pokemon/single-pokemon.module').then( m => m.SinglePokemonPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./shared/components/error404/error404.module').then(m => m.Error404PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
