export interface INote{
  id: number;
  title: string;
  plainText: string;
  pinnedStatus: boolean;
  labels: string[];
  checkList: string[];
}
