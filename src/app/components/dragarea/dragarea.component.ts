import { CdkDragDrop, CdkDragEnter, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Box } from '../box.model';
@Component({
  selector: 'app-dragarea',
  templateUrl: './dragarea.component.html',
  styleUrls: ['./dragarea.component.css']
})
export class DragareaComponent implements OnInit {
  imageWidth: number = 400;
  imageHeight: number = 400;
  numBoxes: number = 4;
  boxes:Box[] = [];
  boxesInZone:Box[] = [];
  boxesList: string[] = [];
  boxesInZoneList: string[]= [];
  public innerWidth: any;
  public innerHeight: any;
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    for(let i = 0; i < this.numBoxes; i++) {
      let box:Box = {title: 'box'+ i, xCoord: Math.min(Math.random() * this.innerWidth, 1625), yCoord: Math.min( Math.random() * this.innerHeight, 720)}
      this.boxes.push(box)
      this.boxesList.push(box.title)
    }

    console.log(this.boxes)
  }
  drop(event: any) {
    console.log('hit')
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  dragEnd(event: Event | DragEvent) {
    console.log(event)
  }

  checkWin(){
    let boxes = document.querySelectorAll('.box');
    let rectangle = document.querySelector('.boundary');
    if(boxes && rectangle) {
      if(Math.abs(rectangle?.getBoundingClientRect().left - boxes[0]?.getBoundingClientRect().left) < 15 && Math.abs(rectangle?.getBoundingClientRect().top - boxes[0]?.getBoundingClientRect().top) < 15
      && Math.abs(rectangle?.getBoundingClientRect().right - boxes[1]?.getBoundingClientRect().right) < 15 && Math.abs(rectangle?.getBoundingClientRect().top - boxes[1]?.getBoundingClientRect().top) < 15
      && Math.abs(rectangle?.getBoundingClientRect().left - boxes[2]?.getBoundingClientRect().left) < 15 && Math.abs(rectangle?.getBoundingClientRect().bottom - boxes[2]?.getBoundingClientRect().bottom) < 15
      && Math.abs(rectangle?.getBoundingClientRect().right - boxes[3]?.getBoundingClientRect().right) < 15 && Math.abs(rectangle?.getBoundingClientRect().bottom - boxes[3]?.getBoundingClientRect().bottom) < 15) {
        rectangle.classList.add('gold')
        document.querySelector('.title')?.classList.add('big')
        console.log('pretty close !')
      }
    }
  }
}
