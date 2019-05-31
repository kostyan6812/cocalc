/*
The slideshow toolbar functionality for cells.
*/

import { React, Component } from "../app-framework"; // TODO: this will move

import { FormControl } from "react-bootstrap";
import { Map as ImmutableMap } from "immutable";
import { JupyterActions } from "./browser-actions";

const TYPES = [
  { title: "-", value: "" },
  { title: "Slide", value: "slide" },
  { title: "Sub-Slide", value: "subslide" },
  { title: "Fragment", value: "fragment" },
  { title: "Skip", value: "skip" },
  { title: "Notes", value: "notes" }
];

const rendered_options = TYPES.map(x => (
  <option key={x.value} value={x.value}>
    {x.title}
  </option>
));

interface SlideshowProps {
  actions: JupyterActions;
  cell: ImmutableMap<string,any>;
}

export class Slideshow extends Component<SlideshowProps> {
  select = (e: any) => this.props.actions.set_cell_slide(this.props.cell.get("id"), e.target.value);
  render() {
    return (
      <FormControl
        componentClass="select"
        placeholder="select"
        onChange={this.select}
        value={this.props.cell.get("slide", "")}
      >
        {rendered_options}
      </FormControl>
    );
  }
}
