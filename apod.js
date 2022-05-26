let elementDate = $("#data");
let displayN = $("#displayNasa");

let pedido = (dateUsuario)=> {
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=L28hzMhIQpHep1FqXXJ1YeU0RF7ZM0JCalooy9Rk&date=${dateUsuario}`,
        type: "GET",
        success(resposta){
            let imagem = resposta.url
            let tit = resposta.title
            let exp = resposta.explanation


            displayN.append(`

                <h2>${tit}</h2>
                <img src = "${imagem}"
                <p>${exp}</p>
                
            
            `)


            let divDis = $("#displayNasa");
            divDis.css("display", "block");
            
    
        }
    });
}