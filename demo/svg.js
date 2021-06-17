import {OpenSheetMusicDisplay} from "../src/OpenSheetMusicDisplay";

(function () {

    const singeLineSvgOption = {
        followCursor: true,
        drawCredits: false,//作者
        drawTitle: false,//标题
        drawSubtitle: false,
        drawComposer: false,

        autoResize: false,
        //backend: "canvas",
        disableCursor: false,

        drawPartNames: true, // try false
        renderSingleHorizontalStaffline:true, //单行展示

        drawFingerings: true,
        fingeringPosition: "left", // left is default. try right. experimental: auto, above, below.
        // fingeringInsideStafflines: "true", // default: false. true draws fingerings directly above/below notes
        setWantedStemDirectionByXml: true, // try false, which was previously the default behavior


        //drawMeasureNumbers: false, // disable drawing measure numbers
        //measureNumberInterval: 4, // draw measure numbers only every 4 bars (and at the beginning of a new system)
        useXMLMeasureNumbers: true, // read measure numbers from xml

        // coloring options
        coloringEnabled: true,
        // defaultColorNotehead: "#CC0055", // try setting a default color. default is black (undefined)
        // defaultColorStem: "#BB0099",

        autoBeam: false, // try true, OSMD Function Test AutoBeam sample
        autoBeamOptions: {
            beam_rests: false,
            beam_middle_rests_only: false,
            //groups: [[3,4], [1,1]],
            maintain_stem_directions: false
        },

    }
    const multiLineSvgOption = {
        followCursor: true,
        drawCredits: false,//作者
        drawTitle: false,//标题
        drawSubtitle: false,
        drawComposer: false,

        autoResize: false,
        //backend: "canvas",
        disableCursor: false,

        drawPartNames: true, // try false
        renderSingleHorizontalStaffline:false, //单行展示

        drawFingerings: true,
        fingeringPosition: "left", // left is default. try right. experimental: auto, above, below.
        // fingeringInsideStafflines: "true", // default: false. true draws fingerings directly above/below notes
        setWantedStemDirectionByXml: true, // try false, which was previously the default behavior


        //drawMeasureNumbers: false, // disable drawing measure numbers
        //measureNumberInterval: 4, // draw measure numbers only every 4 bars (and at the beginning of a new system)
        useXMLMeasureNumbers: true, // read measure numbers from xml

        // coloring options
        coloringEnabled: true,
        // defaultColorNotehead: "#CC0055", // try setting a default color. default is black (undefined)
        // defaultColorStem: "#BB0099",

        autoBeam: false, // try true, OSMD Function Test AutoBeam sample
        autoBeamOptions: {
            beam_rests: false,
            beam_middle_rests_only: false,
            //groups: [[3,4], [1,1]],
            maintain_stem_directions: false
        },

    }

    const singeLineSvgOpenSheetMusicDisplay = new OpenSheetMusicDisplay("singeLineSvg",singeLineSvgOption);
    const multiLineSvgOpenSheetMusicDisplay = new OpenSheetMusicDisplay("singeLineSvg",multiLineSvgOption);

    // singeLineSvgOpenSheetMusicDisplay.load('1.小夜曲.musicxml').then( function () {
    //         singeLineSvgOpenSheetMusicDisplay.render();
    //     },
    //     function (e) {
    //         errorLoadingOrRenderingSheet(e, "rendering");
    //     });

    multiLineSvgOpenSheetMusicDisplay.load('1.小夜曲.musicxml').then( function () {
            multiLineSvgOpenSheetMusicDisplay.render();
        },
        function (e) {
            errorLoadingOrRenderingSheet(e, "rendering");
        });

    function errorLoadingOrRenderingSheet(e, loadingOrRenderingString) {
        var errorString = "Error " + loadingOrRenderingString + " sheet: " + e;
        // if (process.env.DEBUG) { // people may not set a debug environment variable for the demo.
        // Always giving a StackTrace might give us more and better error reports.
        // TODO for a release, StackTrace control could be reenabled
        errorString += "\n" + "StackTrace: \n" + e.stack;
        // }
        console.warn(errorString);
    }
    const singeLineSvgDiv = document.getElementById('singeLineSvg');
    const multiLineSvgDiv = document.getElementById('multiLineSvg');

    const svgInfoBtn = document.getElementById('svgInfo');
    svgInfoBtn.onclick=function () {
        // singeLineSvgOpenSheetMusicDisplay.exportSVGInfo(true);
        multiLineSvgOpenSheetMusicDisplay.exportSVGInfo(false);
    }
}())
