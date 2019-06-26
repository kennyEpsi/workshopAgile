import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Neo4jService } from '../neo4j.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  connexionForm: FormGroup;
  username: FormControl;
  password: FormControl;

  public constructor(private router: Router, private neo4jService: Neo4jService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.connexionForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  connexion() {
    this.neo4jService.getPersonne(this.connexionForm.value.username, this.connexionForm.value.password).subscribe({
      onNext: record => {
        this.router.navigate(['/chatRoom']);
      },
      onCompleted: () => {
        this.connexionForm.reset();
      },
      onError: error => {
        this.connexionForm.reset();
        console.log(error);
      }
    });
  }

}
