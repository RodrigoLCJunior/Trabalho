# Trabalho
var regExpTelefone = /^\([0-9]]{2}}\) \[0-9]{4,5}-?\[0-9]{4}$/;
var regExpNome = /^[^\d]+$/

^ - Indica o início da string.
\( \)- Corresponde a um parêntese de abertura e de fechamento.
[0-9]{2} - Colocar exatamente dois dígitos de 0 a 9.
[0-9]{4,5} - Poder colocar um número de 4 ou 5 dígitos.
-? - Corresponde a um hífen opcional.
[0-9]{4} - Colocar exatamente quatro dígitos.
$ - Indica o fim da string.

regExp é uma expressão regular.


