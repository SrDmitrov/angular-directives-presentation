import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  inject,
} from '@angular/core';

@Directive({
  selector: '[customDirective]',
})
export class CustomDirectiveDirective implements AfterViewInit {
  private elementRef: ElementRef = inject(ElementRef);

  @Input('text-color') color: string = '#1e88e5';
  @Input('bg-color') background: string = '#ffffff';
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

  @HostListener('pointerup')
  @HostListener('pointerenter')
  toDark() {
    this.elementRef.nativeElement.style.filter = 'brightness(85%)';
  }

  @HostListener('pointerdown')
  @HostListener('pointerleave')
  toDefault() {
    this.elementRef.nativeElement.style.filter = 'brightness(100%)';
  }
}
