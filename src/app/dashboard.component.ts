import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {
  loadState: string = "loading";

  onSwitchState(event: string) {
    this.loadState = "finished";
  }
}
