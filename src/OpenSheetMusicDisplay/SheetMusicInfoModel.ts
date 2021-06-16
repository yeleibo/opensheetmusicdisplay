///乐谱相关的信息
export class SheetMusicInfoModel{

    //一行的svg的内容
    public singleLineSvgFileContent: String;
    //多行svg展示的内容
    public multiLineSvgFileContent: String;
    //svg里的分节信息
    public singleLineSvgMeasures: MeasureInfoModel[]=[];
    //svg里的分节信息
    public multiLineSvgMeasures: MeasureInfoModel[]=[];
}
///分节的信息模型
export  class MeasureInfoModel{
    //分节的index
    public verticalIndexOfSheetMusic: number;
    //分节的左右手模型
    public measureHandInfoModels: MeasureHandInfoModel[]=[];
}
///分节的左右手模型
export class MeasureHandInfoModel{
    public horizontalIndexOfSheetMusic: number;
    public staffs: StaffInfoModel[]=[];
}
export  class StaffInfoModel {
    public verticalIndexOfMeasure: number;
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
    public index: number;
    public pianoKey: number;
    //svg的路径
    public svgPath: string;
}

