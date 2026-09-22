//客製化列表
//ChineseName:中文名稱
//EnglishName:英文名稱
//Disc:硬碟(否為光碟或其他儲存設備)
var CustomizeList = {
    ChineseName: '金安文教',
    EnglishName: 'Kingan',
    Disc: true
}

function CustomizeMain(custName) {
    var stylecss = custName + "-style.css";
    var toolbarcss = custName + "-toolbar.css";
    var functionjs = custName + "-function.js";
    var toolbarjs = custName + "-toolbar.js";

    LoadScript("js/Customize/" + custName + "/css/" + stylecss, "css");
    LoadScript("js/Customize/" + custName + "/css/" + toolbarcss, "css");
    LoadScript("js/Customize/" + custName + "/" + functionjs, "js", function () {
        CustomIndex();
        CustomToolBar();
        CustomConfirm();
    });
    LoadScript("js/Customize/" + custName + "/" + toolbarjs, "js", function () {
        if (!CustomizeList.Disc) {
            mainItemR.push({
                id: "save",
                btnText: "儲存本機",
                Enable: false
            });
        }

        ItemDetails.forEach(function (val, intex) {
            tempToolBars[0].btns.push(val);
        })

        getFaceModuleList(mainItemL, mainItemR);
    });

    opencloseFun();
}

// 上面最愛的開開關關功能
function opencloseFun() {
    //主工具列(右)
    ToolBarList.CustomizeMain.defaultAssist = true
    ToolBarList.CustomizeMain.AssistToolBar.R = true;

    //超連結
    hyperLink.CustomizeMain.defaultBrowser = true;

    //關閉提示訊息
    messageObj.CustomizeMain.defaultConfirm = true;
}