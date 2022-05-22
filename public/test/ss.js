var bg = document.querySelector(".bg");

//打印信息
var table = document.querySelector("tbody");
//快排函数
function quick_sort( left,right)
{
    console.log(left);
        let i,j,t,temp;
        if(left>right) 
        {
            return;
        }
        temp=arr[left];
        i=left;
        j=right;
        
        while(i!=j)
        {
            while(arr[j]>=temp&&i<j) 
                 j--;
            while(arr[i]<=temp&&i<j) 
                 i++;
            if(i<j) {
                 t=arr[i];arr[i]=arr[j];arr[j]=t;
              }
         }
        
        arr[left]=arr[i];
        arr[i]=temp;
        
        quick_sort(left,i-1);
        quick_sort(i+1,right);
        
    }

function lesson(id, name, address, teacher, elDocument, paDocument, starttime,endtime,testtime) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.teacher = teacher;
    this.elDocument = elDocument;
    this.paDocument = paDocument;
    this.starttime = starttime;
    this.endtime = endtime;
    this.testtime=testtime;
 
   } 
//创建数组存储学生信息
var arr = new Array({
    id:1,
    name:"数据结构",
    address:"S楼S201",
    teacher:"王老师",
    elDocument:"这是数据结构电子资料",
    paDocument:"这是数据结构纸质资料",
    starttime:12,
    endtime:80,
    testtime:18000

},
{
    id:8,
    name:"计算机网络",
    address:"N楼102",
    teacher:"李老师",
    elDocument: "这是计算机网络电子资料",
    paDocument:"这是计算机网络纸质资料",
    starttime:90,
    endtime:120,
    testtime:15000
},
{
    id:12,
    name:"计算机组成原理",
    address:"N楼504",
    teacher:"刘老师",
    elDocument: "这是计算机组成原理电子资料",
    paDocument:"这是计算机组成原理纸质资料",
    starttime:130,
    endtime:160,
    testtime:19000
},
{
    id:10,
    name:"形式语言与自动机",
    address:"实验楼108",
    teacher:"杨老师",
    elDocument: "这是形式语言与自动机电子资料",
    paDocument:"这是形式语言与自动机纸质资料",
    starttime:190,
    endtime:210,
    testtime:20000
},
{
    id:2,
    name:"数据库原理",
    address:"实验楼209",
    teacher:"周老师",
    elDocument: "这是数据库原理电子资料",
    paDocument: "这是数据库原理纸质资料",
    starttime:220,
    endtime:300,
    testtime:21000
},
);
function show(page,arr_temp) {
    clear();
    jump(page,arr_temp);
    // btn_all.checked = false;
    shwow_page();
    //  change();
    // check();
    // alls();
}
//当前页数
var cu_page = 0;
shwow_page();
//显示页面
show(cu_page,arr);
// 添加学生
var add = document.querySelector(".btn-add")
add.onclick = function () {
    // 弹出信息框
    var info = document.querySelector(".info");
    info.style.visibility = "visible";
    bg.style.visibility = "visible";
    // 取消提交
    var add_cancel = document.querySelector(".info-button-2")
    add_cancel.onclick = function () {
        info.style.visibility = "hidden";
        var infomation = info.querySelectorAll("input");
        for (var i = 0; i < infomation.length; i++) {
            infomation[i].value = null;
        }
        bg.style.visibility = "hidden";
    }

        //提交信息
        var add_sure = document.querySelector(".info-button-1")
        add_sure.onclick = function () {
            var infomation = info.querySelectorAll("input");
            console.log(infomation.length);
            var stu = new lesson(
                infomation[0].value,
                infomation[1].value,
                infomation[2].value,
                infomation[3].value,
                infomation[4].value,
                infomation[5].value,
                infomation[6].value,
                infomation[7].value,
                infomation[8].value,
                
            );
            for (var i = 0; i < infomation.length; i++) {
                infomation[i].value = null;
            }
            arr.push(stu);
            console.log(cu_page);
            show(cu_page,arr);
            info.style.visibility = "hidden";
            bg.style.visibility = "hidden";
        }
}


