import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safehtml'
})
export class SafehtmlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) { }

  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
