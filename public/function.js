//import { arr, infomation } from './ss';
// function addScript(url) {
//     document.write("<script language=javascript src=" + url + "></script>");
// }
var bg = document.querySelector(".bg");
let myItem = new Array;
myItem=[];
//打印信息
var table = document.querySelector("tbody");
function show(page, arra4) {
    clear();
    jump(page, arra4);
    // btn_all.checked = false;
    shwow_page();
    change();
    // check();
    // alls();
}
//快排函数
function quick_sort(left, right) {
    console.log(left);
    let i, j, t, temp, tempnumber;
    if (left > right) {
        return;
    }
    tempnumber = (Number)(arra[left].endtime) - (Number)(arra[left].starttime);
    temp = arra[left];
    i = left;
    j = right;

    while (i != j) {
        while (((Number)(arra[j].endtime) - (Number)(arra[j].starttime)) >= tempnumber && i < j)
            j--;
        while (((Number)(arra[i].endtime) - (Number)(arra[i].starttime)) <= tempnumber && i < j)
            i++;
        if (i < j) {
            t = arra[i]; arra[i] = arra[j]; arra[j] = t;
        }
    }

    arra[left] = arra[i];
    arra[i] = temp;

    quick_sort(left, i - 1);
    quick_sort(i + 1, right);

}


function activity(id, name, place, startday, starttime, endtime) {
    this.id = id;
    this.name = name;
    this.place = place;
    this.startday = startday;
    this.starttime = starttime;
    this.endtime = endtime;
}

