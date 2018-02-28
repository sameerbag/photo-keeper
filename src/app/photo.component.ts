import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit, AfterViewInit {
  private selectedPhotos;
  private allPhotos;
  constructor(private service: AppService, private zone: NgZone) {
    this.selectedPhotos = [];
    this.allPhotos = [];
  }

  ngOnInit() {
    this.getPhotos();
  }

  ngAfterViewInit() {
    let counter = 0;
    this.zone.runOutsideAngular(() => {
      if (this.service.selectedAlbums.length > 0) {
        setInterval(() => {
          counter++;
          if(counter > 1) {
            counter = 0;
          }
          this.setPhotos(counter);
        }, 20000);
      }
      
    });
  }

  getPhotos() {
    if (this.allPhotos.length === 0) {
      this.service.getPhotos().subscribe(response => {
        this.allPhotos = response;
        this.setPhotos(0);
      });
    } else {
      this.setPhotos(0);
    }
  }

  setPhotos(id) {
    if (this.allPhotos.length) {
      this.zone.run(() => {
        this.selectedPhotos = this.allPhotos.filter(item => {
          return (
            item.albumId === this.service.selectedAlbums[id]
          );
        });
      })
    }
  }
}
