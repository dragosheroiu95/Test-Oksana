import {
  Component,
  Input,
  OnInit,
  Optional,
  AfterViewInit,
  ChangeDetectorRef,
  Output,
  EventEmitter
} from '@angular/core';
import { UserInterface } from '../../../../interfaces';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit, AfterViewInit {

  @Input() user: UserInterface;
  @Output() backClick = new EventEmitter<any>();

  constructor(
    @Optional() private parent: UserComponent,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit() {
    this.parent.user = { ...this.user };
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  onBackClick(event: any): void {
    this.backClick.emit();
  }
}
