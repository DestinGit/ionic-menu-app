import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the HelloComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'hello',
  templateUrl: 'hello.html'
})
export class HelloComponent {

  @Input() helloName;

  @Output() onGreet: EventEmitter<String> = new EventEmitter;
  text: string;

  constructor() {
    console.log('Hello HelloComponent Component');
    this.text = 'Hello World';
  }

  greet() {
    this.onGreet.emit('hello ' + this.helloName);
  }
}
