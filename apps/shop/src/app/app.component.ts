import { Component, HostListener, Inject } from "@angular/core";
import { IS_DESKTOP } from "./core/tokens/tokens";

@Component({
  selector: "hf-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  constructor(@Inject(IS_DESKTOP) public isDesktop: boolean){
   
  }
}
