// alert("table.js loaded");
//新增数据函数
function addRow(){
    var table = document.getElementById("table1");
    // console.log(table);

    //获取插入位置
    var lenth = table.rows.length;
    console.log(lenth);

    //插入行节点
    var newRow = table.insertRow(lenth);
    console.log(newRow);

    //插入列节点
    var nameCol = newRow.insertCell(0);
    var telCol = newRow.insertCell(1);
    var actionCol = newRow.insertCell(2);
    console.log(newRow);
    
    //修改节点文本内容
    nameCol.innerHTML = "未命名";
    telCol.innerHTML = "无联系方式";
    actionCol.innerHTML = '<button onclick="editRow(this)">编辑</button><button onclick="deleteRow(this)">删除</button>';
}

//删除数据函数
function deleteRow(button){
    // console.log(button);
    //button的父节点是td，td的父节点是tr，获取到tr后删除
    var row = button.parentNode.parentNode;
    
    row.parentNode.removeChild(row);
}

//编辑数据函数
function editRow(button){
    // console.log(button);
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var tel = row.cells[1];
    var action = row.cells[2];

    var inputName = prompt("请输入姓名");
    var inputTel = prompt("请输入联系方式");

    name.innerHTML = inputName;
    tel.innerHTML = inputTel;
    
}