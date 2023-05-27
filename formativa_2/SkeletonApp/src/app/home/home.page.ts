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
  /* username: string = "";
  surname: string = "";
  education: string = "";
  date: string = ""; */

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      const navigationState = this.router.getCurrentNavigation()?.extras?.state;
      if (navigationState && 'user' in navigationState) {
        this.user = navigationState['user'];
        // console logs
        console.log(this.user);
        console.log(this.user.id);
        console.log(this.user.username);
        console.log(this.user.surname);
        console.log(this.user.education);
        console.log(this.user.date);
      } else{
        // Si no se pasaron datos o no existe la propiedad 'user', redirige a la página de inicio de sesión
        this.router.navigate(['/login']);
      }
    });
  }
}