//创建数组存储学生信息
var arr = new Array({
    id: 1,
    name: "数据结构",
    address: "S楼",
    teacher: "王老师",
    elDocument: "",
    paDocument: "",
    starttime: "10",
    endtime: "11",
    startday: "1",
    testtime: "16周星期一上午10点",
    testaddress: " 腾讯会议：123456789",
    qun: "123456789",
},
    {
        id: 8,
        name: "计算机网络",
        address: "N楼",
        teacher: "李老师",
        elDocument: "",
        paDocument: "",
        starttime: "8",
        endtime: "9",
        startday: "1",
        testtime: " 16周星期一下午2点",
        testaddress: " 腾讯会议：223456789",
        qun: "223456789",
    },
    {
        id: 12,
        name: "计算机组成原理",
        address: "N楼",
        teacher: "刘老师",
        elDocument: "",
        paDocument: "",
        starttime: "13",
        endtime: "15",
        startday: "1",
        testtime: " 16周星期二下午5点",
        testaddress: " 腾讯会议：323456789",
        qun: "323456789",

    },
    {
        id: 10,
        name: "形式语言与自动机",
        address: "S1楼",
        teacher: "杨老师",
        elDocument: "",
        paDocument: "",
        starttime: "16",
        endtime: "18",
        startday: "1",
        testtime: " 16周星期三下午5点",
        testaddress: " 腾讯会议：423456789",
        qun: "423456789",

    },
    {
        id: 2,
        name: "数据库原理",
        address: "S2楼",
        teacher: "周老师",
        elDocument: "",
        paDocument: "",
        starttime: "8",
        endtime: "10",
        startday: "2",
        testtime: " 16周星期三上午10点",
        testaddress: " 腾讯会议：523456789",
        qun: "523456789",

    },
    {
        id: 11,
        name: "毛泽东思想概论",
        address: "S2楼",
        teacher: "谢老师",
        elDocument: "",
        paDocument: "",
        starttime: "14",
        endtime: "15",
        startday: "2",
        testtime: " 16周星期四上午10点",
        testaddress: " 腾讯会议：623456789",
        qun: "623456789",
    },
    {
        id: 25,
        name: "JAVA程序设计",
        address: "S1楼",
        teacher: "李老师",
        elDocument: "",
        paDocument: "",
        starttime: "10",
        endtime: "11",
        startday: "3",
        testtime: " 16周星期五上午10点",
        testaddress: " 腾讯会议：723456789",
        qun: "723456789",
    },
    {
        id: 4,
        name: "python程序设计",
        address: "N楼",
        teacher: "周老师",
        elDocument: "",
        paDocument: "",
        starttime: "10",
        endtime: "12",
        startday: "4",
        testtime: " 16周星期五上午8点",
        testaddress: " 腾讯会议：823456789",
        qun: "823456789",
    },
    {
        id: 19,
        name: "军事理论",
        address: "学生活动中心",
        teacher: "周老师",
        elDocument: "",
        paDocument: "",
        starttime: "14",
        endtime: "15",
        startday: "4",
        testtime: " 16周星期五上午9点",
        testaddress: " 腾讯会议：923456789",
        qun: "923456789",
    },
    {
        id: 20,
        name: "C++程序设计",
        address: "S2楼",
        teacher: "周老师",
        elDocument: "",
        paDocument: "",
        starttime: "16",
        endtime: "17",
        startday: "4",
        testtime: " 16周星期六上午8点",
        testaddress: " 腾讯会议：923456781",
        qun: "823456781",
    },
    {
        id: 21,
        name: "概率论",
        address: "S楼",
        teacher: "周老师",
        elDocument: "",
        paDocument: "",
        starttime: "13",
        endtime: "14",
        startday: "5",
        testtime: " 16周星期五下午3点",
        testaddress: " 腾讯会议：823456788",
        qun: "823456788",
    },
    {
        id: 27,
        name: "离散数学",
        address: "N楼",
        teacher: "周老师",
        elDocument: "",
        paDocument: "",
        starttime: "16",
        endtime: "17",
        startday: "5",
        testtime: " 16周星期五下午5点",
        testaddress: " 腾讯会议：823456748",
        qun: "823456748",
    },
);
//创建数组存储学生信息
var arra = new Array({
    id: 1,
    name: "自习",
    place: "教室",
    startday: "1",
    starttime: "16",
    endtime: "17",
},
    {
        id: 2,
        name: "班会",
        place: "教室",
        startday: "2",
        starttime: "16",
        endtime: "17",

    },
    {
        id: 1,
        name: "锻炼",
        place: "操场",
        startday: "3",
        starttime: "20",
        endtime: "21",

    },
    {
        id: 2,
        name: "创新创业",
        place: "教室",
        startday: "4",
        starttime: "19",
        endtime: "20",

    },
    {
        id: 2,
        name: "小组作业",
        place: "教室",
        startday: "5",
        starttime: "11",
        endtime: "12",

    },
    {
        id: 2,
        name: "聚餐",
        place: "教室",
        startday: "5",
        starttime: "21",
        endtime: "22",

    },
    {
        id: 1,
        name: "外出",
        place: "教室",
        startday: "5",
        starttime: "19",
        endtime: "20",

    },
    {
        id: 1,
        name: "打篮球",
        place: "篮球场",
        startday: "5",
        starttime: "17",
        endtime: "18",

    },
    {
        id: 1,
        name: "踢足球",
        place: "足球场",
        startday: "6",
        starttime: "20",
        endtime: "21",

    },
    {
        id: 2,
        name: "团建",
        place: "校外",
        startday: "3",
        starttime: "18",
        endtime: "19",

    },
    {
        id: 2,
        name: "升旗",
        place: "操场",
        startday: "1",
        starttime: "6",
        endtime: "7",

    },
    {
        id: 2,
        name: "团日活动",
        place: "教室",
        startday: "1",
        starttime: "19",
        endtime: "20",

    },
    {
        id: 2,
        name: "讨论课设",
        place: "研讨间",
        startday: "5",
        starttime: "7",
        endtime: "9",

    },
    {
        id: 1,
        name: "散步",
        place: "校园",
        startday: "1",
        starttime: "20",
        endtime: "21",

    },
    {
        id: 1,
        name: "打羽毛球",
        place: "羽毛球场",
        startday: "7",
        starttime: "11",
        endtime: "12",

    },
    {
        id: 1,
        name: "游玩",
        place: "景点",
        startday: "6",
        starttime: "14",
        endtime: "16",

    },
    {
        id: 2,
        name: "仿真实验",
        place: "教室",
        startday: "5",
        starttime: "10",
        endtime: "11",

    },
    {
        id: 1,
        name: "购物",
        place: "商场",
        startday: "7",
        starttime: "21",
        endtime: "22",

    },
    {
        id: 1,
        name: "骑行",
        place: "校园",
        startday: "2",
        starttime: "7",
        endtime: "8",

    },
    {
        id: 2,
        name: "桌游",
        place: "宿舍",
        startday: "2",
        starttime: "22",
        endtime: "23",

    },
    {
        id: 1,
        name: "跑步",
        place: "操场",
        startday: "2",
        starttime: "9",
        endtime: "10",

    },
    {
        id: 2,
        name: "表彰大会",
        place: "教室",
        startday: "2",
        starttime: "11",
        endtime: "12",

    },
    {
        id: 2,
        name: "拍视频",
        place: "校园",
        startday: "6",
        starttime: "7",
        endtime: "8",

    },
    {
        id: 2,
        name: "读书",
        place: "图书馆",
        startday: "2",
        starttime: "18",
        endtime: "19",

    },
    {
        id: 2,
        name: "社交",
        place: "教室",
        startday: "7",
        starttime: "8",
        endtime: "10",

    },
);
function checkTime(a, b, x, y) {
    var times1 = [],
        times2 = [];
    if (a < b) {
        //未跨天
        times1.push([a, b]);
    } else {
        //跨天
        times1.push([a, "24"], ["0", b]);
    }

    if (x < y) {
        times2.push([x, y]);
    } else {
        times2.push([x, "24"], ["0", y]);
    }

    var flag = false;
    //循环比较时间段是否冲突
    for (var i = 0; i < times1.length; i++) {
        if (flag)
            break;
        for (var j = 0; j < times2.length; j++) {
            if (check(times1[i][0], times1[i][1], times2[j][0], times2[j][1])) {
                flag = true;
                break;
            }
        }
    }
    if (flag) {
        //alert("发生冲突");
        return false;
    } else {
        //alert("没有冲突");
        return true;
    }
}

