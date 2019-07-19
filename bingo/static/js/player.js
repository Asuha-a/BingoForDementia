//�h���b�O�v�f�ƃh���b�v�G���A�̎擾
var objImg0 = document.getElementById("img0");
var objImg1 = document.getElementById("img1");
var objImg2 = document.getElementById("img2");
var objImg3 = document.getElementById("img3");
var objImg4 = document.getElementById("img4");
var objImg5 = document.getElementById("img5");
var objImg6 = document.getElementById("img6");
var objImg7 = document.getElementById("img7");
var objImg8 = document.getElementById("img8");
var objImg9 = document.getElementById("img9");
var objDropArea0 = document.getElementById("droparea0");
var objDropArea1 = document.getElementById("droparea1");
var objDropArea2 = document.getElementById("droparea2");
var objDropArea3 = document.getElementById("droparea3");
var objDropArea4 = document.getElementById("droparea4");
var objDropArea5 = document.getElementById("droparea5");
var objDropArea6 = document.getElementById("droparea6");
var objDropArea7 = document.getElementById("droparea7");
var objDropArea8 = document.getElementById("droparea8");
var objImgArea = document.getElementById("dragarea");
var judge = [true, true, true, true, true, true, true, true, true] //judge drop ok or no
var judge_e = 0
var array = [0, 0, 0, 0, 0, 0, 0, 0, 0] //arrange id in objDropArea
var isdraking = [true, true, true, true, true, true, true, true, true] //judge drag success or failture
var alt_array = [] //after game start, not to chage array[]
var gamestart = false //game start or not
var ranaway = 0 //temporally array'deserve reserve
var ch = 0; //temporally i'deserve reserve


window.onload = function () {
    document.getElementById("line").style.visibility = "hidden";
    document.getElementById("zero").style.visibility = "hidden";
    document.getElementById("one").style.visibility = "hidden";
    document.getElementById("two").style.visibility = "hidden";
    document.getElementById("three").style.visibility = "hidden";
    document.getElementById("win").style.visibility = "hidden";

}



function Gamestart() {
    for (let i = 0; i < array.length; i++) {
        if (!isdraking[i]) array[i] = ranaway
    }
    if (array[0] !== 0 &&
       array[1] !== 0 &&
       array[2] !== 0 &&
       array[3] !== 0 &&
       array[4] !== 0 &&
       array[5] !== 0 &&
       array[6] !== 0 &&
       array[7] !== 0 &&
       array[8] !== 0) {
        alert("Gamestart")
        for (let num = 0; num < array.length; num++) alt_array[num] = array[num]
        gamestart = true
        document.getElementById("dragarea").style.visibility = "hidden";
        document.getElementById("btn_n").style.visibility = "hidden";
        document.getElementById("line").style.visibility = "visible";
        document.getElementById("zero").style.visibility = "visible";
    }
}



//�h���b�O�J�n���̏���
objImg0.addEventListener("dragstart", function (evt) {
    for (let i = 0; i < array.length; i++) {
        if (!isdraking[i]) {
            array[i] = ranaway
            isdraking[i] = true
            judge[i] = false;
            console.log(i)
            console.log(judge[i])
        }
        if (evt.target.id === array[i]) {
            if (!gamestart) judge[i] = true
            ch = i
            ranaway = array[i]
            array[i] = 0
            isdraking[i] = false
            console.log(i)
            console.log(judge[i])
        }
    }
    //�h���b�O�v�f��id��dataTransfer�ɃZ�b�g
    evt.dataTransfer.setData("text/plain", evt.target.id);
    evt.stopPropagation();
}, false);

objImg1.addEventListener("dragstart", function (evt) {
    for (let i = 0; i < array.length; i++) {
        if (!isdraking[i]) {
            array[i] = ranaway
            isdraking[i] = true
            judge[i] = false;
            console.log(i)
            console.log(judge[i])
        }
        if (evt.target.id === array[i]) {
            if (!gamestart) judge[i] = true
            ch = i
            ranaway = array[i]
            array[i] = 0
            isdraking[i] = false
            console.log(i)
            console.log(judge[i])
        }
    }
    //�h���b�O�v�f��id��dataTransfer�ɃZ�b�g
    evt.dataTransfer.setData("text/plain", evt.target.id);
    evt.stopPropagation();
}, false);

objImg2.addEventListener("dragstart", function (evt) {
    for (let i = 0; i < array.length; i++) {
        if (!isdraking[i]) {
            array[i] = ranaway
            isdraking[i] = true
            judge[i] = false;
        }
        if (evt.target.id === array[i]) {
            if (!gamestart) judge[i] = true
            ch = i
            ranaway = array[i]
            array[i] = 0
            isdraking[i] = false
        }
    }
    //�h���b�O�v�f��id��dataTransfer�ɃZ�b�g
    evt.dataTransfer.setData("text/plain", evt.target.id);
    evt.stopPropagation();
}, false);

