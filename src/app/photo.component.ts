import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  private selectedPhotos;
  private allPhotos;
  constructor(private service: AppService) {
    this.selectedPhotos = [];
    this.allPhotos = [];
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    if (this.allPhotos.length === 0) {
      this.service.getPhotos().subscribe(response => {
        this.allPhotos = response;
        this.setPhotos();
      });
    } else {
      this.setPhotos();
    }
  }

  setPhotos() {
    if (this.allPhotos.length) {
      this.selectedPhotos = this.allPhotos.filter(item => {
        return (
          item.albumId === this.service.selectedAlbums[0] ||
          item.albumId === this.service.selectedAlbums[1]
        );
      });
    }
  }
}
