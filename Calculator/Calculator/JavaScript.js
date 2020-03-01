function myfunction(id) {
    if (document.getElementById("text").value == "") {
        var button_clicked = "";
        button_clicked = button_clicked.concat(document.getElementById(id).value);
        document.getElementById("text").value = button_clicked;
    }
    else {
        button_clicked1 = document.getElementById("text").value.concat(document.getElementById(id).value);
       document.getElementById("text").value = button_clicked1;
    }
}

function myoperation(id) {
    var op_inp_value = document.getElementById(id).value;
    if (document.getElementById("text").value == "") {
        document.getElementById("text").value = "Please check your values";
    }
    else if (op_inp_value == "+" || op_inp_value == "-" || op_inp_value == "*" || op_inp_value == "%" || op_inp_value == "/"  ) {
        var inp1 = document.getElementById("text").value;
        inp_op = inp1.concat(document.getElementById(id).value);
        document.getElementById("text").value = inp_op;
    }
}
function mybackspace() {
    text_inp = document.getElementById("text").value;
    if (text_inp == "") {
        document.getElementById("text").value = "Please check your values";
    }
    else {
        document.getElementById("text").value = text_inp.substring(0, text_inp.length - 1);
    }
}

function myreset() {
    document.getElementById("text").value = "";
}

function myresult() {
    var total_inp = document.getElementById("text").value;
    if (total_inp == "") {
        document.getElementById("text").value = "Please check your values";
    }

    else {
        document.getElementById("text").value = eval(total_inp);
    }
}





   /* else if (total_inp.includes("+")) {
        var op_position = total_inp.indexOf('+', 1);
        //alert(op_position);
        input_1 = parseInt(total_inp.substring(0, op_position));
        input_2 = parseInt(total_inp.substring(op_position + 1, total_inp.length));
        document.getElementById("text").value = input_1 + input_2    
    }
    else if (total_inp.includes("-")) {
        var op_position = total_inp.indexOf('-', 1);
        //alert(op_position);
        input_1 = parseInt(total_inp.substring(0, op_position));
        input_2 = parseInt(total_inp.substring(op_position + 1, total_inp.length));
        document.getElementById("text").value = input_1 - input_2
    }
    else if (total_inp.includes("X")) {
        var op_position = total_inp.indexOf('X', 1);
        //alert(op_position);
        input_1 = parseInt(total_inp.substring(0, op_position));
        input_2 = parseInt(total_inp.substring(op_position + 1, total_inp.length));
        document.getElementById("text").value = input_1 * input_2
    }
    else if (total_inp.includes("/")) {
        var op_position = total_inp.indexOf('/', 1);
        //alert(op_position);
        input_1 = parseInt(total_inp.substring(0, op_position));
        input_2 = parseInt(total_inp.substring(op_position + 1, total_inp.length));
        document.getElementById("text").value = input_1 / input_2
    }
    else if (total_inp.includes("%")) {
        var op_position = total_inp.indexOf('%', 1);
        //alert(op_position);
        input_1 = parseInt(total_inp.substring(0, op_position));
        input_2 = parseInt(total_inp.substring(op_position + 1, total_inp.length));
        document.getElementById("text").value = input_1 % input_2
    } */