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
            $('#titulo').text(tit)
            $('#desc').text(exp)
            if(resposta.media_type=='image'){
                $('#video').css('display', 'none')
                $('#imagem').css('display', 'flex')
                $('#imagem').attr('src', imagem)
                
            }else{
                $('#imagem').css('display', 'none')
                $('#video').css('display', 'flex')
                $('#video').attr('src', imagem)

            }
            }
    });
}
$("#btn").click((event)=>{
event.preventDefault()
let dateUsuario = elementDate.val()
pedido(dateUsuario)})