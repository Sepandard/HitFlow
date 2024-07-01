import { Hit } from '../../../../../../../libs/hit/src/lib/model/hit.model';
// to do add ts config
export interface ReportHitType {
  click: Hit[];
  movement: Hit[];
}

export interface ReportHit {
  title: string;
  description: string;
  value: number;
  date: string;
}

export const REPORT_CONFIG: ReportHit[] = [
  {
    title: 'movement',
    description: "Every pixel change in user's display is a movement",
    value: 0,
    date: '',
  },
  {
    title: 'impression',
    description: 'All clicks and movements',
    value: 0,
    date: '',
  },
  {
    title: 'click',
    description: 'Click is Click!',
    value: 0,
    date: '',
  },
];

export const REPORT_TRANSLATOR = {
  impression: 'impression',
  click: 'click',
  movement: 'movement',
} as const;

export interface ReportRangeHit {
  start: string;
  stop: string;
  time: string;
  field: string;
  measurement: string;
  value: number;
}


export interface FeedbackListItem {
  id: number;
  message?: string;
  feeling: FeedbackFeeling;
}

export enum FeedbackFeeling {
  TERRIBLE = 1,
  BAD = 2,
  NORMAL = 3,
  GOOD = 4,
  FANATIC = 5,
}

export const FeedbackFeelingTitle = {
  [FeedbackFeeling.TERRIBLE]: 'Terrible',
  [FeedbackFeeling.BAD] :'Bad',
  [FeedbackFeeling.NORMAL] :'Normal',
  [FeedbackFeeling.GOOD] :'Good',
  [FeedbackFeeling.FANATIC] :'Fantastic',
}
