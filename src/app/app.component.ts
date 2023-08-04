import { Component, EventEmitter } from '@angular/core';
import { Observable, delay, of, take } from 'rxjs';
import { EL, ELS, MEMBERS, OG_MEMBERS } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}

@Component({
  selector: 'app-if',
  template: `
    <section class="ng-if">
      <h2>ngIf</h2>
      <button (click)="toggle()">Cambiar</button>
      <h3>*ngIf="active"</h3>
      <p *ngIf="active" class="green">Activado</p>
      <p *ngIf="!active" class="red">Desactivado</p>
      <!-- Lo que ocurre por detrás -->
      <!-- 
      <ng-template [ngIf]="!active">
        <span>Activado </span>
      </ng-template> 
      -->

      <h3>*ngIf="active; else deactivated"</h3>
      <p *ngIf="active; else deactivated" class="green">Activado</p>
      <ng-template #deactivated>
        <p class="red">Desactivado</p>
      </ng-template>

      <h3>*ngIf="active; then activated; else deactivated"</h3>

      <ng-container
        *ngIf="active; then activated; else deactivated"
        class="green"
      ></ng-container>
      <ng-template #activated>
        <p class="green">Activado</p>
      </ng-template>
      <ng-template #deactivated>
        <p class="red">Desactivado</p>
      </ng-template>

      <h3>[hidden]="active" (no recomendable)</h3>
      <p [hidden]="!active" class="green">Activado</p>
      <p [hidden]="active" class="red">Desactivado</p>
    </section>
  `,
  styleUrls: ['./app.component.scss'],
})
export class IfComponent {
  active: boolean = true;
  count: number = 0;
  el: string = EL;
  els: string[] = ELS;
  emptyMembers: any[] = [];
  ogMembers: any[] = OG_MEMBERS;
  members: any[] = MEMBERS;
  members$: Observable<any> = of(this.members.concat(this.ogMembers)).pipe(
    delay(1500)
  );
  ogMembers$: Observable<any> = of(this.emptyMembers).pipe(take(5));
  member: string = '';

  toggle() {
    this.active = !this.active;
  }
}

@Component({
  selector: 'app-switch',
  template: `
    <section class="ng-switch">
      <h2>ngSwitch</h2>
      <ul>
        <button (click)="switchCase('david')">David</button>
        <button (click)="switchCase('nick')">Nick</button>
        <button (click)="switchCase('rick')">Rick</button>
        <button (click)="switchCase('roger')">Roger</button>
      </ul>

      <ul [ngSwitch]="member">
        <li *ngSwitchCase="'david'">
          {{ members[0].name }}, {{ members[0].instrument }}
        </li>
        <li *ngSwitchCase="'nick'">
          {{ members[1].name }}, {{ members[1].instrument }}
        </li>
        <li *ngSwitchCase="'rick'">
          {{ members[2].name }}, {{ members[2].instrument }}
        </li>
        <li *ngSwitchCase="'roger'">
          {{ members[3].name }}, {{ members[3].instrument }}
        </li>
        <li *ngSwitchDefault>No has seleccionado nada</li>
      </ul>
    </section>
  `,
  styleUrls: ['./app.component.scss'],
})
export class SwitchComponent {
  active: boolean = true;
  count: number = 0;
  el: string = EL;
  els: string[] = ELS;
  emptyMembers: any[] = [];
  ogMembers: any[] = OG_MEMBERS;
  members: any[] = MEMBERS;
  members$: Observable<any> = of(this.members.concat(this.ogMembers)).pipe(
    delay(1500)
  );
  ogMembers$: Observable<any> = of(this.emptyMembers).pipe(take(5));
  member: string = '';

  switchCase(member: string) {
    this.member = member;
  }
}

@Component({
  selector: 'app-for',
  template: `
    <section>
      <h2>ngFor</h2>

      <h3>*ngFor con índice</h3>
      <ul>
        <li *ngFor="let el of els; let i = index; let isEven = even">
          {{ i }} <span *ngIf="isEven && i !== 0">(par)</span> - {{ el }}
        </li>
      </ul>

      <h3>*ngFor dinámico</h3>
      <button (click)="addMembers()">Añadir miembros</button>
      <ul>
        <li *ngFor="let m of ogMembers">{{ m.name }}, {{ m.instrument }}</li>
      </ul>

      <h3>*ngFor con Observables (asíncrono)</h3>
      <button (click)="toggleObservables('delay')">Miembros</button>
      <button (click)="toggleObservables('interval')">Intervalo</button>
      <ng-container *ngIf="active">
        <ul>
          <li *ngFor="let item of members$ | async">
            {{ item.name }}, {{ item.instrument }}
          </li>
        </ul>
      </ng-container>
      <ng-container *ngIf="!active">
        <ul>
          <li *ngFor="let item of ogMembers$ | async">{{ item.name }}</li>
        </ul>
      </ng-container>
    </section>
  `,
  styleUrls: ['./app.component.scss'],
})
export class ForComponent {
  active!: boolean;
  count: number = 0;
  el: string = EL;
  els: string[] = ELS;
  emptyMembers: any[] = [];
  ogMembers: any[] = OG_MEMBERS;
  members: any[] = MEMBERS;
  members$: Observable<any> = of(this.members.concat(this.ogMembers)).pipe(
    delay(1500)
  );
  ogMembers$: Observable<any> = of(this.emptyMembers).pipe(take(5));
  member: string = '';

