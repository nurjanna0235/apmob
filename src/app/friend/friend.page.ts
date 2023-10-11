import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.page.html',
  styleUrls: ['./friend.page.scss'],
})
export class FriendPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  friendList = [
    { nama: 'Nurjanna', status: 'Add friend', img: "assets/img/janna.jpeg"},
    { nama: 'Nurlina', status: 'Unfriend', img: "assets/img/1.jpeg"},
    { nama: 'Nurwahyudhi', status: 'Accept', img: "assets/img/2.jpeg"},
    { nama: 'Leo', status: 'Accept', img: "assets/img/3.jpeg"},
    { nama: 'Abdullah', status: 'Accept', img: "assets/img/4.jpeg"},
  ];
}