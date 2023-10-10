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
    { nama: 'Nurlina', status: 'Unfriend', img: "assets/img/janna.jpeg"},
    { nama: 'Nurwahyudhi', status: 'Accept', img: "assets/img/janna.jpeg"},
    { nama: 'Abdullah', status: 'Accept', img: "assets/img/janna.jpeg"},
    { nama: 'Syapna', status: 'Accept', img: "assets/img/janna.jpeg"},
    { nama: 'Miftah', status: 'Accept', img: "assets/img/janna.jpeg"},
    { nama: 'Pendi', status: 'Add friend', img: "assets/img/janna.jpeg"},
    { nama: 'Jahtur', status: 'Unfriend', img: "assets/img/janna.jpeg"},
    { nama: 'Novyta', status: 'Accept', img: "assets/img/janna.jpeg"},
  ];
}