//查找
var search_test = document.querySelector(".btn-test");
search_test.onclick = function () {
    // 弹出信息框
    var search_info = document.querySelector(".search_info");
    search_info.style.visibility = "visible";
    bg.style.visibility = "visible";
    // 取消提交
    var test_cancel = document.querySelector(".info-button-test2");
    test_cancel.onclick = function () {
        search_info.style.visibility = "hidden";
        var infomation = search_info.querySelectorAll("input");
            infomation.value = null;
        bg.style.visibility = "hidden";
    }

        //提交信息
        var test_sure = document.querySelector(".info-button-test1")
        test_sure.onclick = function () {
            var infomation = search_info.querySelectorAll("input");
            console.log(infomation);
            console.log(infomation.length);
            let stu=infomation[0].value;
            console.log(stu);
            
           
            if(stu==1){
                console.log(1);
                for(let i=0;i<arr.length-1;i++)
                {//控制比较轮次，一共 n-1 趟
                    for(let j=0;j<arr.length-1-i;j++)
                    {//控制两个挨着的元素进行比较
                        // console.log(j)
                        if((Number)(arr[j].id) >(Number)(arr[j+1].id) )
                        {
                            let temp = arr[j];
                            arr[j] = arr[j+1];
                            arr[j+1] = temp;
                        }
                    }
                }
            }
            else if(stu==2){
                console.log(2);
                for(let i=0;i<arr.length-1;i++)
                {//控制比较轮次，一共 n-1 趟
                    for(let j=0;j<arr.length-1-i;j++)
                    {//控制两个挨着的元素进行比较
                        // console.log(j)
                        if((Number)(arr[j].starttime) >(Number)(arr[j+1].starttime) )
                        {
                            let temp = arr[j];
                            arr[j] = arr[j+1];
                            arr[j+1] = temp;
                        }
                    }
                }
        
            }
            else if(stu==3){
                console.log(3);
                quick_sort(0,arr.length-1);
            }
            else{
                    alert("请输入正确的选项");
            }
            for (var i = 0; i < infomation.length; i++) {
                infomation[i].value = null;
            }
            show(cu_page,arr);
            search_info.style.visibility = "hidden";
            bg.style.visibility = "hidden";
        }
    }
//排序
var searchta= document.querySelector(".btn-search");
searchta.onclick = function () {
    // 弹出信息框
    var sou_info = document.querySelector(".sou_info");
    sou_info.style.visibility = "visible";
    bg.style.visibility = "visible";
    // 取消提交
    var sou_cancel = document.querySelector(".info-button-s2");
    sou_cancel.onclick = function () {
        sou_info.style.visibility = "hidden";
        var infomation = sou_info.querySelectorAll("input");
        for(let i=0;i<infomation.length;i++)
        {
            infomation[i].value = null;
        }
        bg.style.visibility = "hidden";
    }
        //提交信息
        var sou_sure = document.querySelector(".info-button-s1")
        sou_sure.onclick = function () {
            var infomation = sou_info.querySelectorAll("input");
            console.log(infomation);
            console.log(infomation.length);
            let temp=infomation[0].value;
            console.log(temp);
            if(temp==1)
                {
                    var stuno=infomation[1].value;
                    let seach_id=stuno;
                    var arr_id = new Array();
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].id==seach_id) {
                            arr_id.push(arr[i]);
                        }
                    }
                    show(cu_page,arr_id);
                }
                else if (temp == 2) {
                    var stuno = infomation[1].value;
                    let seach_name = stuno;
                    var arr_name = new Array();
                    for (var i = 0; i < arr.length; i++) {
                        if (index1(arr[i].name, seach_name) >= 0) {
                            arr_name.push(arr[i]);
                        }
                    }
                    show(cu_page, arr_name);
            
                }
                 else if(temp==3)
                {
                    var stuno=infomation[1].value;
                    let seach_time=(Number)(stuno);
                    var arr_time = new Array();
                    for (var i = 0; i < arr.length; i++) {
                        if ((Number)(arr[i].starttime)<=seach_time&&(Number)(arr[i].endtime)>=seach_time) {
                            arr_time.push(arr[i]);
                        }
                    }
                    show(cu_page,arr_time);
                }
                else{
                    alert("输入错误，请重新输入");
                }
            for (var i = 0; i < infomation.length; i++) {
                infomation[i].value = null;
            }
            sou_info.style.visibility = "hidden";
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
//翻页--上一页
function Previous() {
    if (cu_page == 0) {
        alert("已经是第一页!")
        return false;
    }
    cu_page--;
    show(cu_page,arr);
}
var pre = document.querySelector(".button-Previous")
pre.onclick = function () {
    Previous()
}

