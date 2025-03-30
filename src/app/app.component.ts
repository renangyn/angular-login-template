import { Component, computed, inject } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { AuthDirective } from './auth/auth.directive';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { LogDirective } from './log.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, AuthDirective],
})
export class AppComponent {
  private authService = inject(AuthService);
  constructor(private dialog: MatDialog) {}


  isAdmin = computed(() => this.authService.activePermission() === 'admin');

  abrirModal() {
    this.dialog.open(ModalComponent, {
      width: '400px'
    });
}
}
