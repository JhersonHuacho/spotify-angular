import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  //TODO: host
  // ElementRef => Es para hacer referencia a un elemento html
  @Input() customImg = '';

  @HostListener('error') handleError() {
    const elNative = this.elHost.nativeElement;
    console.log('Está imagen revento => ', this.elHost);
    //console.log('this.customImg =>', this.customImg);
    elNative.src = this.customImg;
    //elNative.src = "../../../assets/images/img-broken.png";
    //"../../../assets/images/img-broken.png";
  }

  constructor(private elHost: ElementRef) {
    //console.log('this.customImg =>', this.customImg);
    //console.log("constructor", this.elHost.nativeElement);
  }

}