function check(a, b, x, y) {
    if ((Number)(y) < (Number)(a) || (Number)(b) < (Number)(x)) {
        return false;
    } else {
        return true;
    }
}
function index1(orgin, serachString) {
    var index = -1;
    var s_index = 0;
    var move = 0;
    for (var i = 0; i < orgin.length; i++) {
        move++;
        if (orgin.substr(i, 1) == serachString.substr(s_index, 1)) {
            s_index++;
            if (s_index == serachString.length) {
                index = move - serachString.length;
                break;
            }
        } else {
            s_index = 0;
        }
    }
    return index;
}
//当前页数
var cu_page = 0;

shwow_page();
//显示页面
show(cu_page, arra);
// 添加学生
var add = document.querySelector(".btn-add")
add.onclick = function () {
    myItem.push('点击了添加活动按钮')
    // 弹出信息框
    var acti = document.querySelector(".acti");
    acti.style.visibility = "visible";
    bg.style.visibility = "visible";

    // 取消提交
    var add_cancel = document.querySelector(".acti-button-2")
    add_cancel.onclick = function () {
        acti.style.visibility = "hidden";
        var actimation = acti.querySelectorAll("input");
        for (var i = 0; i < actimation.length; i++) {
            actimation[i].value = null;
        }
        bg.style.visibility = "hidden";
    }

    //提交信息
    var add_sure = document.querySelector(".acti-button-1")
    add_sure.onclick = function () {
        var actimation = acti.querySelectorAll("input");
        var stu = new activity(
            actimation[0].value,
            actimation[1].value,
            actimation[2].value,
            actimation[3].value,
            actimation[4].value,
            actimation[5].value,
        );

        // for (var i = 0; i < actimation.length; i++) {
        //     actimation[i].value = null;
        // }
        // arra.push(stu);


        for (var i = 0; i < arr.length; i++) {
            if (actimation[3].value == arr[i].startday) {
                checkTime(actimation[4].value, actimation[5].value, arr[i].starttime, arr[i].endtime);
                if (checkTime(actimation[4].value, actimation[5].value, arr[i].starttime, arr[i].endtime) == false) {
                    //judge = 1;
                    myItem.push("与课程信息发生冲突,冲突时间段为"+arr[i].starttime+"点-"+arr[i].endtime+"点")
                    alert("与课程信息发生冲突,冲突时间段为"+arr[i].starttime+"点-"+arr[i].endtime+"点，请点击取消");
                    return;
                    //失败的操作之后的反应
                }
            }

        }

        for (var i = 0; i < arra.length; i++) {

            if (actimation[3].value == arra[i].startday) {
                checkTime(actimation[4].value, actimation[5].value, arra[i].starttime, arra[i].endtime);
                if (checkTime(actimation[4].value, actimation[5].value, arra[i].starttime, arra[i].endtime) == false) {
                    
                    myItem.push("与课外活动信息发生冲突,冲突时间段为"+arra[i].starttime+"点-"+arra[i].endtime+"点")
                    alert("与课外活动信息发生冲突,冲突时间段为"+arra[i].starttime+"点-"+arra[i].endtime+"点，请点击取消");
                    return;
                    //失败的操作之后的反应
                }
            }

        }

        for (var k = 0; k < actimation.length; k++) {
            actimation[k].value = null;
        }
        // if (checkTime(infomation[6].value, infomation[7].value, arra[i].starttime, arra[i].endtime) == false) {
        //     return;
        // }
        arra.push(stu);
        console.log(cu_page);
        show(cu_page, arra);
        acti.style.visibility = "hidden";
        bg.style.visibility = "hidden";
    }



}
//排序
var search_test = document.querySelector(".btn-test");
search_test.onclick = function () {
    myItem.push('点击了排序按钮')
    // myItem.push("点击了排序按钮")
    // 弹出信息框
    var search_acti = document.querySelector(".search_acti");
    search_acti.style.visibility = "visible";
    bg.style.visibility = "visible";
    // 取消提交
    var test_cancel = document.querySelector(".acti-button-test2");
    test_cancel.onclick = function () {
         myItem.push("点击了排序按钮中的取消按钮")
        search_acti.style.visibility = "hidden";
        var actimation = search_acti.querySelectorAll("input");
        actimation.value = null;
        bg.style.visibility = "hidden";
    }

    //提交信息
    var test_sure = document.querySelector(".acti-button-test1")
    test_sure.onclick = function () {
        myItem.push("点击了排序按钮中的提交按钮")
        var actimation = search_acti.querySelectorAll("input");
        console.log(actimation);
        console.log(actimation.length);
        let stu = actimation[0].value;
        console.log(stu);


        if (stu == 1) {
            myItem.push("点击了排序按钮中的按活动类型分类")
            console.log(1);
            for (let i = 0; i < arra.length - 1; i++) {//控制比较轮次，一共 n-1 趟
                for (let j = 0; j < arra.length - 1 - i; j++) {//控制两个挨着的元素进行比较
                    // console.log(j)
                    if ((Number)(arra[j].id) > (Number)(arra[j + 1].id)) {
                        let temp = arra[j];
                        arra[j] = arra[j + 1];
                        arra[j + 1] = temp;
                    }
                }
            }
        }
        else if (stu == 2) {
            myItem.push("点击了排序按钮中的按课程开始时间排序")
            console.log(2);
            for (let i = 0; i < arra.length - 1; i++) {//控制比较轮次，一共 n-1 趟
                for (let j = 0; j < arra.length - 1 - i; j++) {//控制两个挨着的元素进行比较
                    // console.log(j)
                    if ((Number)(arra[j].startday) > (Number)(arra[j + 1].startday)) {
                        let temp = arra[j];
                        arra[j] = arra[j + 1];
                        arra[j + 1] = temp;
                    }

                    if ((Number)(arra[j].startday) == (Number)(arra[j + 1].startday) && (Number)(arra[j].starttime) > (Number)(arra[j + 1].starttime)) {
                        let temp = arra[j];
                        arra[j] = arra[j + 1];
                        arra[j + 1] = temp;
                    }
                }
            }

        }
        else if (stu == 3) {
            myItem.push("点击了排序按钮中的按课程持续时间排序")
            console.log(3);
            quick_sort(0, arra.length - 1);
        }
        else {
            myItem.push("排序选项输入错误")
            alert("请输入正确的选项");
        }
        for (var i = 0; i < actimation.length; i++) {
            actimation[i].value = null;
        }
        show(cu_page, arra);
        search_acti.style.visibility = "hidden";
        bg.style.visibility = "hidden";
    }
}
//查找
var searchta = document.querySelector(".btn-search");
searchta.onclick = function () {
    myItem.push('点击了查找按钮')
    // 弹出信息框
    var sou_acti = document.querySelector(".sou_acti");
    sou_acti.style.visibility = "visible";
    bg.style.visibility = "visible";
    // 取消提交
    var sou_cancel = document.querySelector(".acti-button-s2");
    sou_cancel.onclick = function () {
        myItem.push("点击了查找按钮中的取消按钮")
        sou_acti.style.visibility = "hidden";
        var actimation = sou_acti.querySelectorAll("input");
        for (let i = 0; i < actimation.length; i++) {
            actimation[i].value = null;
        }
        bg.style.visibility = "hidden";
    }
    //提交信息
    var sou_sure = document.querySelector(".acti-button-s1")
    sou_sure.onclick = function () {
        myItem.push("点击了查找按钮中的提交按钮")
        var actimation = sou_acti.querySelectorAll("input");
        console.log(actimation);
        console.log(actimation.length);
        let temp = actimation[0].value;
        console.log(temp);
        if (temp == 1) {
            myItem.push("点击了搜索按钮中的按活动类型搜索")
            var stuno = actimation[1].value;
            let seach_id = stuno;
            var arra_id = new arraay();
            for (var i = 0; i < arra.length; i++) {
                if (arra[i].id == seach_id) {
                    arra_id.push(arra[i]);
                }
            }
            show(cu_page, arra_id);
        }
        else if (temp == 2) {
            myItem.push("点击了搜索按钮中的按活动名称搜索")
            var stuno = actimation[1].value;
            let seach_name = stuno;
            var arra_name = new arraay();
            for (var i = 0; i < arra.length; i++) {
                if (index1(arra[i].name, seach_name) >= 0) {
                    arra_name.push(arra[i]);
                }
            }
            show(cu_page, arra_name);

        }
        else if (temp == 3) {
            myItem.push("点击了搜索按钮中的按活动时间搜索")
            var stuno = actimation[1].value;
            let seach_time = (Number)(stuno);
            var arra_time = new arraay();
            for (var i = 0; i < arra.length; i++) {
                if ((Number)(arra[i].starttime) <= seach_time && (Number)(arra[i].endtime) >= seach_time) {
                    arra_time.push(arra[i]);
                }
            }
            show(cu_page, arra_time);
        }
        else {
            myItem.push("搜索选项输入错误")
            alert("输入错误，请重新输入");

        }
        for (var i = 0; i < actimation.length; i++) {
            actimation[i].value = null;
        }
        sou_acti.style.visibility = "hidden";
        bg.style.visibility = "hidden";
    }
}
//模糊搜索
function index1(orgin, serachString) {
    var index = -1;
    var s_index = 0;
    var move = 0;
    for (var i = 0; i < orgin.length; i++) {
        move++;
        if (orgin.substr(i, 1) == serachString.substr(s_index, 1)) {
            s_index++;
            if (s_index == serachString.length) {
                index = move - serachString.length;
                break;
            }
        } else {
            s_index = 0;
        }
    }
    return index;
}

