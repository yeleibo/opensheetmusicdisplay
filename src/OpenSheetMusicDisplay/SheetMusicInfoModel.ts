///乐谱相关的信息
export class SheetMusicInfoModel{

    //一行的svg的内容
    public singleLineSvgFileContent: String;
    //多行svg展示的内容
    public multiLineSvgFileContent: String;
    //svg里的分节信息
    public singleLineSvgMeasures: VerticalStaffsInfoModel[]=[];
    //svg里的分节信息
    public multiLineSvgMeasures: VerticalStaffsInfoModel[]=[];
}


export class VerticalStaffsInfoModel{
    public measureIndex: number;
    public horizontalIndexOfMeasure: number;
    public verticalIndexOfSheetMusic: number;
    public staffs: StaffInfoModel[]=[];
}
export  class StaffInfoModel {
    public horizontalIndexOVerticalStaffs: number;
    public voices: VoiceInfoModel[]=[];
}

export  class  VoiceInfoModel{
    public svgId: string;
    //位于分节中的垂直平index
    public verticalIndexOfStaff: number;
    public notes: NoteInfoModel[]=[];
}
///音符的信息模型
export  class NoteInfoModel {
    public verticalIndexOfVoice: number;
    public pianoKey: number;
    //svg的路径
    public svgPath: string;
}

