function mudarCor(cor){
    let body = document.body;

    switch(cor){
        case'azul' : body.style.backgroundColor = 'blue'; break;
        case'vermelho' : body.style.backgroundColor = 'red'; break;
        case'verde' : body.style.backgroundColor = 'green'; break;
        case'roxo' : body.style.backgroundColor = 'purple'; break;
        case'laranja' : body.style.backgroundColor = 'orange'; break;
        case'rosa' : body.style.backgroundColor = 'pink'; break;

        default: body.style.backgroundColor = 'black'

    }
}