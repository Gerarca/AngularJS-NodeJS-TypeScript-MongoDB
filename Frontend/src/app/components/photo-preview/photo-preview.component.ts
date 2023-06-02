import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { PhotoService } from '../../services/photo.service'
import {Photo} from '../../interfaces/Photo'

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  id: string = ' ';
  photo: Photo;
  showModal: boolean = false;
  showModalMsj: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getPhoto(this.id)
        .subscribe(
          res => {
            this.photo = res;
          },
          err => console.log(err)
        )
    });
  }

  deletePhoto(id: string | undefined, event: Event) { 
    event.preventDefault();
    this.photoService.deletePhoto(id)
      .subscribe(res => {
        console.log(res)
        this.showModalMsj="Image Successfully removed!";
        this.showModal=true;
      }) 
  }

  updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean { 
    this.photoService.updatePhoto(this.photo._id, title.value, description.value)
      .subscribe(res => {
        console.log(res);
        this.showModalMsj="Image Successfully updated!";
        this.showModal=true;
      }); 
    return false;
  }

  toggleModal() {
    this.showModal=false;
    this.router.navigate(['/photos']);
  }
}