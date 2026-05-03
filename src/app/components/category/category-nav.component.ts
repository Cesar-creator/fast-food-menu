import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCategory } from '../../models/menu.model';

@Component({
  selector: 'app-category-nav',
  imports: [CommonModule],
  templateUrl: './category-nav.component.html',
  styleUrl: './category-nav.component.scss'
})
export class CategoryNavComponent {
  @Input() categories: MenuCategory[] = [];
  @Input() activeId: string = '';
  @Output() categorySelected = new EventEmitter<string>();

  scrollToCategory(id: string): void {
    this.categorySelected.emit(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