objImg3.addEventListener("dragstart", function (evt) {
    for (let i = 0; i < array.length; i++) {
        if (!isdraking[i]) {
            array[i] = ranaway
            isdraking[i] = true
            judge[i] = false;
        }
        if (evt.target.id === array[i]) {
            if (!gamestart) judge[i] = true
            ch = i
            ranaway = array[i]
            array[i] = 0
            isdraking[i] = false
        }
    }
    //�h���b�O�v�f��id��dataTransfer�ɃZ�b�g
    evt.dataTransfer.setData("text/plain", evt.target.id);
    evt.stopPropagation();
}, false);

objImg4.addEventListener("dragstart", function (evt) {
    for (let i = 0; i < array.length; i++) {
        if (!isdraking[i]) {
            array[i] = ranaway
            isdraking[i] = true
            judge[i] = false;
        }
        if (evt.target.id === array[i]) {
            if (!gamestart) judge[i] = true
            ch = i
            ranaway = array[i]
            array[i] = 0
            isdraking[i] = false
        }
    }
    //�h���b�O�v�f��id��dataTransfer�ɃZ�b�g
    evt.dataTransfer.setData("text/plain", evt.target.id);
    evt.stopPropagation();
}, false);

objImg5.addEventListener("dragstart", function (evt) {
    for (let i = 0; i < array.length; i++) {
        if (!isdraking[i]) {
            array[i] = ranaway
            isdraking[i] = true
            judge[i] = false;
        }
        if (evt.target.id === array[i]) {
            if (!gamestart) judge[i] = true
            ch = i
            ranaway = array[i]
            array[i] = 0
            isdraking[i] = false
        }
    }
    //�h���b�O�v�f��id��dataTransfer�ɃZ�b�g
    evt.dataTransfer.setData("text/plain", evt.target.id);
    evt.stopPropagation();
}, false);

objImg6.addEventListener("dragstart", function (evt) {
    for (let i = 0; i < array.length; i++) {
        if (!isdraking[i]) {
            array[i] = ranaway
            isdraking[i] = true
            judge[i] = false;
        }
        if (evt.target.id === array[i]) {
            if (!gamestart) judge[i] = true
            ch = i
            ranaway = array[i]
            array[i] = 0
            isdraking[i] = false
        }
    }
    //�h���b�O�v�f��id��dataTransfer�ɃZ�b�g
    evt.dataTransfer.setData("text/plain", evt.target.id);
    evt.stopPropagation();
}, false);

objImg7.addEventListener("dragstart", function (evt) {
    for (let i = 0; i < array.length; i++) {
        if (!isdraking[i]) {
            array[i] = ranaway
            isdraking[i] = true
            judge[i] = false;
        }
        if (evt.target.id === array[i]) {
            if (!gamestart) judge[i] = true
            ch = i
            ranaway = array[i]
            array[i] = 0
            isdraking[i] = false
        }
    }
    //�h���b�O�v�f��id��dataTransfer�ɃZ�b�g
    evt.dataTransfer.setData("text/plain", evt.target.id);
    evt.stopPropagation();
}, false);

objImg8.addEventListener("dragstart", function (evt) {
    for (let i = 0; i < array.length; i++) {
        if (!isdraking[i]) {
            array[i] = ranaway
            isdraking[i] = true
            judge[i] = false;
        }
        if (evt.target.id === array[i]) {
            if (!gamestart) judge[i] = true
            ch = i
            ranaway = array[i]
            array[i] = 0
            isdraking[i] = false
        }
    }
    //�h���b�O�v�f��id��dataTransfer�ɃZ�b�g
    evt.dataTransfer.setData("text/plain", evt.target.id);
    evt.stopPropagation();
}, false);

objImg9.addEventListener("dragstart", function (evt) {
    for (let i = 0; i < array.length; i++) {
        if (!isdraking[i]) {
            array[i] = ranaway
            isdraking[i] = true
            judge[i] = false;
        }
        if (evt.target.id === array[i]) {
            if (!gamestart) judge[i] = true
            ch = i
            ranaway = array[i]
            array[i] = 0
            isdraking[i] = false
        }
    }
    //�h���b�O�v�f��id��dataTransfer�ɃZ�b�g
    evt.dataTransfer.setData("text/plain", evt.target.id);
    evt.stopPropagation();
}, false);

