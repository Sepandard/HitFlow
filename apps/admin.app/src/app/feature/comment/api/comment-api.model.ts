export interface Comment {
    id: number,
    content:string,
    username:string,
    isConfirmed:CommentStatus
    creationTime:string
} 

export enum CommentStatus {
    Unspecified,
    Pending,
    Confirmed,
    Reject,
}

export const CommentStatusLabel = {
    [CommentStatus.Unspecified]: 'Unspecified',
    [CommentStatus.Pending]: 'Pending',
    [CommentStatus.Confirmed]: 'Confirmed',
    [CommentStatus.Reject]: 'Reject',
  } as const;