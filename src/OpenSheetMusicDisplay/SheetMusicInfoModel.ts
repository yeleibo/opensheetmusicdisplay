///乐谱相关的信息
export class SheetMusicInfoModel{

    //一行的svg的内容
    public singleLineSvgFileContent: String;
    //多行svg展示的内容
    public multiLineSvgFileContent: String;
    //svg里的分节信息
    public singleLineVerticalStaffsInfoModels: VerticalStaffsInfoModel[]=[];
    //svg里的分节信息
    public multiLineVerticalStaffsInfoModels: VerticalStaffsInfoModel[]=[];
}

///对应VerticalGraphicalStaffEntryContainer
export class VerticalStaffsInfoModel{
    public measureIndex: number;
    public verticalIndexOfSheetMusic: number;
    public staffs: StaffInfoModel[]=[];
    public pathX: number;
    public pathY: number;
}
///对应的时StaffEntry
export  class StaffInfoModel {
    public horizontalIndexOfVerticalStaffs: number;
    public voices: VoiceInfoModel[]=[];
}
///对应的voiceEntry
export  class  VoiceInfoModel{
    public svgId: string;
    //位于分节中的垂直平index
    public verticalIndexOfStaff: number;
    public notes: NoteInfoModel[]=[];
}
///对应的时GraphicalNote
///音符的信息模型
export  class NoteInfoModel {
    public verticalIndexOfVoice: number;
    public pianoKey: number;
    //svg的路径
    public svgPath: string;
}

