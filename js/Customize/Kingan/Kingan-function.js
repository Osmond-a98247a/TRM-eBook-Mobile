//首頁
function CustomIndex() {
    //白板
    var whiteboard = $("#whiteboard-layout");
    var textconfig = $("#textconfig-layout");
    //文字白板
    var textboard = $("#textboard");
    //手寫白板
    var canvasboard = $("#canvasboard");

    //調色盤繪圖形狀
    var Sharp = $('#Sharp-block');

    //頁面目錄-書籤
    var JumpTab = $("#btnTab");
    //頁面目錄-章節
    var JumpChapter = $("#btnChapter");

    //操作指引光碟
    var operatingcd = $("#operating-cd");
    //操作指引PC
    var operatingpc = $("#operating-pc");

    whiteboard.remove();
    textconfig.remove();
    textboard.remove();
    canvasboard.remove();
    JumpChapter.remove();
}

//工具列
function CustomToolBar() {
    //主工具列
    var ToolBar = $('#ToolBar');
    //主工具列Icon
    var ToolBarIcon = $('#ToolBarIcon');
    //輔助工具列
    var AssistToolBar = $('#AssistToolBar');
    //輔助工具列Icon
    var AssistToolBarIcon = $('#AssistToolBarIcon');
    //預設調色盤
    var DefaultColor = $("#DefaultColor");
    //客製化調色盤
    var CustomColor = $("#CustomColor");

    ToolBar.show();
    AssistToolBar.show();
    AssistToolBarIcon.show();
    DefaultColor.show();
}

function CustomConfirm() {
    //訊息內容
    var Msg = '是否儲存註記？';
    //訊息按鈕True
    var True = "";
    //訊息按鈕False
    var False = "";
    //訊息按鈕Cancel
    var Cancel = "";

    if (Msg.length > 0) {
        messageObj.back.Msg = Msg;
    }
    if(True.length > 0) {
        messageObj.back.True = True;
    }
    if(False.length > 0) {
        messageObj.back.False = False;
    }
    if(Cancel.length > 0) {
        messageObj.back.Cancel = Cancel;
    }
}

function CustomPen() {
    //客製化畫筆
    var Pen = false;
    //畫筆寬度(4 ~ 24)
    var PenWidth = 4
    //畫筆透明度(0 ~ 1)
    var PenOpacity = 1;

    $("#chance_slider").val(PenWidth);
    $("#chance_sliderop").val(PenOpacity * 10);
    colorPen.Width = PenWidth;
    colorPen.Opacity = PenOpacity;
}