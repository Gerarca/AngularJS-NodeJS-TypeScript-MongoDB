import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { environment } from '../../../environments/environment.development'
import { PhotoService } from '../../services/photo.service'
import { Photo } from '../../interfaces/Photo'

@Component({
  selector: 'app-photos-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[] = [];
  url: string = environment.urlUploadsServer;

  constructor(
    private photoService: PhotoService,
    private router: Router 
  ) {}

  ngOnInit() {   
    this.photoService.getPhotos()
      .subscribe( 
        res => { 
          this.photos = res;
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string | undefined) {
    this.router.navigate(['/photos', id]);
  }

}