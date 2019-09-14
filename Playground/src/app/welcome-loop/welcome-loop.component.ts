import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-loop',
  templateUrl: './welcome-loop.component.html',
  styleUrls: ['./welcome-loop.component.css'],
})
export class WelcomeLoopComponent implements OnInit {
  names = [
    {
      name: 'Max',
      age: 31,
      occupation: 'Teacher',
      description: 'I am a great teacher',
      image: 'https://picsum.photos/200/300?random',
    },
    {
      name: 'Peter',
      age: 24,
      occupation: 'Professor',
      description: 'I give students their future',
      image: 'https://picsum.photos/200/300?random',
    },
    {
      name: 'Calle',
      age: 24,
      occupation: 'Entrepreneur',
      description: 'I work a lot',
      image: 'https://picsum.photos/200/300?random',
    },
    {
      name: 'Nabanita',
      age: 32,
      occupation: 'Student',
      description: 'I try to learn a lot',
      image: 'https://picsum.photos/200/300?random',
    },
  ];
  constructor() {}

  ngOnInit() {}
  welcomePerson(person: String) {
    alert(`Welcome ${person}`);
  }
}
