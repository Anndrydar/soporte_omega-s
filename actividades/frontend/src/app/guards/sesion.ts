import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const sesion = (): boolean =>{
    const router = inject(Router)
    if (localStorage.getItem('tokens-omega')) {
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
}