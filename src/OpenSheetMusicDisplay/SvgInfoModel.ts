///svg相关的信息
export class SvgInfoModel{
    public  svgId: string;

    public measures: MeasureInfoModel[]=[];
}
///分节的信息模型
export  class MeasureInfoModel{
    //分节的index
    public verticalIndexOfSheetMusic: number;
    public horizontalIndexOfSheetMusic: number;
    public staffs: StaffInfoModel[]=[];
}
export  class StaffInfoModel {
    public verticalIndexOfMeasure: number;
    public voices: VoiceInfoModel[]=[];
}

export  class  VoiceInfoModel{
    //位于分节中的垂直平index
    public verticalIndexOfStaff: number;
    public notes: NoteInfoModel[]=[];
}

export  class NoteInfoModel {
    public verticalIndexOfVoice: number;
    public svgId: string;
}
