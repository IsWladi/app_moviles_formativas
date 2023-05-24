import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  user: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      const navigationState = this.router.getCurrentNavigation()?.extras?.state;
      if (navigationState && 'user' in navigationState) {
        this.user = navigationState['user'];
        console.log(this.user['id']);
        console.log(this.user['username']);
      } else{
        // Si no se pasaron datos o no existe la propiedad 'user', redirige a la página de inicio de sesión
        this.router.navigate(['/login']);
      }
    });
  }
}