//�h���b�v���ꂽ���̏���
objDropArea0.addEventListener("drop", function (evt) {
    if (judge[0]) {
        if (!isdraking[ch]) {
            //if (!gamestart) judge[0] = true
            isdraking[ch] = true
        }
        //id����dataTransfer���������o��
        var id = evt.dataTransfer.getData("text/plain");
        array[0] = id
        var obj3 = document.getElementById(id);
        if (obj3) {
            objDropArea0.appendChild(obj3);  //�v�f���ړ�����
        }
        evt.preventDefault();
        judge[0] = false
    } else { }
    console.log(0)
    console.log(judge[0])
    evt.preventDefault();
}, false);

objDropArea1.addEventListener("drop", function (evt) {
    if (judge[1]) {
        if (!isdraking[ch]) {
            //if (!gamestart) judge[1] = true
            isdraking[ch] = true
        }
        //id����dataTransfer���������o��
        var id = evt.dataTransfer.getData("text/plain");
        array[1] = id
        var obj3 = document.getElementById(id);
        if (obj3) {
            objDropArea1.appendChild(obj3);  //�v�f���ړ�����
        }
        judge[1] = false
    } else { }
    console.log(1)
    console.log(judge[1])
    evt.preventDefault();
}, false);

objDropArea2.addEventListener("drop", function (evt) {

    if (judge[2]) {
        if (!isdraking[ch]) {
            //if (!gamestart) judge[2] = true
            isdraking[ch] = true
        }
        //id����dataTransfer���������o��
        var id = evt.dataTransfer.getData("text/plain");
        array[2] = id
        var obj3 = document.getElementById(id);
        if (obj3) {
            objDropArea2.appendChild(obj3);  //�v�f���ړ�����
        }
        judge[2] = false
    } else { }
    evt.preventDefault();
}, false);

objDropArea3.addEventListener("drop", function (evt) {

    if (judge[3]) {
        if (!isdraking[ch]) {
            //if (!gamestart) judge[3] = true
            isdraking[ch] = true
        }
        //id����dataTransfer���������o��
        var id = evt.dataTransfer.getData("text/plain");
        array[3] = id
        var obj3 = document.getElementById(id);
        if (obj3) {
            objDropArea3.appendChild(obj3);  //�v�f���ړ�����
        }
        judge[3] = false
    } else { }
    evt.preventDefault();
}, false);

objDropArea4.addEventListener("drop", function (evt) {

    if (judge[4]) {
        if (!isdraking[ch]) {
            //if (!gamestart) judge[4] = true
            isdraking[ch] = true
        }
        //id����dataTransfer���������o��
        var id = evt.dataTransfer.getData("text/plain");
        array[4] = id
        var obj3 = document.getElementById(id);
        if (obj3) {
            objDropArea4.appendChild(obj3);  //�v�f���ړ�����
        }
        judge[4] = false
    } else { }
    evt.preventDefault();
}, false);

objDropArea5.addEventListener("drop", function (evt) {

    if (judge[5]) {
        if (!isdraking[ch]) {
            //if (!gamestart) judge[5] = true
            isdraking[ch] = true
        }
        //id����dataTransfer���������o��
        var id = evt.dataTransfer.getData("text/plain");
        array[5] = id
        var obj3 = document.getElementById(id);
        if (obj3) {
            objDropArea5.appendChild(obj3);  //�v�f���ړ�����
        }
        judge[5] = false
    } else { }
    evt.preventDefault();
}, false);

objDropArea6.addEventListener("drop", function (evt) {

    if (judge[6]) {
        if (!isdraking[ch]) {
            //if (!gamestart) judge[6] = true
            isdraking[ch] = true
        }
        //id����dataTransfer���������o��
        var id = evt.dataTransfer.getData("text/plain");
        array[6] = id
        var obj3 = document.getElementById(id);
        if (obj3) {
            objDropArea6.appendChild(obj3);  //�v�f���ړ�����
        }
        judge[6] = false
    } else { }
    evt.preventDefault();
}, false);

objDropArea7.addEventListener("drop", function (evt) {

    if (judge[7]) {
        if (!isdraking[ch]) {
            //if (!gamestart) judge[7] = true
            isdraking[ch] = true
        }
        //id����dataTransfer���������o��
        var id = evt.dataTransfer.getData("text/plain");
        array[7] = id
        var obj3 = document.getElementById(id);
        if (obj3) {
            objDropArea7.appendChild(obj3);  //�v�f���ړ�����
        }
        judge[7] = false
    } else { }
    evt.preventDefault();
}, false);

objDropArea8.addEventListener("drop", function (evt) {

    if (judge[8]) {
        if (!isdraking[ch]) {
            //if (!gamestart) judge[8] = true
            isdraking[ch] = true
        }
        //id����dataTransfer���������o��
        var id = evt.dataTransfer.getData("text/plain");
        array[8] = id
        var obj3 = document.getElementById(id);
        if (obj3) {
            objDropArea8.appendChild(obj3);  //�v�f���ړ�����
        }
        judge[8] = false
    } else { }
    evt.preventDefault();
}, false);

