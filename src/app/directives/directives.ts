import {
  Directive,
  AfterViewInit,
  ElementRef,
  Input,
  inject,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[custom-btn-style]',
  standalone: true,
})
export class CustomBtnStyle implements AfterViewInit {
  private elementRef: ElementRef = inject(ElementRef);

  @Input('textColor') color: string = '#1e88e5';
  @Input('bgColor') background: string = '#ffffff';
  height: string = '200px';
  width: string = '200px';
  fontSize: string = '24px';
  borderRadius: string = '50%';
  fontWeight: number = 700;
  border: string = 'solid 5px black';
  boxShadow: string = '0px 10px 10px 0px rgba(4, 23, 109, 0.25)';
  innerText: string = 'Botón con directiva custom';

  ngAfterViewInit(): void {
    // console.log(this.elementRef);
    this.elementRef.nativeElement.innerText = this.innerText;
    this.elementRef.nativeElement.style.transition = 'none';
    this.elementRef.nativeElement.style.height = this.height;
    this.elementRef.nativeElement.style.width = this.width;
    this.elementRef.nativeElement.style.background = this.background;
    this.elementRef.nativeElement.style.borderRadius = this.borderRadius;
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.fontWeight = this.fontWeight;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
    this.elementRef.nativeElement.style.border = this.border;
    this.elementRef.nativeElement.style.boxShadow = this.boxShadow;
  }
}
@Directive({
  selector: '[pointerActive]',
  standalone: true,
})
export class PointerActive {
  private elementRef: ElementRef = inject(ElementRef);
  @Output() onClick = new EventEmitter()

  @HostListener('pointerdown') onPress() {
    this.elementRef.nativeElement.style.filter = 'brightness(100%)';
    this.elementRef.nativeElement.style.scale = 0.98;
    this.onClick.emit(true)
  }
  @HostListener('pointerup') onRelease() {
    this.elementRef.nativeElement.style.filter = 'brightness(85%)';
    this.elementRef.nativeElement.style.scale = 1;
    this.onClick.emit(false)
  }
}

@Directive({
  selector: '[pointerHover]',
  standalone: true,
})
export class PointerHover {
  private elementRef: ElementRef = inject(ElementRef);

  @HostListener('pointerenter')
  toDark() {
    this.elementRef.nativeElement.style.filter = 'brightness(85%)';
  }

  @HostListener('pointerleave')
  toDefault() {
    this.elementRef.nativeElement.style.filter = 'brightness(100%)';
  }
}
