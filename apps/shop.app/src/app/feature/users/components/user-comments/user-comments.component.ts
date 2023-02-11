import { Component } from '@angular/core';

@Component({
  selector: 'hit-flow-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent {
  model = [
    {
      status: 'done',
      content: 'سلام',
      creationDate: '1380/12/07'
    },
    {
      status: 'done',
      content: 'سلام',
      creationDate: '1380/12/07'
    },
    {
      status: 'done',
      content: 'سلام',
      creationDate: '1380/12/07'
    }
  ];
}
