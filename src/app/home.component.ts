import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';
  private users;
  private albums;
  private selectedAlbums;
  private selectedUser;

  constructor(private service: AppService, private router: Router) {
    this.users = [];
    this.albums = [];
    this.selectedAlbums = this.service.selectedAlbums;
    this.selectedUser = [];
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(
      response => {
        this.users = response;
      }
    );
  }

  getAlbums(id) {
    this.albums.length = 0;
    this.service.selectedAlbums.length = 0;
    this.service.getAlbums().subscribe(
      response => {
        if (response.length) {
          this.albums = response.filter((item) => {
            return item.userId === id;
          });
        }
      }
    );
  }

  selectedAlbum(id) {
    if (this.service.selectedAlbums.indexOf(id) === -1 && this.service.selectedAlbums.length < 2) {
      this.service.selectedAlbums.push(id);
    }
  }

  showAlbums(id) {
    this.selectedUser = id;
    this.getAlbums(id);
  }

  getPhotos() {
    this.router.navigate(['\photo']);
  }
}
