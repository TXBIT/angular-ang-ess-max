import { Component } from "@angular/core";
import { random } from "lodash";

// declare var _: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app";
  rootName = "username001";
  rootItems = ["Apples", "Bananas", "Cherries"];

  onNameChanged(newName: any) {
    this.rootName = newName;
  }

  onItemWasAdded(newItem: any) {
    // this.rootItems.push(newItem);
    // this.rootItems = this.rootItems.concat([newItem]);
    this.rootItems = [...this.rootItems, newItem];
    console.log(this.rootItems);

    // console.log(_.random(1, 10));
    // console.log(random(1, 10));
  }
}
