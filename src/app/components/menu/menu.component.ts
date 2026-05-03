import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCategory } from '../../models/menu.model';
import { CopPipe } from '../../pipes/cop.pipe';
import { HeaderComponent } from '../header/header.component';
import { CategoryNavComponent } from '../category/category-nav.component';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, CopPipe, HeaderComponent, CategoryNavComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit, OnDestroy {
  categories: MenuCategory[] = [];
  activeCategory: string = '';
  private observer!: IntersectionObserver;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.categories = this.menuService.getCategories();
    this.activeCategory = this.categories[0]?.id ?? '';
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeCategory = entry.target.id;
            break;
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    setTimeout(() => {
      this.categories.forEach((cat) => {
        const el = document.getElementById(cat.id);
        if (el) this.observer.observe(el);
      });
    }, 100);
  }

  onCategorySelected(id: string): void {
    this.activeCategory = id;
  }

  getImagePath(img?: string): string {
    if (!img) return './assets/images/placeholder.svg';
    return `./assets/images/${img}`;
  }

  onImageError(event: Event): void {
    const el = event.target as HTMLImageElement;
    const placeholder = 'assets/images/placeholder.svg';
    if (!el.src.endsWith(placeholder)) {
      el.src = placeholder;
    }
  }
}