function change() {
    var changes = document.querySelectorAll(".change");
    var change_acti = document.querySelectorAll("input");
    for (let i = 0; i < changes.length; i++) {
        changes[i].onclick = function () {
            // 设置背景颜色
            bg.style.visibility = "visible";
            //引入原数据
            let x = 0;
            let inf = Object.values(arra[i + cu_page * 10]);
            for (k of inf) {
                change_acti[x].value = k;
                x++;
            }

            //修改数据
            document.querySelector(".change_acti").style.visibility = "visible";;
            document.querySelector(".change_acti-button-1").onclick = function () {
                var stud = new lesson(
                    change_acti[0].value,
                    change_acti[1].value,
                    change_acti[2].value,
                    change_acti[3].value,
                    change_acti[4].value,
                    change_acti[5].value,
                    change_acti[6].value,
                    change_acti[7].value,
                    change_acti[8].value
                )
                arra[i + cu_page * 10] = stud;
                show(cu_page, arra);
                bg.style.visibility = "hidden";
                document.querySelector(".change_acti").style.visibility = "hidden";
                for (let s = 0; s < 9; s++) {
                    change_acti[s].value = "";
                }
            }
            document.querySelector(".change_acti-button-2").onclick = function () {
                document.querySelector(".change_acti").style.visibility = "hidden";
                bg.style.visibility = "hidden";
                for (let s = 0; s < 9; s++) {
                    change_acti[s].value = "";
                }
            }
        }

    }
}
// 查看日志
var dayinfo = document.querySelector(".btn-day")
dayinfo.onclick = function () {
    // 弹出信息框
    var info = document.querySelector(".info_day");
    
    info.style.visibility = "visible";
    bg.style.visibility = "visible";
            let listday = info.querySelector('ul');
          
           
            // input.value = '';
            // let point=0;
            // if(myItem.length>=21)
            // {
            //      point=myItem.length-21;
            // }
    for(let i=0;i<myItem.length;i++)
    {
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        listItem.appendChild(listText);
        listText.textContent = myItem[i];
        listday.appendChild(listItem);
    }
            
            console.log(cu_page);
             var add_sure = document.querySelector(".info-button_day-1")
        add_sure.onclick = function () {
            info.style.visibility = "hidden";
            bg.style.visibility = "hidden";
        }
        // }
}

