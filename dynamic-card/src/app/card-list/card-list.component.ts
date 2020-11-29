import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor() { }
  totalLists: any = [];
  ngOnInit(): void {
  }
  addListItem(): any{
    this.totalLists = [...this.totalLists, {name : `List ${this.totalLists.length + 1}`, cards: []}];
  }

  removeListItem(listItem: any): any{
    this.totalLists = this.totalLists.filter((item: any) => item.name !== listItem);
  }

  addCardToList(listItem: any): any{
    this.totalLists = this.totalLists.map((card: any) => {
      if (card.name === listItem){
        return ({...card, cards: [...card.cards, {title: `Card ${card.cards.length + 1}`, description: '', comments: [], comment: ''}]});
      }else{
        return card;
      }
    });
  }

  addCommentToCard(listItem: any, cardTitle: any, comment: any): any{
    console.log(comment);

    this.totalLists = this.totalLists.map((card: any) => {
      if (card.name === listItem){
        return ({...card, cards: card.cards.map((cd: any) => {
          if (cd.title === cardTitle){
            return ({...cd, comments: [...cd.comments, comment]});
          }else{
            return cd;
          }
        })});
      }else{
        return card;
      }
    });
    console.log(this.totalLists);
  }

  removeCardFromListCard(listItem: any, cardTitle: any): any{
    this.totalLists = this.totalLists.map((list: any) => {
      if (list.name === listItem){
        return ({...list, cards: list.cards.filter((card: any) => card.title !== cardTitle)});
      }else{
        return list;
      }
    });
  }

  onDrop(event: CdkDragDrop<string[]>): any{
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

  onDropCard(event: CdkDragDrop<string[]>): any{
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