  addMembers() {
    if (this.count < this.members.length)
      this.ogMembers.push(this.members[this.count]);
    this.count++;
  }

  addEmptyMembers(count: number) {
    this.emptyMembers.push(this.members[count]);
  }

  toggleObservables(option: string) {
    if (!this.active) this.active = false;
    if (option === 'delay') this.active = true;
    else if (option === 'interval') {
      let count = 0;
      this.active = false;
      const id = setInterval(() => {
        this.addEmptyMembers(count);
        count++;
        if (count >= 4) clearInterval(id);
      }, 1000);
    }
  }
}

@Component({
  selector: 'app-class',
  template: `
    <section>
      <h2>ngClass</h2>
      <h3>ngClass con array</h3>
      <button
        [ngClass]="active ? ['yellow', 'big'] : ['black', 'small']"
        (click)="toggle()"
      >
        RUDO
      </button>
      <h3>ngClass con objeto</h3>
      <button [ngClass]="classes" (click)="toggle()">RUDO</button>
    </section>
  `,
  styleUrls: ['./app.component.scss'],
})
export class ClassComponent {
  active: boolean = false;
  classes: any = this.setClasses();
  toggle() {
    this.active = !this.active;
    this.classes = this.setClasses();
  }
  setClasses() {
    return {
      yellow: !this.active,
      big: !this.active,
      black: this.active,
      small: this.active,
    };
  }
}

@Component({
  selector: 'app-model',
  template: `
    <section>
      <h2>ngModel</h2>
      <h3>One Way data binding</h3>
      <input type="text" [value]="inputValue" />

      <h3>Two Way data binding</h3>
      <p>Valor del input: {{ inputValue }}</p>
      <input
        type="text"
        [value]="inputValue"
        (keyup)="searchValueChange($event)"
      />

      <h3>ngModel</h3>
      <p>Valor de ngModel: {{ inputValue }}</p>
      <input type="text" [(ngModel)]="inputValue" />

      <h3>ngModel entre bambalinas</h3>

      <input
        type="text"
        [ngModel]="inputValue"
        (ngModelChange)="modelValueChange($event)"
      />
    </section>
  `,
  styleUrls: ['./app.component.scss'],
})
export class ModelComponent {
  inputValue: string = 'Syd Barrett';

  searchValueChange($event: KeyboardEvent) {
    // console.log($event.target as HTMLInputElement);
    const bindValue = ($event.target as HTMLInputElement).value;
    // console.log(bindValue);
    this.inputValue = bindValue;
  }

  modelValueChange($event: any) {
    // console.log($event);
    this.inputValue = $event;
  }
}

@Component({
  selector: 'app-custom-directive',
  template: `
    <section>
      <h2>Directivas personalizadas</h2>
      <h3>Custom directive</h3>
      <button customDirective text-color="black" bg-color="yellow">
        Botón normal
      </button>

      <h3>Custom Host Directive</h3>
      <button
        csButton
        textColor="yellow"
        background="black"
        (onClick)="onClickHandler($event)"
      >
        Botón normal
      </button>
      <p *ngIf="active">Estás pulsando el botón</p>
    </section>
  `,
  styleUrls: ['./app.component.scss'],
})
export class CustomComponent {
  active: boolean = false;
  onClickHandler(value: boolean) {
    this.active = value;
  }
}

@Component({
  selector: 'app-style',
  template: ` <section>
    <h2>ngStyle</h2>
    <button
      class="black small"
      [ngStyle]="active ? styles : {}"
      (click)="toggle()"
    >
      RUDO
    </button>
  </section>`,
  styleUrls: ['./app.component.scss'],
})
export class StyleComponent {
  active: boolean = false;
  styles: any = this.setStyles();
  toggle() {
    this.active = !this.active;
    this.styles = this.setStyles();
  }
  setStyles() {
    return {
      'font-weight': 'bold',
      'font-size': '32px',
      color: 'black',
      height: '200px',
      width: '200px',
      background: 'yellow',
      'border-radius': '50%',
      border: 'solid black 5px',
    };
  }
}
