import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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
  modalImageSrc: string | null = null;
  modalImageName: string = '';
  private observer!: IntersectionObserver;

  private readonly categoryColors: Record<string, [string, string]> = {
    hamburguesas:    ['#b85c1a', '#5a2200'],
    perros:          ['#a07800', '#4a3600'],
    picadas:         ['#991a1a', '#440808'],
    salchichori:     ['#8a6200', '#3e2c00'],
    parrilla:        ['#aa3200', '#4a1200'],
    arepas:          ['#7a6020', '#382c0a'],
    degranadosPapas: ['#8a6200', '#3e2c00'],
    sandwiches:      ['#1e6636', '#0a2e18'],
    bebidas:         ['#1e4a88', '#0a2040'],
  };

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.categories = this.menuService.getCategories();
    this.activeCategory = this.categories[0]?.id ?? '';
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  closeModal(): void {
    this.modalImageSrc = null;
    document.body.style.overflow = '';
  }

  openModal(src: string, name: string): void {
    this.modalImageSrc = src;
    this.modalImageName = name;
    document.body.style.overflow = 'hidden';
  }

  hasRealImage(image?: string): boolean {
    return !!image && image !== 'no-image.png';
  }

  getCategoryGradient(categoryId: string): string {
    const [from, to] = this.categoryColors[categoryId] ?? ['#4a3000', '#1a1200'];
    return `linear-gradient(145deg, ${from} 0%, ${to} 100%)`;
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
