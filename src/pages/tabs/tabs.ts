import { Component } from '@angular/core';

import { Noticias } from '../noticias/noticias';
import { Ranking } from '../ranking/ranking';
import { Buscador } from '../buscador/buscador';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Buscador;
  tab2Root = Noticias;
  tab3Root = Ranking;

  constructor() {

  }
}
