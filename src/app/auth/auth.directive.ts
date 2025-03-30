import { Directive, effect, inject, input, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  userType = input.required<Permission>({ alias: 'appAuth'});
  private authService = inject(AuthService);
  private templareRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef)

  constructor() {
    effect(() => {
      if(this.authService.activePermission() === this.userType()){
        this.viewContainerRef.createEmbeddedView(this.templareRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
   }

}
 