objImgArea.addEventListener("drop", function (evt) {
    if (!isdraking[ch]) {
        //if (!gamestart) judge[8] = true
        isdraking[ch] = true
    }
    if (!gamestart) {
        var id = evt.dataTransfer.getData("text/plain");
        var obj3 = document.getElementById(id);
        if (obj3) {
            objImgArea.appendChild(obj3);
        }
    } else { }
    evt.preventDefault();
}, false);


//�Q�̃C�x���g�Ńf�t�H���g�������}������
objDropArea0.addEventListener("dragenter", function (evt) {
    evt.preventDefault();
}, false);
objDropArea0.addEventListener("dragover", function (evt) {
    evt.preventDefault();
}, false);

objDropArea1.addEventListener("dragenter", function (evt) {
    evt.preventDefault();
}, false);
objDropArea1.addEventListener("dragover", function (evt) {
    evt.preventDefault();
}, false);

objDropArea2.addEventListener("dragenter", function (evt) {
    evt.preventDefault();
}, false);
objDropArea2.addEventListener("dragover", function (evt) {
    evt.preventDefault();
}, false);

objDropArea3.addEventListener("dragenter", function (evt) {
    evt.preventDefault();
}, false);
objDropArea3.addEventListener("dragover", function (evt) {
    evt.preventDefault();
}, false);

objDropArea4.addEventListener("dragenter", function (evt) {
    evt.preventDefault();
}, false);
objDropArea4.addEventListener("dragover", function (evt) {
    evt.preventDefault();
}, false);

objDropArea5.addEventListener("dragenter", function (evt) {
    evt.preventDefault();
}, false);
objDropArea5.addEventListener("dragover", function (evt) {
    evt.preventDefault();
}, false);

objDropArea6.addEventListener("dragenter", function (evt) {
    evt.preventDefault();
}, false);
objDropArea6.addEventListener("dragover", function (evt) {
    evt.preventDefault();
}, false);

objDropArea7.addEventListener("dragenter", function (evt) {
    evt.preventDefault();
}, false);
objDropArea7.addEventListener("dragover", function (evt) {
    evt.preventDefault();
}, false);

objDropArea8.addEventListener("dragenter", function (evt) {
    evt.preventDefault();
}, false);
objDropArea8.addEventListener("dragover", function (evt) {
    evt.preventDefault();
}, false);

objImgArea.addEventListener("dragenter", function (evt) {
    evt.preventDefault();
}, false);
objImgArea.addEventListener("dragover", function (evt) {
    evt.preventDefault();
}, false);
//gamestart

let i = 1
let line = 0;
const con = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
function imgClick(id) {
    if (gamestart) {
        for (let count = 0; count < alt_array.length; count++) {
            if (id === alt_array[count] && con[count + 1] === 4) {

                var obj = document.getElementById(id)
                obj.style.opacity = 0.3
                con[count + 1] = 1
            } else if (id === alt_array[count] && con[count + 1] === 1) {

                var obj = document.getElementById(id)
                obj.style.opacity = 1.0

                con[count + 1] = 4
            } else {

            }
        }
        line = 0
        if (con[1] + con[2] + con[3] === 3) line++
        if (con[4] + con[5] + con[6] === 3) line++
        if (con[7] + con[8] + con[9] === 3) line++
        if (con[1] + con[4] + con[7] === 3) line++
        if (con[2] + con[5] + con[8] === 3) line++
        if (con[3] + con[6] + con[9] === 3) line++
        if (con[1] + con[5] + con[9] === 3) line++
        if (con[3] + con[5] + con[7] === 3) line++
        //alert(`${line}line`)
        console.log(line)
        if (line === 0) {
            document.getElementById("zero").style.visibility = "visible";
            document.getElementById("one").style.visibility = "hidden";

        }
        else if (line === 1) {
            document.getElementById("zero").style.visibility = "hidden";
            document.getElementById("one").style.visibility = "visible";
            document.getElementById("two").style.visibility = "hidden";
        }
        else if (line === 2) {
            document.getElementById("one").style.visibility = "hidden";
            document.getElementById("two").style.visibility = "visible";
            document.getElementById("three").style.visibility = "hidden";
        } else if (line === 3) {
            document.getElementById("one").style.visibility = "hidden";
            document.getElementById("two").style.visibility = "hidden";
            document.getElementById("three").style.visibility = "visible";
            sleep(800)
            document.getElementById("win").style.visibility = "visible";

        } else {

        }


        i++
    } else { }
}

function change_window() {
    sleep(1000)
    alert("win")
}

function sleep(waitMsec) {
    var startMsec = new Date();

    // �w���~���b�Ԃ������[�v�������iCPU�͏��Ƀr�W�[���ԁj
    while (new Date() - startMsec < waitMsec);
}
