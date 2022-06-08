var bg = document.querySelector(".bg");

//打印信息
var table = document.querySelector("tbody");
//记录已有作业的哈希值，用于解压作业
let has_homework=[""];
//用于记录日志
let myItem = new Array;
myItem=[];

    //读入到哈希表中的数据
    let datahub=new Array(
        {
            id:1,
            name:"数据结构",
            elDocument:"这是数据结构电子资料",
            paDocument:"这是数据结构纸质资料",
            homework:new Array,
            num:0,
            todoContent:["本次作业需要完成第二章栈的练习题" ,"本次作业需要完成第三章队列的练习题" ,"本次作业需要完成第四章二叉树的练习题"],
            todoTime:"统一期末提交,时间为2022-6-10",
            huffmanByteArr_hub:new  Array,
            huffmancode_hub:new Array,
        },
        {
         id:8,
         name:"计算机网络",
         elDocument: "这是计算机网络电子资料",
         paDocument:"这是计算机网络纸质资料",
         homework:new Array,
         num:0,
         todoContent:["本次作业需要完成第二章计网的练习题","本次作业需要完成第三章计网的练习题","本次作业需要完成第四章计网的练习题"],
         todoTime:"2022-6-10",
     },
     {
         id:12,
         name:"计算机组成原理",
         elDocument: "这是计算机组成原理电子资料",
         paDocument:"这是计算机组成原理纸质资料",
         homework:new Array,
         num:0,
         todoContent:["本次作业需要完成第二章计组的练习题","本次作业需要完成第三章计组的练习题","本次作业需要完成第四章计组的练习题"],
         todoTime:"2022-6-10",
     },
     {
         id:10,
         name:"形式语言与自动机",
      
         elDocument: "这是形式语言与自动机电子资料",
         paDocument:"这是形式语言与自动机纸质资料",
         homework:new Array,
         num:0,
         todoContent:["本次作业需要完成第二章自动机的练习题","本次作业需要完成第三章自动机的练习题","本次作业需要完成第四章自动机的练习题"],
         todoTime:"2022-6-10",
     },
     {
         id:2,
         name:"数据库原理",
         
         elDocument: "这是数据库原理电子资料",
         paDocument: "这是数据库原理纸质资料",
         homework:new Array,
         num:0,
         todoContent:["本次作业需要完成第二章数据库的练习题","本次作业需要完成第三章数据库的练习题","本次作业需要完成第四章数据库的练习题"],
         todoTime:"2022-6-10",
     },
     {
        id:11,
        name:"毛泽东思想概论",
        address:"S2楼",
        teacher:"谢老师",
        elDocument: "这是毛泽东思想概论电子资料",
        paDocument: "这是毛泽东思想概论纸质资料",
        homework:new Array,
        num:0,
        todoContent:["本次作业需要完成第二章毛泽东思想的练习题","本次作业需要完成第三章毛泽东思想的练习题","本次作业需要完成第四章毛泽东思想的练习题"],
        todoTime:"2022-6-20",
    },
    {
        id:25,
        name:"JAVA程序设计",
        address:"S1楼",
        teacher:"李老师",
        elDocument: " 这是JAVA程序设计电子资料",
        paDocument: " 这是JAVA程序设计纸质资料",
        homework:new Array,
        num:0,
        todoContent:["本次作业需要完成第二章JAVA的练习题","本次作业需要完成第三章JAVA的练习题","本次作业需要完成第四章JAVA的练习题"],
        todoTime:"2022-6-15",
    },
    {
        id:4,
        name:"python程序设计",
        address:"N楼",
        teacher:"周老师",
        elDocument: " 这是python程序设计电子资料",
        paDocument: " 这是python程序设计纸质资料",
        homework:new Array,
        num:0,
        todoContent:["本次作业需要完成第二章python的练习题","本次作业需要完成第三章python的练习题","本次作业需要完成第四章python的练习题"],
        todoTime:"2022-6-10",
    },
    {
        id:19,
        name:"军事理论",
        address:"学生活动中心",
        teacher:"周老师",
        elDocument: "这是军事理论电子资料",
        paDocument: "这是军事理论纸质资料",
        homework:new Array,
        num:0,
        todoContent:["本次作业需要完成第二章军事理论的练习题","本次作业需要完成第三章军事理论的练习题","本次作业需要完成第四章军事理论的练习题"],
        todoTime:"2022-6-10",
    },
    {
        id:20,
        name:"C++程序设计",
        address:"S2楼",
        teacher:"周老师",
        elDocument: " 这是C++程序设计电子资料",
        paDocument: " 这是C++程序设计纸质资料",
        homework:new Array,
        num:0,
        todoContent:["本次作业需要完成第二章C++的练习题","本次作业需要完成第三章C++的练习题","本次作业需要完成第四章C++的练习题"],
        todoTime:"2022-6-1",
    },
    {
        id:21,
        name:"概率论",
        address:"S楼",
        teacher:"周老师",
        elDocument: " 这是概率论电子资料",
        paDocument: " 这是概率论纸质资料",
        homework:new Array,
        num:0,
        todoContent:["本次作业需要完成第二章概率论的练习题","本次作业需要完成第三章概率论的练习题","本次作业需要完成第四章概率论的练习题"],
        todoTime:"2022-6-11",
    },
    {
        id:27,
        name:"离散数学",
        address:"N楼",
        teacher:"周老师",
        elDocument: " 这是离散数学电子资料",
        paDocument: " 这是离散数学纸质资料",
        homework:new Array,
        num:0,
        todoContent:["本次作业需要完成第二章离散数学的练习题","本次作业需要完成第三章离散数学的练习题","本次作业需要完成第四章离散数学的练习题"],
        todoTime:"2022-6-13",
    },
 
    )
