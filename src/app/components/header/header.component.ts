import { Component, OnInit, Input, Output, ContentChild, TemplateRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  action: { [Key: string]: Function };

  @Input() titulo: string;

  @Output() changeEvent: EventEmitter<Date> = new EventEmitter();

  @ContentChild('componentHeader')
  componentHeader: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    this.action = {
      change: this.change.bind(this)
    };
  }

  change(): void {
    this.changeEvent.emit(new Date());
  }

}
