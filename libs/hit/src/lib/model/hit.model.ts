export interface Hit {
  start: string;
  stop: string;
  time: string;
  field: string;
  measurement: string;
  value: {
    x: number;
    y: number;
    value: number;
  };
}
