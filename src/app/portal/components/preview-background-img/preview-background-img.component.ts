import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-background-img',
  templateUrl: './preview-background-img.component.html',
  styleUrls: ['./preview-background-img.component.scss']
})
export class PreviewBackgroundImgComponent implements OnInit {
  imageSrc = '';
  imageButtons = [ 
    {src:'assets/1.jpg'},
     {src:'assets/2.jpeg'}, 
  {src:'assets/3.png'}]
constructor() { }
  ngOnInit() {
  }
  onClick(imageNameObject) {
    this.imageSrc = imageNameObject.src;
  }
}



