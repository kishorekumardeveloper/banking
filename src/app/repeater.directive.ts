import { Directive,ViewContainerRef,Input,TemplateRef } from '@angular/core';

@Directive({
  selector: '[appRepeater]'
})
export class RepeaterDirective {
  @Input("appRepeater") n: number;
  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
    this.viewContainerRef.clear();
   }
   ngOnInit(){
    for (let i = 0; i < 5; i++)
    {
      this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: i});
    }
  }
}
