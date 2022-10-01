import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent implements AfterViewInit {
  
  
  @Input() label!:string;
  @Input() className = 'btn-primary';
  @Input() selection!: City;
  @ViewChild('newItem')newItem!:ElementRef;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<City>();

  ngAfterViewInit(): void {
    // console.log(this.newItem);
    this.newItem.nativeElement.focus();
  }
  onAddNewItem():void{    
    this.newItemEvent.emit(this.newItem.nativeElement.value);
    this.onClear();
  }
  onUpdateItem():void{
    const city:City = {
      _id:this.selection._id,
      name:this.newItem.nativeElement.value
    }    
    this.updateItemEvent.emit(city);
    this.onClear();
  }
  private onClear(){
    this.newItem.nativeElement.value = '';
  }
}
