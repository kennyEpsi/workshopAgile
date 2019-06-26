import { Injectable } from '@angular/core';
import * as neo4j_driver from 'neo4j-driver/lib/browser/neo4j-web.min.js';
import { Observable } from 'rxjs';
import { Driver } from 'selenium-webdriver/firefox';


@Injectable({
  providedIn: 'root'
})
export class Neo4jService {
  data: any;

  constructor() {
    this.data = new Array();
  }

  neo4j = neo4j_driver.v1;
  uri = 'bolt://localhost:7687';
  user = 'neo4j';
  password = '123456'
  driver = this.neo4j.driver(this.uri, this.neo4j.auth.basic(this.user, this.password), { maxTransactionRetryTime: 15000 });
  session;

  initConnexion() {
    this.driver.onCompleted = function () {
      console.log('Driver instantiation success');
    };
    this.driver.onError = function (error) {
      console.log('Driver instantiation failed', error);
    };
    this.session = this.driver.session();
  }

  getPersonne(email, password) {
    this.initConnexion();
    return this.session.run('match (a:User) WHERE a.mail="' + email + '" AND a.password="' + password + '" return a.nom');
    this.session.close();
  }
}



