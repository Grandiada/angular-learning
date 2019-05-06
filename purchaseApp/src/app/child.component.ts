import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>Имя пользователя: {{name}}</p>
               <p>Возраст пользователя: {{age}}</p>
                <ng-content></ng-content>
                <div>
                <button (click)="change(true)">+</button>
                <button (click)="change(false)">-</button>
                </div>`,
    styles: [`h2, p {color:red;}`]
})
export class ChildComponent {
    @Input() name: string;
    @Input() age: number;

    @Output() onChanged = new EventEmitter<boolean>();
    change(increased: boolean) {
        this.onChanged.emit(increased);
    }
}