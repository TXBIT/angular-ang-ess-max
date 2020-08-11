import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app";
  rootName = "username001";

  onNameChanged(newName: string) {
    this.rootName = newName;
  }
}
