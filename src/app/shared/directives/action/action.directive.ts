import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appAction]'
})
export class ActionDirective {
  @Output() public appAction: EventEmitter<Event> = new EventEmitter<Event>();

  @HostListener('click', [ '$event' ])
  public handleClick(event: Event): void {
    this.appAction.emit(event);
  }

  @HostListener('keyup', [ '$event' ])
  public handleKeyup(event: KeyboardEvent): void {
    this.appAction.emit(event);
  }
}