//翻页--上一页
function Previous() {
    if (cu_page == 0) {
        alert("已经是第一页!")
        return false;
    }
    cu_page--;
    show(cu_page, arra);
}
var pre = document.querySelector(".button-Previous")
pre.onclick = function () {
    myItem.push("点击了上一页按钮")
    Previous()
}

//翻页--下一页
function ne() {
    if (cu_page + 1 >= arra.length / 10) {
        alert("已经是最后一页!")
        return false;
    }
    cu_page++;
    show(cu_page, arra);
}
var next = document.querySelector(".button-nextpage")
next.onclick = function () {
    myItem.push("点击了下一页按钮")
    ne();
}

//删除学生
var btn_delete = document.querySelector(".btn-del");
btn_delete.onclick = function () {
    myItem.push("点击了删除按钮")
    var btn_checkbox = document.querySelectorAll(".last")
    for (var i = btn_checkbox.length - 1; i >= 0; i--) {
        if (btn_checkbox[i].checked == true) {
            arra.splice(i + cu_page * 10, 1);
        }
    }
    if (((cu_page) == arra.length / 10) && cu_page != 0) {
        cu_page--;
        show(cu_page, arra);
    }
    else {
        show(cu_page, arra);
    }
}

// 全选按钮
var btn_checkbox = document.querySelectorAll(".last");
var btn_all = document.querySelector(".check-all")
btn_all.onclick = function () {
    var btn_checkbox = document.querySelectorAll(".last")
    for (var i = 0; i < btn_checkbox.length; i++) {
        btn_checkbox[i].checked = this.checked;
    }
}


// 输入后清除表格
function clear() {
    var lines = table.getElementsByTagName("tr")
    if (lines == undefined) {
        return false;
    }
    for (var i = lines.length - 1; i >= 0; i--) {
        table.deleteRow(i);
    }
}

//定义方法向表格中填入信息
var table = document.querySelector("tbody");
function jump(page, arra4) {
    for (let i = page * 10; i < (page + 1) * 10; i++) {
        if (arra4[i] == undefined) {
            break;
        }
        var line = table.insertRow();
        line.style.background = i % 2 == 0 ? "white" : "#eef1f8";
        line.insertCell().innerHTML = '<input type="checkbox" class="last">';
        line.insertCell().innerHTML = i + 1;
        let inf = Object.values(arra4[i]);
        for (k of inf) {
            line.insertCell().innerHTML = k;
        }

    }
}

//自定义学生信息


//显示页数
function shwow_page() {
    document.querySelector(".showpage").innerHTML = "第 " + (cu_page + 1) + " 页,共 " + arra.length + " 条,每页显示10条";
}

