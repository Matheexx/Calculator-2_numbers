// Definição das variáveis do DOM:
const input_n1 = document.getElementById("input_n1");
const input_n2 = document.getElementById("input_n2");

const operation = document.getElementById("operation");

const button_adição = document.getElementById("button_adição");
const button_subtração = document.getElementById("button_subtração");
const button_multiplicação = document.getElementById("button_multiplicação");
const button_divisão = document.getElementById("button_divisão");

const result = document.getElementById("result");


// Definição da função para verificar se os valores foram digitados:
function verifyValues(txt_n1, txt_n2) {
    if (txt_n1.length && txt_n2.length) return true;
    alert("[ERROR] Type two values");
    clear_result_operation_borders();
}


// Definição das funções para realizar as contas:
function soma(txt_n1, txt_n2) {return Number(txt_n1) + Number(txt_n2)}
function diferença(txt_n1, txt_n2) {return Number(txt_n1) - Number(txt_n2)}
function produto(txt_n1, txt_n2) {return Number(txt_n1) * Number(txt_n2)}
function razão(txt_n1, txt_n2) {return Number(txt_n1) / Number(txt_n2)}


// Definição das funções dos botões(onclick) para realizar o visual/mostrar o resultado das contas:
function btn_adição() {
    if (verifyValues(input_n1.value, input_n2.value)) {
        operation.innerHTML = "<p>+</p>";
        operation.style.border = "0.1px solid blue";
        button_adição.style.border = "0.1px solid blue";
        button_subtração.style.border = "0.1px solid black";
        button_multiplicação.style.border = "0.1px solid black";
        button_divisão.style.border = "0.1px solid black";
        result.innerHTML = `<p>${soma(input_n1.value, input_n2.value)}</p>`;
    }
}

function btn_subtração() {
    if (verifyValues(input_n1.value, input_n2.value)) {
        operation.innerHTML = "<p>-</p>";
        operation.style.border = "0.1px solid blue";
        button_adição.style.border = "0.1px solid black";
        button_subtração.style.border = "0.1px solid blue";
        button_multiplicação.style.border = "0.1px solid black";
        button_divisão.style.border = "0.1px solid black";
        result.innerHTML = `<p>${diferença(input_n1.value, input_n2.value)}</p>`;
    }
}

function btn_multiplicação() {
    if (verifyValues(input_n1.value, input_n2.value)) {
        operation.innerHTML = "<p>x</p>";
        operation.style.border = "0.1px solid blue";
        button_adição.style.border = "0.1px solid black";
        button_subtração.style.border = "0.1px solid black";
        button_multiplicação.style.border = "0.1px solid blue";
        button_divisão.style.border = "0.1px solid black";
        result.innerHTML = `<p>${produto(input_n1.value, input_n2.value)}</p>`;
    }
}

function btn_divisão() {
    if (verifyValues(input_n1.value, input_n2.value)) {
        operation.innerHTML = "<p>÷</p>";
        operation.style.border = "0.1px solid blue";
        button_adição.style.border = "0.1px solid black";
        button_subtração.style.border = "0.1px solid black";
        button_multiplicação.style.border = "0.1px solid black";
        button_divisão.style.border = "0.1px solid blue";
        if (Number(input_n2.value) == 0) {
            result.innerHTML = "Impossível dividir por 0";
        }
        else {
            result.innerHTML = `<p>${razão(input_n1.value, input_n2.value)}</p>`;
        }
    }
}


// Definição da função(onclick) para limpar os inputs, result, operation e as bordas:
function f_clear() {
    input_n1.value = "";
    input_n2.value = "";
    clear_result_operation_borders();
}

function clear_result_operation_borders() {
    result.innerHTML = "";
    operation.innerHTML = "";

    operation.style.border = "0.1px solid black";
    button_adição.style.border = "0.1px solid black";
    button_subtração.style.border = "0.1px solid black";
    button_multiplicação.style.border = "0.1px solid black";
    button_divisão.style.border = "0.1px solid black";
}
