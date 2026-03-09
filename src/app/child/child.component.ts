import {
  Component,
  ContentChild,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @ContentChild('sometext')
  element!: ElementRef;

  show() {
    console.log(this.element);
    console.log(this.element.nativeElement);
  }

  ngOnInit(): void {
    console.log('from ngOnInit() .......');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('fm ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy....');
  }

  ngDocheck() {
    console.log('from ngDoCheck...');
  }

  ngAfterContentChecked() {
    console.log('from ngAfterContentCheck...');
  }

  ngAfterViewChecked() {
    console.log('from ngAfterViewCheck...');
  }
}
