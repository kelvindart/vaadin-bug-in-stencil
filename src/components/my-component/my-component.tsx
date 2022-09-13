import { Component, h } from '@stencil/core';
import { ComboBox } from '@vaadin/combo-box';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  constructor() {
    console.log(ComboBox);
  }

  render() {
    return <vaadin-combo-box></vaadin-combo-box>;
  }
}