//课程
function lesson(id, name, address, teacher, elDocument, paDocument, starttime,endtime,startday,testtime,testaddress,qun) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.teacher = teacher;
    this.elDocument = elDocument;
    this.paDocument = paDocument;
    this.starttime = starttime;
    this.endtime = endtime;
    this.startday=startday;
    this.testtime=testtime;
    this.testaddress=testaddress;
    this.qun=qun;
 
   } 

 //哈希表

   //采用链地址法来实现哈希表，每个单元存储的是数组
   function HashTable(){

    //属性
    this.storage=[];//放置桶bucket
    this.count=0;//已包含数据个数
    this.limit=19;
    

    //方法

    //哈希函数
    HashTable.prototype.hashFunc=function(str,size){
        //1.定义hashCode
        var hashCode=0;
        //2.霍纳算法，计算hashCode
        for(var i=0;i<str.length;i++){
            hashCode=37*hashCode+str.charCodeAt(i);
        }

        //3.取余
        hashCode=hashCode%size;

        return hashCode;
    }

    
    //插入或修改操作
    HashTable.prototype.put=function(key,value){
        //1.根据key求index值
        var index=this.hashFunc(key,this.limit);

        var bucket=this.storage[index];
        //2.判断在index这个位置有没有bucket
        if(bucket==null){
            //3.没有就在index位置创建一个bucket，
            var bucket=[];
            this.storage[index]=bucket;
        }
        //4.判断是否为修改数据
        for(var i=0;i<bucket.length;i++){
            var tuple=bucket[i];
            if(tuple[0]==key){
                tuple[1]=value;
                return true;
            }
        }
        //5.遍历完bucket，发现不是修改，那么把key和value组成的数组插入到bucket末尾
        bucket.push([key,value]);
        //6.增加数据个数
        this.count+=1;

        //判断是否要扩容,保证每次扩容后的容量恒为质数
        if(this.count>this.limit*0.75){
            var newSize=this.limit*2;
            newSize=this.GetPrime(newSize);
            this.resize(newSize);
        }
    }

   //获取操作
   HashTable.prototype.get=function(key){
       //1.获取对应的index
       var index=this.hashFunc(key,this.limit);
       //2.根据index查看对应位置的bucket存不存在
       var bucket=this.storage[index];
       if(bucket==null){
           //如果不存在bucket，直接返回null
           return null;
       }
       //如果存在bucket，遍历bucket，直到找到key
       for(var i=0;i<bucket.length;i++){
           var tuple=bucket[i];
           if(tuple[0]==key){
               return tuple[1];
           }
       }
       //遍历完都没找到，返回null
       return null;
   }
   


   //删除操作
   HashTable.prototype.remove=function(key){
       //1.获取对应的index
       var index=this.hashFunc(key,this.limit);
       //2.根据index查看对应位置的bucket存不存在
       var bucket=this.storage[index];
       if(bucket==null){
           //如果不存在bucket，直接返回null
           return null;
       }
       //3.如果存在bucket，遍历bucket，直到找到key然后删除对应的数组
       for(var i=0;i<bucket.length;i++){
           var tuple=bucket[i];
           if(tuple[0]==key){
               bucket.splice(i,1);
               this.count-=1;
               //判断是否要缩小容量,保证容量恒为质数
               if(this.limit>7&&this.count<this.limit*0.25){
                   var newSize=Math.floor(this.limit/2);
                   newSize=this.GetPrime(newSize);
                   this.resize(newSize);
               }
               return tuple[1];
           }
       }
         
        //4.遍历完都没找到，返回null
        return null;
   }

   //判断哈希表是不是空
   HashTable.prototype.IsEmpty=function(){
       return this.count?false:true;
   }


   //返回哈希表里的数据个数
   HashTable.prototype.Size=function(){
       return this.count;
   }



   //哈希表的扩容
   HashTable.prototype.resize=function(newLimit){
       //1.保存旧的数组内容
       var oldStorage=this.storage;

       //2.重置所有属性
       this.storage=[];
       this.count=0;
       this.limit=newLimit;

       //3.遍历oldStorage所有的bucket
       for(var i=0;i<oldStorage.length;i++){
          var bucket=oldStorage[i];
         //4.如果bucket为null，则跳过本轮循环
         if(bucket==null){
             continue;
         }
         //5.如果不为空，则遍历bucket
         for(var j=0;j<bucket.length;j++){
             var tuple=bucket[j];
             this.put(tuple[0],tuple[1]);
         }
       }
   }


   //判断一个数是不是质数
   HashTable.prototype.IsPrime=function(num){
       var n=parseInt(Math.sqrt(num));
       for(var i=2;i<=n;i++){
           if(n%i==0){
               return false;
           }
       }
       return true;
   }



   //获取最近的质数
   HashTable.prototype.GetPrime=function(num){
       while(this.IsPrime(num)==false){
           num+=1;
       }
       return num;
   }


   }
