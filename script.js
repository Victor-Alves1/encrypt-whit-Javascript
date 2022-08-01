function encrypt(){
    function crypt (str, disp){
        for(let i = 0; i<str.length; i++){
            if(disp == '-1'){
                str[i] = (str[i].charCodeAt()) + (parseInt(disp));
                cryptoCode[i] = (String.fromCharCode(str[i]));
            } else {
                if(str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90 || str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122){
                    str[i] = (str[i].charCodeAt()) + (parseInt(disp));
                    cryptoCode[i] = (String.fromCharCode(str[i])); 
                }
            }
        }
    }

    function reverseString(str){
        var joinString = str.reverse();
        return (cryptoCode = joinString);
    }

    // var input = require('fs').readFileSync('./dev/stdin', 'utf8');
    // var inputNum = 2
    var input = window.document.querySelector('#mensagem').value
    var inputNum = window.document.querySelector('#chave').value
    var res = window.document.querySelector('#res')
    var parametros = input.split('\r\n');
    // Valor do primeiro deslocamento
    // var inputNum = 10
    for(let h = 0; h< parametros.length; h++){
        var cryptoCode = parametros.shift();
        cryptoCode = cryptoCode.split('');
        //First Step
        crypt(cryptoCode, inputNum);
        //Second Step
        reverseString(cryptoCode);
        //Third Step
        crypt(cryptoCode, '-1');
        //Grouping all
        console.log(cryptoCode);
        cryptoCode=cryptoCode.join('');
        console.log(cryptoCode);
        res.innerHTML += `<p> ${cryptoCode} </p>`
    }
};

function decrypt(){
    function crypt (str, disp){
        for(let i = 0; i<str.length; i++){
            if(disp == 'uno'){
                str[i] = (str[i].charCodeAt()) + (1);
                cryptoCode[i] = (String.fromCharCode(str[i]));
            } else {
                if(str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90 || str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122){
                    str[i] = (str[i].charCodeAt()) - (parseInt(disp));
                    cryptoCode[i] = (String.fromCharCode(str[i])); 
                }
            }
        }
    }

    function reverseString(str){
        var joinString = str.reverse();
        return (cryptoCode = joinString);
    }

    // var input = require('fs').readFileSync('./dev/stdin', 'utf8');
    // var inputNum = 2
    var input = window.document.querySelector('#mensagem').value
    var inputNum = window.document.querySelector('#chave').value
    var res = window.document.querySelector('#res')
    var parametros = input.split('\r\n');
    // Valor do primeiro deslocamento
    // var inputNum = 10
    for(let h = 0; h< parametros.length; h++){
        var cryptoCode = parametros.shift();
        cryptoCode = cryptoCode.split('');
        //First Step
        crypt(cryptoCode, inputNum);
        //Second Step
        reverseString(cryptoCode);
        //Third Step
        crypt(cryptoCode, 'uno');
        //Grouping all
        console.log(cryptoCode);
        cryptoCode=cryptoCode.join('');
        console.log(cryptoCode);
        res.innerHTML += `<p> ${cryptoCode} </p>`
    }
};