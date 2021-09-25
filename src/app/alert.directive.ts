import { Directive,ElementRef,Input,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appAlert]'
})
export class AlertDirective {
  @Input("error") error: string;
  @HostBinding("title") title: string;
  constructor(private elementRef:ElementRef ) { 

  }

    ngOnInit(){
      this.elementRef.nativeElement.innerHTML = `
        <div class="alert alert-danger fade show" role="alert">
        <span>${this.error}</span>
        </div>
      `;
    }
    @HostListener("mouseenter", [ "$event" ])
    onMouseEnter(event)
    {
      this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1.1)";
    }
    @HostListener("mouseleave", [ "$event" ])
    onMouseLeave()
    {
      this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1)";
    }
 
}
