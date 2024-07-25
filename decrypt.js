const vogais = {
    'a': 'ai', 'e' : 'enter', 'i' : 'imes', 'o' : 'ober', 'u': 'ufat'
};

function encrypt(textarea){
    let inputText = document.querySelector("textarea").value 
    let result = document.getElementById("result");
    let textocriptografado = "";

    for(let i = 0; i < inputText.length; i++){
        let caractere = inputText[i];
        if(vogais[caractere]){
            textocriptografado += vogais[caractere];
        }else{
            textocriptografado += caractere
        }
    }
    document.getElementById("result").style.display = "block";

    result.textContent = textocriptografado;
    document.querySelector("textarea").value = "";

    document.getElementById("result").style.display = "block";
    document.getElementById("imagemResult").style.display = "none";
    result.textContent = textocriptografado;
    document.querySelector("textarea").value = "";

}

function decrypt(textarea){
    let inputText = document.querySelector("textarea").value;
    let result = document.getElementById("result");
    let textodescriptografado = "";

    const descriptografia = {
        'ai' : 'a', 'enter' : 'e', 'imes' : 'i', 'ober' : 'o' , 'ufat' : 'u'
    };

    let i = 0;
    while (i < inputText.length) {
        let encontrado = false;

        for (const [chave, valor] of Object.entries(descriptografia)) {
            if (inputText.substring(i, i + chave.length) === chave) {
                textodescriptografado += valor;
                i += chave.length;
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            textodescriptografado += inputText[i];
            i++;
        }
    }

    document.getElementById("result").style.display = "block";

    result.textContent = textodescriptografado;
    document.querySelector("textarea").value = "";

    document.getElementById("result").style.display = "block";
    document.getElementById("imagemResult").style.display = "none";
    result.textContent = textocriptografado;
    document.querySelector("textarea").value = "";
}

document.getElementById("result").style.display = "none";

function buttonCopy(result){

}

function copyResult() {
    let resultText = document.getElementById("result").textContent;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(resultText).then(() => {
            alert('Texto copiado para a área de transferência!');
        }).catch(err => {
            alert('Falha ao copiar o texto: ', err);
        });
    } else {
        alert('Clipboard API não suportada neste navegador.');
    }
}