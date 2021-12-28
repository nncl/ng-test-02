import { ActionDirective } from './action.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirectiveModule } from './action.module';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe(ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionDirectiveTestComponent ],
      imports: [ ActionDirectiveModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it(`(D) (@Output appAction) should emit event with payload when the enter key is pressed`, () => {
    const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new KeyboardEvent('keyup', { key: 'enter' });
    divEl.dispatchEvent(event);

    expect(component.hasEvent()).toBeTrue();
  });

  it(`(D) (@Output appAction) should emit event with payload when the enter key is pressed by directive`, () => {
    const divEl: HTMLElement = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
    const event = new KeyboardEvent('keyup', { key: 'enter' });
    divEl.dispatchEvent(event);

    expect(component.hasEvent()).toBeTrue();
  });

  it(`(D) (@Output appAction) should emit event with payload when clicked`, () => {
    const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new Event('click'); // Or divEl.click();
    divEl.dispatchEvent(event);

    expect(component.hasEvent()).toBeTrue();
  });

  // Example only, it's better handle divided
  it(`(D) (@Output appAction) should emit event with payload when clicked or enter key pressed`, () => {
    const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');

    const clickEvent = new Event('click');
    const keyboardEvent = new KeyboardEvent('keyup', { key: 'enter' });

    divEl.dispatchEvent(clickEvent);
    expect(component.hasEvent()).withContext('Click event').toBeTrue();

    component.clear();
    divEl.dispatchEvent(keyboardEvent);
    expect(component.hasEvent()).withContext('Keyboard event "keyup"').toBeTrue();
  });
});

@Component({
  template: `
    <div class="dummy-component" (appAction)="actionHandler($event)"></div>`
})
class ActionDirectiveTestComponent {
  private event = null;

  public actionHandler(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }

  public clear(): void {
    this.event = null;
  }
}
