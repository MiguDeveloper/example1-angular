import { PaisesService } from "./../../services/paises.service";
import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-dragable",
  templateUrl: "./dragable.component.html",
  styleUrls: ["./dragable.component.css"],
})
export class DragableComponent implements OnInit {
  paises: any[] = [];

  constructor(private paisesService: PaisesService) {



  }

  ngOnInit(): void {
    this.getPaises();
  }

  getPaises() {
    this.paisesService.getPaises().subscribe((resp) => (this.paises = resp));
  }
  drop(evento: CdkDragDrop<any>) {
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }
}
