// Função para criptografar
function encrypt(){
    //Função para mudar os caracteres
    function crypt (str, disp){
        for(let i = 0; i<str.length; i++){
            if(str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90 || str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122){
                str[i] = (str[i].charCodeAt()) + (parseInt(disp)) - 1
                cryptoCode[i] = str[i]
            } else { 
                str[i] = (str[i].charCodeAt()) + (-1)
                cryptoCode[i] = str[i]
            };
            cryptoCode[i] = (cryptoCode[i]>>>0).toString(2)
        }
    }

    //Função para usar a string invertida
    function reverseString(str){
        var joinString = str.reverse();
        return (cryptoCode = joinString);
    }

    // Captura das informações no HTML
    var input = window.document.querySelector('#mensagem').value;
    var inputNum = window.document.querySelector('#chave').value;
    var res = window.document.querySelector('#res');
    var parametros = input.split('\r\n');

    //Validação
    if(inputNum == 0 || inputNum == ''){
        window.alert('Escolha um valor chave para realizar a criptografia/descriptografia')
    };

    //Criptografar todos os caracteres
    for(let h = 0; h< parametros.length; h++){
        var cryptoCode = parametros.shift();
        cryptoCode = cryptoCode.split('');
        //First Step e Third Step
        crypt(cryptoCode, inputNum);
        //Second Step
        reverseString(cryptoCode);
        //Grouping all
        cryptoCode=cryptoCode.join(' ');
        res.innerHTML += `<p> ${cryptoCode} </p>`
    }
};

//Função para descriptografar
function decrypt(){
    //Função para mudar os caracteres    
    function crypt (str, disp){
            str = parseInt(str, 2)
            console.log(str)
            if(str>=65 && str<=90 || str>=97 && str<=122){
                str = (str) - (parseInt(disp)) + 1;
                str = (String.fromCharCode(str)); 
            } else {
                str = (str) + (1);
                str = (String.fromCharCode(str));
            }
            cryptArr.push(str);
    }

    //Função para usar a string invertida
    function reverseString(str){
        var joinString = str.reverse();
        return (cryptoCode = joinString);
    }

    // Captura das informações no HTML    
    var input = window.document.querySelector('#mensagem').value;
    var inputNum = window.document.querySelector('#chave').value;
    var res = window.document.querySelector('#res');
    var parametros = input.split(' ');
    var totalLength = parametros.length;
    var cryptArr = [];

    //Criptografar todos os caracteres
    for(let h = 0; h<= totalLength; h++){
        var cryptoCode = parametros.shift();
        //First Step and Third Step
        crypt(cryptoCode, inputNum);
    }
    //Second Step
    reverseString(cryptArr);
    //Grouping all
    cryptoCode=cryptArr.join('');
    res.innerHTML += `<p> ${cryptoCode} </p>`
};