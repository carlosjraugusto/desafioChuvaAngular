import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fontmid',
  templateUrl: './fontmid.component.html',
  styleUrls: ['./fontmid.component.scss']
})
export class FontmidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const lermais = document.getElementById('read_lermais') as HTMLButtonElement | null;

if (lermais) {
  lermais.addEventListener('click', () => {
    const divtex = document.querySelector('.divtex') as HTMLElement | null;

    if (divtex) {
      divtex.classList.toggle('active');

      if (divtex.classList.contains('active')) {
        lermais.textContent = 'ler menos';
      } else {
        lermais.textContent = 'ler mais';
      }
    }
  });
}
