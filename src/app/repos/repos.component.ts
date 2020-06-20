import {Component, OnInit} from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {User} from '../user';
import { Repos } from '../repos';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
user: User;
repo: Repos;
  constructor(public myService: UserserviceService, private repoService: UserserviceService) {
  }

  searchs(searchName: string) {
    this.myService.searchUSer(searchName).then(
      (success)=>{
        this.user = this.myService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
      this.repoService.getReopos(searchName).then(
        (results)=>{
          this.repo =this.repoService.allRepos
          console.log(this.repo);
        },
        (error)=>{
          console.log(error);
        }
      );
  }

  ngOnInit() {
   this.searchs('Kingsleymuturi')}
}