//创建数组存储课程信息
var arr = new Array({
    id:1,
    name:"数据结构",
    address:"S楼",
    teacher:"王老师",
    elDocument:"",
    paDocument:"",
    starttime:"10",
    endtime:"11",
    startday:"1",
    testtime:"16周星期一上午10点",
    testaddress:" 腾讯会议：123456789",
    qun:"123456789",
},
{
    id:8,
    name:"计算机网络",
    address:"N楼",
    teacher:"李老师",
    elDocument: "",
    paDocument:"",
    starttime:"8",
    endtime:"9",
    startday:"1",
    testtime:" 16周星期一下午2点",
    testaddress:" 腾讯会议：223456789",
    qun:"223456789",
},
{
    id:12,
    name:"计算机组成原理",
    address:"N楼",
    teacher:"刘老师",
    elDocument: "",
    paDocument:"",
    starttime:"13",
    endtime:"15",
    startday:"1",
    testtime:" 16周星期二下午5点",
    testaddress:" 腾讯会议：323456789",
    qun:"323456789",
    
},
{
    id:10,
    name:"形式语言与自动机",
    address:"S1楼",
    teacher:"杨老师",
    elDocument: "",
    paDocument:"",
    starttime:"16",
    endtime:"18",
    startday:"1",
    testtime:" 16周星期三下午5点",
    testaddress:" 腾讯会议：423456789",
    qun:"423456789",

},
{
    id:2,
    name:"数据库原理",
    address:"S2楼",
    teacher:"周老师",
    elDocument: "",
    paDocument: "",
    starttime:"8",
    endtime:"10",
    startday:"2",
    testtime:" 16周星期三上午10点",
    testaddress:" 腾讯会议：523456789",
    qun:"523456789",

},
{
    id:11,
    name:"毛泽东思想概论",
    address:"S2楼",
    teacher:"谢老师",
    elDocument: "",
    paDocument: "",
    starttime:"14",
    endtime:"15",
    startday:"2",
    testtime:" 16周星期四上午10点",
    testaddress:" 腾讯会议：623456789",
    qun:"623456789",
},
{
    id:25,
    name:"JAVA程序设计",
    address:"S1楼",
    teacher:"李老师",
    elDocument: "",
    paDocument: "",
    starttime:"10",
    endtime:"11",
    startday:"3",
    testtime:" 16周星期五上午10点",
    testaddress:" 腾讯会议：723456789",
    qun:"723456789",
},
{
    id:4,
    name:"python程序设计",
    address:"N楼",
    teacher:"周老师",
    elDocument: "",
    paDocument: "",
    starttime:"10",
    endtime:"12",
    startday:"4",
    testtime:" 16周星期五上午8点",
    testaddress:" 腾讯会议：823456789",
    qun:"823456789",
},
{
    id:19,
    name:"军事理论",
    address:"学生活动中心",
    teacher:"周老师",
    elDocument: "",
    paDocument: "",
    starttime:"14",
    endtime:"15",
    startday:"4",
    testtime:" 16周星期五上午9点",
    testaddress:" 腾讯会议：923456789",
    qun:"923456789",
},
{
    id:20,
    name:"C++程序设计",
    address:"S2楼",
    teacher:"周老师",
    elDocument: "",
    paDocument: "",
    starttime:"16",
    endtime:"17",
    startday:"4",
    testtime:" 16周星期六上午8点",
    testaddress:" 腾讯会议：923456781",
    qun:"823456781",
},
{
    id:21,
    name:"概率论",
    address:"S楼",
    teacher:"周老师",
    elDocument: "",
    paDocument: "",
    starttime:"13",
    endtime:"14",
    startday:"5",
    testtime:" 16周星期五下午3点",
    testaddress:" 腾讯会议：823456788",
    qun:"823456788",
},
{
    id:27,
    name:"离散数学",
    address:"N楼",
    teacher:"周老师",
    elDocument: "",
    paDocument: "",
    starttime:"16",
    endtime:"17",
    startday:"5",
    testtime:" 16周星期五下午5点",
    testaddress:" 腾讯会议：823456748",
    qun:"823456748",
},
);

   //创建哈希表
   var hashTable_data=new HashTable();
   for(var i=0;i<datahub.length;i++){
    hashTable_data.put(datahub[i].name,datahub[i]);
   }


