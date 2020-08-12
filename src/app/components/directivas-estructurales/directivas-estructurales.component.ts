import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directivas-estructurales",
  templateUrl: "./directivas-estructurales.component.html",
  styleUrls: ["./directivas-estructurales.component.css"],
})
export class DirectivasEstructuralesComponent implements OnInit {
  frase: any = {
    author: "Bill Gates",
    frase:
      "Sé amable con los nerds. Lo más probable es que termines trabajando para uno.",
  };

  personajes = ["Bill Gates", "Steve Jobs", "Steve Wozniak"];
  showHide = true;

  constructor() {}

  ngOnInit(): void {}

  showOrHide() {
    this.showHide = !this.showHide;
  }

  clickOnLi(i: string) {
    document.getElementById(i).style.backgroundColor = "#FF9933";
  }
}
