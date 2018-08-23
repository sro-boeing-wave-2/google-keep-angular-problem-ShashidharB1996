export class NoteModel{

  constructor(
    public ID: number,
    public Title: string,
    public PlainText: string,
    public PinnedStatus: boolean,
    public Labels: label[],
    public CheckList: checkItem[]){
  }

}

class label{
  public LabelText: string;
}

class checkItem{
  public CheckListText: string;
}
