import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  title = "Frontend-разработчик (frontend developer) — это специалист, который отвечает за создание пользовательского интерфейса сайта, приложения или ПО."

  info = "Базовые инструменты для создания страницы сайта — язык разметки веб-страниц HTML, каскадные таблицы стилей CSS и язык программирования JavaScript. На HTML пишут скелет страницы, благодаря CSS она приобретает привлекательный внешний вид. Когда странице задана структура и для нее описаны стили — она сверстана. Этими инструментами владеет верстальщик. В его обязанности иногда входят несложные операции с JavaScript, например подключение плагинов и скриптов, отвечающих за оживление статичных страниц. На небольших проектах задачи верстальщика и frontend-разработчика нередко выполняет один человек."


imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxjUCjwdDUbTuduFsldqWDIXZr2pyFWtydKIi7RwpMpTT1ANxzCIHB5FvI_SE6WjDE0g&usqp=CAU";

imgUrl2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-onO61VpNU8LsE3irmPm7k5N-WHfNVRukyDc2fMIEmB5sBH56vx4K6fXzaSxfr0aBHGM&usqp=CAU"




ngOnInit() {
  setInterval(() => {this.imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KGMxVuGuIhkw5SoKmqaIRBYUv2B-YYsWsBU-r0przATIl3mhQLEfFflg27_V4VjLwEI&usqp=CAU", this.imgUrl2 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDySpr8G05OljyEJLnxSVuV5u5pgrvhF1Sq3_IP60uMDCZqrY2E_iAJQZSSeUR9_vnw7U&usqp=CAU"},3000)
  }
}













