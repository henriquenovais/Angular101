import { Component } from "@angular/core";
/*
The main three files of the main angular app component are:
app.component.ts
app.component.html
app.component.css

The global HTML file in which the components are gonna be generated is  "index.html"
which is inside the main folder.

When a component is generated, the following files are created:
--Heroes
  -heroes.component.css
  -heroes.component.html
  -heroes.component.ts
*/
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "The Tour of Heroes";
}
