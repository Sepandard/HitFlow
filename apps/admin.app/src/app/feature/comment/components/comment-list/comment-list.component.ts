import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CommentsEndpoint } from '../../api/comment-api.endpoint';
import {
  Comment,
  CommentStatusLabel
} from '../../api/comment-api.model';

@Component({
  selector: 'hit-flow-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent {
  columnDefs: ColDef[] = [
    { field: 'userId' },
    { field: 'productId' },
    {
      field: 'isConfirmed',
      cellRenderer: (cell: any) => {
        const model: Comment = cell.data;
        const { isConfirmed } = model;
        return CommentStatusLabel[isConfirmed];
      }
    },
    { field: 'creationTime' },
    { field: 'username' },
    { field: 'productName' }
  ];
  public endpoint = CommentsEndpoint.base;
}
