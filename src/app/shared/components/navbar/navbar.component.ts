import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { FilterModalComponent } from '../modals/filter-modal/filter-modal.component';
import { FilterService } from '@app/core/services/filter/filter.service';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit, OnDestroy {

  selectedType: string;
  private unsubscribe$ = new Subject<void>();

  constructor(public modal: ModalController,
              private _filter: FilterService) { }

  ngOnInit() {
    this.getSelectedType();
  }

  async openFilterModal(): Promise<void> {
    const modal = await this.modal.create({
      component: FilterModalComponent
    });
    return await modal.present();
  }

  private getSelectedType(): void {
    this._filter.pokeType$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(res => {
      !res || res === 'all' ? this.selectedType = null : this.selectedType = res;
    }, (err: any) => console.log(err));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