//翻页--下一页
function ne() {
    if (cu_page + 1 >= arr.length / 10) {
        alert("已经是最后一页!")
        return false;
    }
    cu_page++;
    show(cu_page,arr);
}
var next = document.querySelector(".button-nextpage")
next.onclick = function () {
    ne();
}

//删除学生
var btn_delete = document.querySelector(".btn-del");
btn_delete.onclick = function () {
    var btn_checkbox = document.querySelectorAll(".last")
    for (var i = btn_checkbox.length - 1; i >= 0; i--) {
        if (btn_checkbox[i].checked == true) {
            arr.splice(i + cu_page * 10, 1);
        }
    }
    if (((cu_page) == arr.length / 10) && cu_page != 0) {
        cu_page--;
        show(cu_page,arr);
    }
    else {
        show(cu_page,arr);
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
function jump(page,arr_temp) {
    for (let i = page * 10; i < (page + 1) * 10; i++) {
        if (arr_temp[i] == undefined) {
            break;
        }
        console.log(arr_temp[i]+" "+i);
        // i=arr_temp.length
        var line = table.insertRow();
        line.style.background = i % 2 == 0 ? "white" : "#eef1f8";
        line.insertCell().innerHTML = '<input type="checkbox" class="last">';
        line.insertCell().innerHTML = i + 1;
        let inf = Object.values(arr_temp[i]);
        for (k of inf) {
            line.insertCell().innerHTML = k;
        }
        line.insertCell().innerHTML = ' <input type="file" name="file" value="上传文件" onchange="showPreview(this)" /></a><br><a id="yasuo" href="javascript:void(0)">压缩</a><br><a id="testa" href="javascript:void(0)">上传作业</a>'
        line.insertCell().innerHTML = ' <input type="file" name="file" value="下载文件" onchange="showPreview(this)" /><br><a id="testziliao" href="javascript:void(0)">下载作业</a>'
       
    }
}

//自定义学生信息


//显示页数
function shwow_page() {
    document.querySelector(".showpage").innerHTML = "第 " + (cu_page + 1) + " 页,共 " + arr.length + " 条,每页显示10条";
}
 var arr1 = new Array();
		var temp_str ="0";
		var i = 0;
		function showPreview(source){
			var input = source;
			var reader = new FileReader();
			reader.readAsText(input.files[0]);
			reader.onload = function() {
				if(reader.result) {
			   //显示文件内容
					temp_str = reader.result;
				}
			};
		}
        class Node {
            data;//存放数据(字符本身),比如 'a' => 97, ' '=>32
            weight;//权值，表示字符串出现的次数
            left;//
            right;
            constructor(data, weight) {
                this.data = data;
                this.weight = weight;
            }
            //前序遍历
            preOrder(arr) {
                arr.push(this);
                if (this.left) {
                    this.left.preOrder(arr);
                }
                if (this.right) {
                    this.right.preOrder(arr);
                }
            }
        }
        function getNodes(bytes) {
            //创建一个list
            let list = [];
            //counts 统计每一个byte出现的次数
            let counts = {};
            for (let b of bytes) {
                let count = counts[b];//map还没有这个字符数据
                if (count == null) {
                    counts[b] = 1;
                } else {
                    counts[b]++;
                }
            }
        
            for (const [key, value] of Object.entries(counts)) {
                list.push(new Node(key, value));
            }
            return list;
        }
        //通过list创建赫夫曼树
        function createHuffmanTree(nodes) {
            const compareFun = function (a, b) {
                return a.weight - b.weight
            };
            while (nodes.length > 1) {
                //排序,从小到大
                nodes.sort(compareFun);
                //取出第一颗最小的二叉树
                let leftNode = nodes.shift(), rightNode = nodes.shift();
                //创建一个新的二叉树，它的根节点，没有data，只有权值
                let parent = new Node(null, leftNode.weight + rightNode.weight);
                parent.left = leftNode;
                parent.right = rightNode;
        
                //将新的二叉树，加入到nodes
                nodes.unshift(parent);
            }
            //nodes最后的节点，就是根节点
            return nodes.shift();
        }
        //生成赫夫曼树对应的赫夫曼编码表
        function getCodes2(root) {
            if (root == null) {
                return null;
            }
            //生成赫夫曼树对应的赫夫曼编码表
            //思路
            //1.将赫夫曼编码表存放在map里面
            //2.在生成赫夫曼编码表时，需要拼接路径，定义一个数组string,存储某个叶子节点的路径
            let huffmanCodes = {};
            let string = [];
            function getCodes(node, code, string) {
                let string2 = [...string];
                //将code加入到string中
                string2.push(code);
                if (node != null) { //如果node == null不处理
                    //判断当前node是叶子节点还是非叶子节点
                    if (node.data == null) {//非叶子节点
                        //递归处理
                        //向左递归
                        getCodes(node.left, '0', string2);
                        //向右递归
                        getCodes(node.right, '1', string2)
                    } else {//说明是一个叶子节点
                        //就表示找到了某个叶子节点的最后
                        huffmanCodes[node.data] = string2.join('');
                    }
                }
            }
            getCodes(root, "", string);
            return huffmanCodes;
        }
        
        //编写一个方法，将字符串对应的bytes数组，通过生成的赫夫曼编码表，返回一个赫夫曼编码压缩后的byte数组
        /**
         * 
         * @param {原始的字符串对应的bytes数组} bytes 
         * @param {生成的赫夫曼编码表} huffmanCodes 
         * @return 返回的是字符串对应的一个byte数组
         */
        function zip(bytes, huffmanCodes) {
            //1.利用huffmanCodes将bytes转成赫夫曼编码对应的字符串
            let string = [];
            //遍历数组
            for (let b of bytes) {
                string.push(huffmanCodes[b]);
            }
            return string;
        }
        function huffstringToByte(string) {
            //计算赫夫曼编码字符串的长度
            string = string.join('');
            let len = Math.ceil(string.length / 8);
            //创建存储压缩后的byte数组
            let huffmanCodeByte = new Array(len + 1);
            let index = 0, strByte;//记录是第几个byte
            for (let i = 0; i < string.length; i += 8) {
                strByte = string.substring(i, i + 8);
                //将strByte转成一个byte，放入huffmanCodeByte
                huffmanCodeByte[index] = parseInt(strByte, 2);
                index++;
            }
            //记录最后一位二进制码的长度，因为，比如最后一位二进制strByte为00101时，
            //parseInt(strByte, 2)后等于5，前面的两个00已经丢失，所以必须记录长度，以便解码时补足前面的0
            huffmanCodeByte[index] = strByte.length;
            return huffmanCodeByte
        }
        //使用一个方法，封装前面的方法，便于调用
        /**
         * 
         * @param {原始的字符串对应的字节数组} bytes
         * @returns 是经过赫夫曼编码处理后，压缩后的字节数组
         *  
         */
        function huffmanZip(bytes) {
            //1.生成节点数组
            let nodes = getNodes(bytes);
            //2.根据节点数组创建赫夫曼树
            let root = createHuffmanTree(nodes);
            //3.根据赫夫曼树生成赫夫曼编码
            let hufumanCodes = getCodes2(root);
            //4.根据生成的赫夫曼编码生成压缩后的赫夫曼编码字节数组
            let hufumanStrArr = zip(bytes, hufumanCodes);
            let hufumanByteArr = huffstringToByte(hufumanStrArr);
        
            return hufumanByteArr;
        }
        //完成数据的解压
        //思路
        //1.将huffmanBytesArr先转成赫夫曼编码对应的二进制字符串
        //2.将赫夫曼编码对应的二进制的字符串转成赫夫曼编码字符串
        
        /**
         * 
         * @param {表示是否需要补高位，如果是true，表示需要，如果是false，表示不需要，如果是最后一个字节不需要补高位} flag 
         * @param {传入的byte} byte 
         * @returns 是byte对应的二进制字符串
         */
        function heffmanByteToString(flag, byte) {
            //如果是
            if (flag) {
                byte |= 256;
            }
            let str = Number(byte).toString(2)
            if (flag) {
                return str.substring(str.length - 8);
            } else {
                return str;
            }
        }
        //编写一份方法，完成对压缩数据的解码
        /**
         * 
         * @param {赫夫曼编码表} huffmanCodes 
         * @param {赫夫曼编码得到的二进制数组} huffmanBytes 
         */
        function decode(huffmanCodes, huffmanBytes) {
            //1.先得到二进制字符串 形式11001111111011......
            let heffmanStrArr = [];
            for (let i = 0; i < huffmanBytes.length - 1; i++) {
                //判断是不是最后一个字节
                let flag = (i !== huffmanBytes.length - 2);
                heffmanStrArr.push(heffmanByteToString(flag, huffmanBytes[i]))
            }
            //最后一位记录的是最后一位二进制字符串的长度，该长度主要用于补足最后一位丢失的0,所以要单独处理，
            let lastByteStr = heffmanStrArr[heffmanStrArr.length - 1];
            let lastByteLength = huffmanBytes[huffmanBytes.length - 1];
            lastByteStr = '00000000'.substring(8 - (lastByteLength - lastByteStr.length)) + lastByteStr;
            heffmanStrArr[heffmanStrArr.length - 1] = lastByteStr;
        
            //把赫夫曼编码表进行调换
            let map = {};
            for (const [key, value] of Object.entries(huffmanCodes)) {
                map[value] = key;
            }
        
            let heffmanStr = heffmanStrArr.join('');
            let list = [];
            //
            for (let i = 0; i < heffmanStr.length;) {
                let count = 1;
                let flag = true;
                let b = null;
                while (flag) {
                    //取出一个1或0
                    //i不动，count移动，直到匹配到一个字符
                    let key = heffmanStr.substring(i, i + count);
                    b = map[key]
                    if (!b) {//没有匹配到
                        count++;
                    } else {
                        //匹配到
                        flag = false;
                    }
                }
                list.push(parseInt(b));
                i += count;
            }
            //当for循环结束后，list中就存放了所有的字符
            return list;
        }
         //js byte[] 和string 相互转换 UTF-8
         function stringToByte(str) {
            var bytes = new Array();
            var len, c;
            len = str.length;
            for (var i = 0; i < len; i++) {
                c = str.charCodeAt(i);
                if (c >= 0x010000 && c <= 0x10FFFF) {
                    bytes.push(((c >> 18) & 0x07) | 0xF0);
                    bytes.push(((c >> 12) & 0x3F) | 0x80);
                    bytes.push(((c >> 6) & 0x3F) | 0x80);
                    bytes.push((c & 0x3F) | 0x80);
                } else if (c >= 0x000800 && c <= 0x00FFFF) {
                    bytes.push(((c >> 12) & 0x0F) | 0xE0);
                    bytes.push(((c >> 6) & 0x3F) | 0x80);
                    bytes.push((c & 0x3F) | 0x80);
                } else if (c >= 0x000080 && c <= 0x0007FF) {
                    bytes.push(((c >> 6) & 0x1F) | 0xC0);
                    bytes.push((c & 0x3F) | 0x80);
                } else {
                    bytes.push(c & 0xFF);
                }
            }
            return bytes;
        }
        function byteToString(arr) {
            if (typeof arr === 'string') {
                return arr;
            }
            var str = '',
                _arr = arr;
            for (var i = 0; i < _arr.length; i++) {
                var one = _arr[i].toString(2),
                    v = one.match(/^1+?(?=0)/);
                if (v && one.length == 8) {
                    var bytesLength = v[0].length;
                    var store = _arr[i].toString(2).slice(7 - bytesLength);
                    for (var st = 1; st < bytesLength; st++) {
                        store += _arr[st + i].toString(2).slice(2);
                    }
                    str += String.fromCharCode(parseInt(store, 2));
                    i += bytesLength - 1;
                } else {
                    str += String.fromCharCode(_arr[i]);
                }
            }
            return str;
        }
        let zipcontent;
        let yasuo=document.getElementById("yasuo");
 yasuo.onclick=function(){
        let content = temp_str;
        let bytes = stringToByte(content);
         let nodes = getNodes(bytes);
         let root = createHuffmanTree(nodes);
        console.log('根节点：', root);
        let list = [];
        root.preOrder(list);
        console.log('前序遍历：', list);
        //测试
          hufumanCodes = getCodes2(root);
        console.log('生成的赫夫曼编码表：', hufumanCodes);
        //生成赫夫曼编码字符串
        let hufumanStrArr = zip(bytes, hufumanCodes);
        console.log('赫夫曼编码字符串：', hufumanStrArr.join(''))
        console.log('赫夫曼编码字符串的长度：', hufumanStrArr.join('').length)//应该是133
        
        //将生成赫夫曼编码字符串转成字节数组, 要发送的数组
        let hufumanByteArr = huffstringToByte(hufumanStrArr);//长度为17
        console.log('压缩后的字节数组', hufumanByteArr);
        console.log('压缩率：', (bytes.length - hufumanByteArr.length) / bytes.length * 100 + '%');
        console.log('压缩后的字符串', byteToString(hufumanByteArr));
        console.log('压缩后的字符串长度', byteToString(hufumanByteArr).length);
        //测试封装后的方法
        console.log('压缩后的字节数组', huffmanZip(bytes));
        //测试解码
        console.log('解码后的字符串hhhh', byteToString(decode(hufumanCodes, hufumanByteArr)));
        console.log('原字符数组：', bytes);
        console.log('解码后字符串：', byteToString(bytes));
        console.log('原先的字符串长度：', byteToString(bytes).length);
         zipcontent=byteToString(hufumanByteArr);
    }
        //下载压缩文件
        let tagObj = document.getElementById('testa')
        tagObj.onclick  = function(e) {
            console.log(zipcontent);
           
            const fileName = '新建文件.zip';
            const str =zipcontent;
            const content = str
            const blob = new Blob([content], {
                type: 'application/text'
            }) // 构造一个blob对象来处理数据
            // 对于<a>标签，只有 Firefox 和 Chrome（内核） 支持 download 属性
            // IE10以上支持blob但是依然不支持download
            if ('download' in document.createElement('a')) { // 支持a标签download的浏览器
                const link = document.createElement('a') // 创建a标签
                link.download = fileName // a标签添加属性
                link.style.display = 'none'
                link.href = URL.createObjectURL(blob)
                document.body.appendChild(link)
                link.click() // 执行下载
                URL.revokeObjectURL(link.href) // 释放url
                document.body.removeChild(link) // 释放标签
            } else { // 其他浏览器
                navigator.msSaveBlob(blob, fileName)
            }
        }

        //下载未被压缩的资料
        let tagObjziliao = document.getElementById('testziliao')
        tagObjziliao.onclick  = function(e) {
            console.log(temp_str);
            
            const fileName = "新建文件.txt";
            const str =temp_str;
            const content = str
            const blob = new Blob([content], {
                type: 'application/text'
            }) // 构造一个blob对象来处理数据
            // 对于<a>标签，只有 Firefox 和 Chrome（内核） 支持 download 属性
            // IE10以上支持blob但是依然不支持download
            if ('download' in document.createElement('a')) { // 支持a标签download的浏览器
                const link = document.createElement('a') // 创建a标签
                link.download = fileName // a标签添加属性
                link.style.display = 'none'
                link.href = URL.createObjectURL(blob)
                document.body.appendChild(link)
                link.click() // 执行下载
                URL.revokeObjectURL(link.href) // 释放url
                document.body.removeChild(link) // 释放标签
            } else { // 其他浏览器
                navigator.msSaveBlob(blob, fileName)
            }
        }
    