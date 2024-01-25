function criptografar() {
    var textoDigitado = document.getElementById('textoDigitado').value;

    if(!this.validarCaracteres(textoDigitado)){
        var result = '';
        textoDigitado = textoDigitado.toLowerCase();
        for (var indexLetra = 0; indexLetra < textoDigitado.length; indexLetra++) {
            var caractereAtual = textoDigitado[indexLetra];
    
            switch (caractereAtual) {
                case 'a':
                    result += 'ai';
                    break;
                case 'e':
                    result += 'enter';
                    break;
                case 'i':
                    result += 'imes';
                    break;
                case 'o':
                    result += 'ober';
                    break;
                case 'u':
                    result += 'ufat';
                    break;
                default:
                    result += caractereAtual;
            }
        }
    
        document.querySelector('.textoResposta').value = result;
    }else{
        alert('Retire acentos ou caracteres especiais!')
    }
}




function descript() {
    var textoDigitado = document.getElementById('textoDigitado').value;
    textoDigitado = textoDigitado.toLowerCase();

    var substituicoes = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    var resultado = textoDigitado;

    for (var chave in substituicoes) {
        resultado = resultado.split(chave).join(substituicoes[chave]);
    }

    document.querySelector('.textoResposta').value = resultado;
}

function copiarTexto(){
    var textoResposta = document.querySelector('.textoResposta').value;
    var textoDigitado = document.querySelector('.textoDigitado').value;

    Swal.fire({
        title: 'Qual texto deseja copiar?',
        showCancelButton: true,
        confirmButtonText: 'Texto Criptografado',
        cancelButtonText: 'Texto Descriptografado',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
      }).then((result) => {
        if (result.isConfirmed) {
            navigator.clipboard.writeText(textoResposta).then(function() {
                alert('Texto copiado com sucesso!');
            }).catch(function(err) {
                alert('Erro ao copiar o texto: ', err);
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            navigator.clipboard.writeText(textoDigitado).then(function() {
                alert('Texto copiado com sucesso!');
            }).catch(function(err) {
                alert('Erro ao copiar o texto: ', err);
            });
        }
      });
}


function validarCaracteres(str) {
    for (var i = 0; i < str.length; i++) {
        var charAtual = str.charAt(i);
        if (!(/[a-zA-Z0-9\s]/).test(charAtual)) {
            return true;
        }
    }
    return false;
}
