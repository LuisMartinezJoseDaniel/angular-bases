import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [ListComponent, HeroComponent],
  exports: [ListComponent, HeroComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
