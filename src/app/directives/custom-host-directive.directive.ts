import { Directive } from '@angular/core';
import { CustomBtnStyle, PointerActive, PointerHover } from './directives';

@Directive({
  selector: '[csButton]',
  standalone: true,
  hostDirectives: [
    {
      directive: CustomBtnStyle,
      inputs: ['textColor', 'bgColor:background'],
    },
    { directive: PointerActive, outputs: ['onClick'] },
    PointerHover,
  ],
})
export class CsButton {}
