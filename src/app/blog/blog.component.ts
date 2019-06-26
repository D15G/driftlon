import {Component, OnInit} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {UploadService} from '../services/upload.service';
import {SafeResourceUrl} from '@angular/platform-browser';
import {Upload} from '../services/upload';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';

// @ts-ignore
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-ch'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ]
})
export class BlogComponent implements OnInit {

  public uploaded: Upload = {titel: '', datum: '', picture: '', text: ''};
  public image: SafeResourceUrl;

  blogList: Observable<Upload[]>;
  blogListRef: AngularFireList<Upload>;

  constructor(private afDb: AngularFireDatabase) {
  }

  ngOnInit() {
    this.blogListRef = this.afDb.list('blogs');
    this.blogList = this.blogListRef.valueChanges();
  }

  detectFiles(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.image = reader.result;

      reader.readAsDataURL(file);
    }
  }

  upload() {
    this.blogListRef.push({
      titel: this.uploaded.titel,
      text: this.uploaded.text,
      picture: this.image.toString(),
      datum: this.uploaded.datum.toString()
    });
  }

}