//计算字符串的哈希值，用来比较文件是否相同，用于文件查重，哈希查重
   var I64BIT_TABLE =
 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'.split('');
 function ca_hash(input){
    var hash = 5381;
    var i = input.length - 1;
    
    if(typeof input == 'string'){
     for (; i > -1; i--)
      hash += (hash << 5) + input.charCodeAt(i);
    }
    else{
     for (; i > -1; i--)
      hash += (hash << 5) + input[i];
    }
    var value = hash & 0x7FFFFFFF;
    
    var retValue = '';
    do{
     retValue += I64BIT_TABLE[value & 0x3F];
    }
    while(value >>= 6);
    
    return retValue;
   }


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
// 添加课程
var add = document.querySelector(".btn-add")
add.onclick = function () {
    myItem.push("点击了添加按钮");
    // 弹出信息框
    var info = document.querySelector(".info");
    info.style.visibility = "visible";
    bg.style.visibility = "visible";
    // 取消提交
    var add_cancel = document.querySelector(".info-button-2")
    add_cancel.onclick = function () {
        myItem.push("点击了添加按钮中的取消按钮")
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
            myItem.push("点击了添加按钮中的提交按钮")
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
                infomation[9].value,
                infomation[10].value,
                infomation[11].value,
                
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


//刷新页面
var retable = document.querySelector(".btn-re");
retable.onclick = function () {
    myItem.push("点击了刷新按钮")
    show(cu_page,arr);
}
//快排函数
function quick_sort( left,right)
{
    console.log(left);
    
        let i,j,t,temp,tempnumber;
        if(left>right) 
        {
            return;
        }
        tempnumber=(Number)(arr[left].endtime)-(Number)(arr[left].starttime);
        temp=arr[left];
        i=left;
        j=right;
        
        while(i!=j)
        {
            while(((Number)(arr[j].endtime)-(Number)(arr[j].starttime))>=tempnumber&&i<j) 
                 j--;
            while(((Number)(arr[i].endtime)-(Number)(arr[i].starttime))<=tempnumber&&i<j) 
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
    /**
 * 基数排序适用于：
 *  (1)数据范围较小，建议在小于1000
 *  (2)每个数值都要大于等于0
 * @author xiazdong
 * @param  arr 待排序数组
 * @param  maxDigit 最大位数
 */
//LSD Radix Sort



function radixSort(arr, maxDigit) {
    var mod = 10;
    var dev = 1;
    var counter = [];
    
    for (var i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(var j = 0; j < arr.length; j++) {
            var bucket = parseInt((arr[j].id % mod) / dev);
            if(counter[bucket]== null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        var pos = 0;
        for(var j = 0; j < counter.length; j++) {
            var value = null;
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
          }
        }
    }
    
    return arr;
}




//排序按钮
var search_test = document.querySelector(".btn-test");
search_test.onclick = function () {
    myItem.push("点击了排序按钮")
    // 弹出信息框
    var search_info = document.querySelector(".search_info");
    search_info.style.visibility = "visible";
    bg.style.visibility = "visible";
    // 取消提交
    var test_cancel = document.querySelector(".info-button-test2");
    test_cancel.onclick = function () {
        myItem.push("点击了排序按钮中的取消按钮")
        search_info.style.visibility = "hidden";
        var infomation = search_info.querySelectorAll("input");
            infomation.value = null;
        bg.style.visibility = "hidden";
    }

        //提交信息
        var test_sure = document.querySelector(".info-button-test1")
        test_sure.onclick = function () {
            myItem.push("点击了排序按钮中的提交按钮")
            var infomation = search_info.querySelectorAll("input");
            console.log(infomation);
            console.log(infomation.length);
            let stu=infomation[0].value;
            console.log(stu);
            
           
            if(stu==1){
                myItem.push("点击了排序按钮中的按课程编号排序")
                // 基数排序
                radixSort(arr,2); 
            }
            else if(stu==2){
                myItem.push("点击了排序按钮中的按课程开始时间排序")
              //升级后的选择
                let lastExchangeIndex = 0;
               //无序数列的边界，每次比较只需要比到这里为止
                let sortBorder = arr.length - 1;
                for(let i=0;i<arr.length-1;i++)
                {//控制比较轮次，一共 n-1 趟
                    let isSorted  = true;//有序标记，每一轮的初始是true
                    for(let j=0;j<sortBorder;j++)
                    {//控制两个挨着的元素进行比较
                        // console.log(j)
                        if ((Number)(arr[j].startday) > (Number)(arr[j + 1].startday)) {
                            isSorted=false;
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                            lastExchangeIndex = j;
                        }
    
                        if ((Number)(arr[j].startday) == (Number)(arr[j + 1].startday) && (Number)(arr[j].starttime) > (Number)(arr[j + 1].starttime)) {
                            isSorted=false;
                            let temp = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = temp;
                            lastExchangeIndex = j;
                        }
                    }
                    sortBorder = lastExchangeIndex;
                    if(isSorted)
                    break;
                }
        
            }
            else if(stu==3){
                myItem.push("点击了排序按钮中的按课程持续时间排序")
               
                //快排
                quick_sort(0,arr.length-1);
            }
            else{
                myItem.push("排序选项输入错误");
                   //程序的健壮性，一定要写
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

//查找
var searchta= document.querySelector(".btn-search");
searchta.onclick = function () {
    myItem.push("点击了查找按钮")
    // 弹出信息框
    var sou_info = document.querySelector(".sou_info");
    sou_info.style.visibility = "visible";
    bg.style.visibility = "visible";
    // 取消提交
    var sou_cancel = document.querySelector(".info-button-s2");
    sou_cancel.onclick = function () {
        myItem.push("点击了查找按钮中的取消按钮")
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
            myItem.push("点击了查找按钮中的提交按钮")
            var infomation = sou_info.querySelectorAll("input");
            console.log(infomation);
            console.log(infomation.length);
            let temp=infomation[0].value;
            console.log(temp);
            if(temp==1)
                {
                    myItem.push("点击了查找按钮中的按课程编号查找")
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
                    myItem.push("点击了查找按钮中的按课程名称查找")
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
                    myItem.push("点击了查找按钮中的按课程所在时间点查找")
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
                    myItem.push("查找选项中输入错误")
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


// 下载电子资料
var downinfo = document.querySelector(".btn-down")
downinfo.onclick = function () {
    myItem.push("点击了下载电子资料按钮")
    // 弹出信息框
    var info = document.querySelector(".info_down");
    info.style.visibility = "visible";
    bg.style.visibility = "visible";
    // 取消提交
    var add_cancel = document.querySelector(".info-button_down-2")
    add_cancel.onclick = function () {
        myItem.push("点击了下载电子资料按钮中的取消下载")
        info.style.visibility = "hidden";
        var infomation = info.querySelectorAll("input");
        for (var i = 0; i < infomation.length; i++) {
            infomation[i].value = null;
        }
        bg.style.visibility = "hidden";
    }

        //提交信息
        var add_sure = document.querySelector(".info-button_down-1")
        add_sure.onclick = function () {
            myItem.push("点击了下载电子资料按钮中的开始下载")
            var infomation = info.querySelectorAll("input");
            let cnt=0;//未找到
            var stuno = infomation[0].value;
                    let temp1;
                    let k;
                    //哈希查找
                    temp1=hashTable_data.get(stuno);

                    for( k=0;k<arr.length;k++)
                    {
                        if(arr[k].name==stuno)
                        {
                            cnt=1;
                            break;    
                        }
                    }
                    console.log(temp1)
                    if(cnt==1)
                    {
                        arr[k].elDocument=temp1.elDocument;
                        show(cu_page, arr);
                    }
            for (var i = 0; i < infomation.length; i++) {
                infomation[i].value = null;
            }
            console.log(cu_page);
            info.style.visibility = "hidden";
            bg.style.visibility = "hidden";
        }
}

//提交作业*****
var uphomework = document.querySelector(".btn-up");
uphomework.onclick = function () {
    myItem.push("点击了提交作业按钮")
    // 弹出信息框
    var search_info = document.querySelector(".info_up");
    search_info.style.visibility = "visible";
    bg.style.visibility = "visible";
    // 取消提交
    var test_cancel = document.querySelector(".info-button_up-2");
    test_cancel.onclick = function () {
        myItem.push("点击了提交作业按钮中的取消提交按钮")
        search_info.style.visibility = "hidden";
        var infomation = search_info.querySelectorAll("input");
        for(let i=0;i<infomation.length;i++)
        {
            infomation.value = null;
        }
            
        bg.style.visibility = "hidden";
    }

        //提交信息
        var test_sure = document.querySelector(".info-button_up-1")
        test_sure.onclick = function () {
            myItem.push("点击了提交作业按钮中的提交按钮")
            let cnt=1;
            var infomation = search_info.querySelectorAll("input");
            var stuno = infomation[0].value;
                    let temp=hashTable_data.get(stuno);
                    let temp1=(Number)(infomation[2].value);
                    if(temp==null)
                    {
                        alert("该课程不存在，请重新输入");
                    }
                    if(infomation[1].value==""||infomation[2].value=="")
                    {
                        alert("输入为空或者未输入第几次作业");
                    }  
                    
                    else{
                        myItem.push("提交作业成功")
                        let ppp=0;
                        let temp2=ca_hash(infomation[1].value);

                        //哈希查重
                        for(let h=0;h<has_homework.length;h++)
                        {
                            if(temp2==has_homework[h])
                            {
                                ppp=1;
                                alert("提交作业重复")
                            }
                        }

                        if(ppp==0)
                        {
                            has_homework.push(temp2);
                            alert("提交成功，"+temp.name+"第"+temp1+"次作业，提交文件哈希值为"+temp2);
                            //哈夫曼压缩
                            let yasuocontent= yasuowenjian(infomation[1].value,temp,temp1)
                            temp.homework[temp1-1]=yasuocontent;
                            console.log(has_homework);
                        //     alert(temp1-1)
                        // alert('解码后的字符串'+byteToString(decode(temp.huffmancode_hub[temp1-1], temp.huffmanByteArr_hub[temp1-1])));
                        }
                        
                      
                    }
                  
                    show(cu_page, arr);
           
            for (var i = 0; i < infomation.length; i++) {
                infomation[i].value = null;
            }
            
            search_info.style.visibility = "hidden";
            bg.style.visibility = "hidden";
        }
    }



//解压作业
var outhomework = document.querySelector(".btn-out");
outhomework.onclick = function () {
    myItem.push("点击了解压作业按钮")
    // 弹出信息框
    var search_info = document.querySelector(".info_out");
    search_info.style.visibility = "visible";
    bg.style.visibility = "visible";
    // 取消提交
    var test_cancel = document.querySelector(".info-button_out-2");
    test_cancel.onclick = function () {
        myItem.push("点击了解压作业按钮中的取消解压按钮")
        search_info.style.visibility = "hidden";
        var infomation = search_info.querySelectorAll("input");
        for(let i=0;i<infomation.length;i++)
        {
            infomation.value = null;
        }
            
        bg.style.visibility = "hidden";
    }

        //提交信息
        var test_sure = document.querySelector(".info-button_out-1")
        test_sure.onclick = function () {
            myItem.push("点击了解压作业按钮中的解压按钮")
            let cnt=1;
            var infomation = search_info.querySelectorAll("input");
            var stuno = infomation[0].value;
                    let temp=hashTable_data.get(stuno);
                    let temp1=(Number)(infomation[1].value);
                    if(temp==null)
                    {
                        alert("该课程不存在，请重新输入");
                    }
                    if(infomation[1].value=="")
                    {
                        alert("输入为空");
                    }  
                    
                    else{
                        myItem.push("解压作业成功")
                        alert('解码后的字符串'+byteToString(decode(temp.huffmancode_hub[temp1-1], temp.huffmanByteArr_hub[temp1-1])));
                    }
                  
                    show(cu_page, arr);
           
            for (var i = 0; i < infomation.length; i++) {
                infomation[i].value = null;
            }
            
            search_info.style.visibility = "hidden";
            bg.style.visibility = "hidden";
        }
    }










// 查询作业信息
var lookinfo= document.querySelector(".btn-look")
lookinfo.onclick = function () {
    myItem.push("点击了查询作业按钮")
    // 弹出信息框
    var info = document.querySelector(".info_look");
    info.style.visibility = "visible";
    bg.style.visibility = "visible";
    // 取消提交
    var add_cancel = document.querySelector(".info-button_look-2")
    add_cancel.onclick = function () {
        myItem.push("点击了查询作业按钮中的取消查询")
        info.style.visibility = "hidden";
        var infomation = info.querySelectorAll("input");
        for (var i = 0; i < infomation.length; i++) {
            infomation[i].value = null;
        }
        bg.style.visibility = "hidden";
    }

        //提交信息
        var add_sure = document.querySelector(".info-button_look-1")
        add_sure.onclick = function () {
            myItem.push(" 点击了查询作业按钮中的查询按钮")
            var infomation = info.querySelectorAll("input");
            var stuno = infomation[0].value;
            var tempp = (Number)(infomation[1].value);
            let temp1=(Number)(tempp-1)
                    let temp=hashTable_data.get(stuno);
                    if(temp==null)
                    {
                        myItem.push(" 该课程不存在，请重新输入")
                        alert("该课程不存在，请重新输入");
                    }
                    else if(infomation[1].value==null)
                    {
                        myItem.push(" 未输入第几次作业，请重新输入")
                        alert("未输入第几次作业，请重新输入");
                    }
                    else{
                        myItem.push(" 查询作业成功")
                        alert("课程作业为："+'\n'+temp.todoContent[temp1]+'\n'+'截止时间是:'+temp.todoTime+'\n'+'课程资料为：'+'\n'+temp.elDocument+'\n'+'已提交作业为：'+'\n'+temp.homework[temp1]);
                    }
        
           
            for (var i = 0; i < infomation.length; i++) {
                infomation[i].value = null;
            }
            console.log(cu_page);
            info.style.visibility = "hidden";
            bg.style.visibility = "hidden";
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
    myItem.push(" 点击了上一页按钮")
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
    myItem.push(" 点击了下一页按钮")
    ne();
}

//删除学生
var btn_delete = document.querySelector(".btn-del");
btn_delete.onclick = function () {
    myItem.push(" 点击了删除按钮")
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
//显示表格的函数
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
        // line.insertCell().innerHTML = ' <input type="file" name="file" value="上传文件" onchange="showPreview(this)" /></a><br><a id="yasuo" href="javascript:void(0)">压缩</a><br><a id="testa" href="javascript:void(0)">上传作业</a>'
        // line.insertCell().innerHTML = ' <input type="file" name="file" value="下载文件" onchange="showPreview(this)" /><br><a id="testziliao" href="javascript:void(0)">下载作业</a>'
       
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
        function huffmanZip(bytes) 
        {
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
        //参数为压缩内容，对应的课程，以及第几次作业
function yasuowenjian(content,temp,temp1)
{


        
        let bytes = stringToByte(content);
         let nodes = getNodes(bytes);
         let root = createHuffmanTree(nodes);
         let str="";
        console.log('根节点：', root);
        let list = [];
        root.preOrder(list);
        console.log('前序遍历：', list);
          hufumanCodes = getCodes2(root);
          temp.huffmancode_hub[temp1-1]=hufumanCodes;
        console.log('生成的赫夫曼编码表：', hufumanCodes);
        //生成赫夫曼编码字符串
        let hufumanStrArr = zip(bytes, hufumanCodes);
        console.log('赫夫曼编码字符串：', hufumanStrArr.join(''))
        console.log('赫夫曼编码字符串的长度：', hufumanStrArr.join('').length)//应该是133
        
        //将生成赫夫曼编码字符串转成字节数组, 要发送的数组
        let hufumanByteArr = huffstringToByte(hufumanStrArr);
        console.log('压缩后的字节数组', hufumanByteArr);
        temp.huffmanByteArr_hub[temp1-1]=hufumanByteArr;
        // str+='压缩后的字节数组'+ hufumanByteArr+'\n';
        console.log('压缩率：', (bytes.length - hufumanByteArr.length) / bytes.length * 100 + '%');
        str+='压缩率：'+ (bytes.length - hufumanByteArr.length) / bytes.length * 100 + '%'+'\n';
        // console.log('压缩后的字符串', byteToString(hufumanByteArr));
        str+='压缩后的字符串'+ byteToString(hufumanByteArr)+'\n';

        // console.log('压缩后的字符串长度', byteToString(hufumanByteArr).length);
        str+='压缩后的字符串长度'+ byteToString(hufumanByteArr).length+'\n';
        //测试封装后的方法
        console.log('压缩后的字节数组', huffmanZip(bytes));
        // str+='压缩后的字节数组'+ huffmanZip(bytes)+'\n';
        //测试解码
        console.log('解码后的字符串', byteToString(decode(hufumanCodes, hufumanByteArr)));
        console.log('原字符数组：', bytes);
        console.log('解码后字符串：', byteToString(bytes));
        console.log('原先的字符串长度：', byteToString(bytes).length);
        str+= '原先的字符串长度：'+ byteToString(bytes).length+'\n';
        if(str!="")
        {
            alert(str);
            return zipcontent=byteToString(hufumanByteArr);
        }
        else 
        {
            alert("上传不成功");
            return  false;
        }
       
      
         
}
       