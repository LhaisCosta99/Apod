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
            $('#imagem').attr('src', imagem).css('width','200px')
            $('#titulo').text(tit)
            $('#desc').text(exp)
            }
    });
}
$("#btn").click((event)=>{
event.preventDefault()
let dateUsuario = elementDate.val()
pedido(dateUsuario)})