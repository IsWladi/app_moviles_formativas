import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";
  user = {
    id: "",
    username: "",
    surname: "",
    education: "",
    date: "",
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    const url = 'http://localhost:8000/usuario/login/' + this.username + '/' + this.password;

    // Validar que los campos no estén vacíos
    if (this.username == "" || this.password == "") {
      alert("Por favor ingrese todos los datos");
      return;
    }

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    fetch(url, {
      method: 'GET',
      headers: headers
    })
      .then(response => response.json())
      .then(data => {
        // Manejar la respuesta de la API aquí
        if(data != "invalid"){
          this.user['id'] = data['id'];
          this.user['username'] = data['username'];
          this.user['surname'] = data['surname'];
          this.user['education'] = data['education'];
          this.user['date'] = data['date'];

          const navigationExtras: NavigationExtras = {
            state: {
              user: this.user
            }
          }
          this.router.navigate(['/home'], navigationExtras);
        }
        else{
          alert("Usuario o contraseña incorrectos");
        }
      }
      )
      .catch(error => {
        // Manejar cualquier error de la petición
        console.error(error);
      });
  }
}
