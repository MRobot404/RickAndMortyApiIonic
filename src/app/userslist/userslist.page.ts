import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {
  characters =[];
  page=0;
  maximumPages=3;
  constructor(
 private http: HttpClient
  ) {
    this.loadUsers();
  }
  ngOnInit() {

  }


  loadUsers(event?) {
    this.http.get<any>('https://rickandmortyapi.com/api/character/?results=20&page=1')
    .subscribe(res =>{
      console.log(res);
      this.characters = this.characters.concat(res.results);

      if(event){
        event.target.complete();
      }
    });
  }

  loadMore(event){
    console.log(event);
    this.page=this.page+1;
    this.loadUsers(event);

    if(this.page === this.maximumPages){
      event.target.disabled=true;
    }
  }

}
