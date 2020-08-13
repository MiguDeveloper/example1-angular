import { Component, OnInit, ViewChild } from "@angular/core";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";

@Component({
  selector: "app-scroll",
  templateUrl: "./scroll.component.html",
  styleUrls: ["./scroll.component.css"],
})
export class ScrollComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);
  constructor() {}

  ngOnInit(): void {}

  irAlInicio() {
    this.viewport.scrollToIndex(0);
  }

  irAlaMitad() {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }

  irAlFinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }
}
