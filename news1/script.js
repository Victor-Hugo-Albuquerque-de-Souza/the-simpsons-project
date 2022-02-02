let slideAtual    //BLOCO DE VARIÁVEIS E CONSTANTES GLOBAIS
let slideContador
let marcadorAtual
let marcadorCont
let respostaOnOff=new Boolean
let contR=0
let contD=5
let dislikeSwitch=new Boolean
const navRedes=document.getElementById('redesSociais')
const topoRedes=navRedes.offsetTop

function inicia(){
    slideContador=0
    marcadorCont=0
    slideAtual=document.getElementsByClassName('dvSlide')[slideContador]
    marcadorAtual=document.getElementsByClassName('base')[marcadorCont]
    sorteiaAdd()
    toggleComments()
    respostaOnOff= false
    dislikeSwitch=false
}

function fixoNoTopo(){ //FUNÇÃO PARA CONFIGURAR O COMPORTAMENTO DA NAV #REDESSOCIAIS
    if(window.scrollY >= topoRedes){ 
        navRedes.style.position="fixed"
        navRedes.style.top="0%"
    }else{
        navRedes.style.position="absolute"
        navRedes.style.top=""
    }
}

function sorteiaAdd(){ //FUNÇÃO PARA SORTEIO AUTOMÁTICO DAS IMAGENS DOS BANNERS DE PROPAGANDA (SEM OS REPETIR)
    var randomForContainer1=Math.round(Math.random()*2) //BLOCO DE SORTEIO DA 1a IMAGEM DO BANNER DE PROPAGANDA 
    var randomForPic1=Math.round(Math.random()*7) 
    document.getElementById("adv_pic" + randomForContainer1 ).src="imgs/adv_imgs/pic" + randomForPic1 + ".png"

    var randomForContainer2=Math.round(Math.random()*2) //BLOCO DE SORTEIO DA 2a IMAGEM DO BANNER DE PROPAGANDA 
    var randomForPic2=Math.round(Math.random()*7)
    while(randomForContainer2==randomForContainer1){
        randomForContainer2=Math.round(Math.random()*2)
    }
    while(randomForPic2==randomForPic1){
        randomForPic2=Math.round(Math.random()*7)
    }
    document.getElementById("adv_pic" + randomForContainer2).src="imgs/adv_imgs/pic" +  randomForPic2 + ".png"
    
    var randomForContainer3=Math.round(Math.random()*2) //BLOCO DE SORTEIO DA 3a IMAGEM DO BANNER DE PROPAGANDA 
    var randomForPic3=Math.round(Math.random()*7)
    while ((randomForContainer3==randomForContainer2) || (randomForContainer3==randomForContainer1)){
        randomForContainer3=Math.round(Math.random()*2)
    }
    while ((randomForPic3==randomForPic2) || (randomForPic3==randomForPic1)){
        randomForPic3=Math.round(Math.random()*7)
    }
    document.getElementById("adv_pic" + randomForContainer3).src="imgs/adv_imgs/pic" + randomForPic3  + ".png"
}

function mudaSlide(referencia_de_incremento_do_slide){ //FUNÇÃO PARA OS MARCADORES ('O O O') E PASSADORES ('<>') DO SLIDESHOW
    marcadorAtual.classList.remove('mAtivo') //REMOVO QUAISQUER CLASSE QUE ESTEJA ATIVA
    marcadorCont+=referencia_de_incremento_do_slide
    if(marcadorCont > (document.getElementsByClassName('base').length - 1)){ //BLOCO DE CONFIGURAÇÃO DOS MARCADORES DE BOLINHAS EMBAIXO DO SLIDESHOW
        marcadorCont=0
        marcadorAtual=document.getElementsByClassName('base')[marcadorCont]
        marcadorAtual.classList.add('mAtivo')
    }else if(marcadorCont < 0){
        marcadorCont=(document.getElementsByClassName('base').length-1)
        marcadorAtual=document.getElementsByClassName('base')[marcadorCont]
        marcadorAtual.classList.add('mAtivo')
    }else{
        marcadorAtual=document.getElementsByClassName('base')[marcadorCont]
        marcadorAtual.classList.add('mAtivo')
    }
 
    slideAtual.classList.remove('slideAtivo') //BLOCO DE CONFIGURAÇÃO DOS PASSADORES DO SLIDESHOW 
    slideContador+=referencia_de_incremento_do_slide
    if (slideContador > (document.getElementsByClassName('dvSlide').length - 1)){
        slideContador=0
        slideAtual=document.getElementsByClassName('dvSlide')[slideContador]
        slideAtual.classList.add('slideAtivo')
    } else if (slideContador < 0){
        slideContador=(document.getElementsByClassName('dvSlide').length - 1)
        slideAtual=document.getElementsByClassName('dvSlide')[slideContador]
        slideAtual.classList.add('slideAtivo')
    }else{
        slideAtual=document.getElementsByClassName('dvSlide')[slideContador]
        slideAtual.classList.add('slideAtivo')
    }
}

function mudaViaMarc (num){ //FUNÇÃO PARA PASSAR O SLIDE AO CLICAR NO MARCADOR DE BOLINHA
    slideAtual.classList.remove('slideAtivo') //O DIVSLIDE QUE TB SEJA O SLIDEATIVO PERDE A 2a CLASSE E RCB DISPLAY:NONE DE VOLTA
    marcadorAtual.classList.remove('mAtivo')//O BASE QUE TB SEJA O mATIVO, PERDE A 2a CLASSE E RCB FORMATAÇÃO PARA PERDER O DESTAQUE
    slideAtual=document.getElementsByClassName('dvSlide')[num] // seleciona o dvSlide que é chamado pela função no html - "mudaViaMarc[2]" por ex.
    slideAtual.classList.add('slideAtivo') //dá a visibilidade aquele dvSlide que a função chamou no html 
    marcadorAtual=document.getElementsByClassName('base')[num] // faz o mesmo acima só que nas bolinhas do marcador
    marcadorAtual.classList.add('mAtivo')   
}

function showComments(){ // FUNÇÃO PARA DESOCULTAR/OCULTAR A SEÇÃO DE COMENTÁRIOS
    let commentsSection=document.getElementById('commentsSection') 
    let commentsSection_children=commentsSection.children  // VIROU VETOR DOS FILHOS DE COMMENTSSECTION
    let commentsSection_children_Length=commentsSection_children.length  // A QTD DE FILHOS QUE COMMENTSSECTION POSSUI
    if (commentsSection.style.maxHeight=="0px"){ //CICLO FOR PARA VERIFICAÇÃO SE O COMMENTSSECTION ESTÁ OCULTO OU NÃO  
        commentsSection.style.maxHeight="fit-content" 
        for (i=0; i<commentsSection_children_Length; i++){
            commentsSection_children[i].style.display="block"
        }
    }else{
        commentsSection.style.maxHeight="0px"
        for (i=0; i<commentsSection_children_Length; i++){
            commentsSection_children[i].style.display="none"
        }
    } 
}  

    function showResponses(num){
        let a=document.getElementById(num).parentElement.id //selecionei o nome do id do elemento pai
        let b=document.getElementById(a) //selecionei o elemento pai pelo id anteriormente conseguido
        if (b.style.maxHeight=="200px"){
            b.style.maxHeight="fit-content"
            let c=b.children //ESTÁ USANDO O FATO DE MOTOCOMENTARIOS ESTAREM ANINHADOS  --> MUDAR
            for (i=4;i<c.length; i++){
                c[i].style.display="block" //selecionei os filhos do motorComentario em questao a partir do 5o (que no caso são apenas as motorComentario, pq antes são os elementos de composição da motorComentário em questão) 
            } 
        }else{
            b.style.maxHeight="200px"
            let c=b.children // os filhos do elemento motorComentario que está sendo alterado
            for (i=4;i<c.length; i++){
                c[i].style.display="none" //selecionei os filhos do motorComentario em questao a partir do 5o (que no caso são apenas as motorComentario, pq antes são os elementos de composição da motorComentário em questão) 
            }
        } 
    }    

function toggleComments(){ 
    let divs_commentUnit=document.getElementsByClassName('commentUnit') //criei um array com as divs commentUnit
        for (let i=0;i<divs_commentUnit.length; i++){
            let commentUnit_children=divs_commentUnit[i].children //commentUnit_children é o array com os filhos de cada motorComentário
            let commentUnit_children_length=commentUnit_children.length //<c> é a qtd de endereçamentos do vetor 'b'
            if (commentUnit_children_length==5){ //O que quer dizer que ele só tem os 5 child básicos de um commentUnit sem resposta.
                commentUnit_children[2].innerHTML="" // #btnReply em [i] fica sem innerHTML
            }else{ 
                commentUnit_children[2].innerHTML="Replies("+(commentUnit_children_length-5)+ ")" // #btnReply em [i] fica com o número correto de respostas.
            }
    }   
}

function descurtir(btnId){
    let dislikeBtn=document.getElementById(btnId) //Identifiquei o id do botão de like
    let painelBtns=dislikeBtn.parentNode //Identifiquei o seu parentNode
    let painelBtns_nodes=painelBtns.childNodes //Identifiquei os nodeChild do seu pai (seus irmãos)
    let dislikeBtn_string=painelBtns_nodes[4].nodeValue //valor como string
    let dislikeBtn_numberString=dislikeBtn_string.replace(/"/g, '') //Retiro as aspas da string (era:"0")
    if(dislikeSwitch==false){
        let result=parseInt(dislikeBtn_numberString, 10) // Transiciono o tipo de variável parseInt= Para inteiro (valor de variável, base (10,8,2,16, etc..))
        result+=1  // incremento o valor que, agora, é inteiro (ele =  a ele mesmo mais um)
        painelBtns_nodes[4].nodeValue=result //mando o valor inteiro para o node o que o faz passar de inteiro para string, fazendo o caminho de volta
        dislikeBtn.src="imgs/dislike2.png"
        dislikeBtn.style.width="22%"
        dislikeBtn.style.height="100%"
        painelBtns_nodes[1].removeAttribute('onclick')
        dislikeSwitch=true  
    } else{
        let result=parseInt(dislikeBtn_numberString, 10)
        result-=1
        painelBtns_nodes[4].nodeValue=result
        dislikeBtn.src="imgs/dislike.png"
        let NEWATTRIBUTE_onclick=document.createAttribute('onclick')
        NEWATTRIBUTE_onclick.value="curtir(this.id)"
        painelBtns_nodes[1].setAttributeNode(NEWATTRIBUTE_onclick)
        dislikeSwitch=false
    }
}

function curtir(btnId){
    let likeBtn=document.getElementById(btnId) //Identifiquei o id do botão de like
    let painelBtns=likeBtn.parentNode //Identifiquei o seu parentNode
    let painelBtns_nodes=painelBtns.childNodes //Identifiquei os nodeChild do seu pai (seus irmãos)
    let likeBtn_string=painelBtns_nodes[2].nodeValue //valor como string
    let likeBtn_numberString=likeBtn_string.replace(/"/g, '') //Retiro as aspas da string (era:"0")

    if(likeBtn_numberString == 0){ //motivo de dúvida: COMO ESSE VALOR É UM NUMBER, ELE NÃO PRECISA ESTAR ENTRE ASPAS. ESTAVA ENTRE ASPAS E ISSO CAUSAV EU PRECISAR DAR UM CLIQUE DUPLO INICIALMENTE
        let result=parseInt(likeBtn_numberString, 10) // Transiciono o tipo de variável parseInt= Para inteiro (valor de variável, base (10,8,2,16, etc..))
        result+=1  // incremento o valor que, agora, é inteiro (ele =  a ele mesmo mais um)
        painelBtns_nodes[2].nodeValue=result //mando o valor inteiro para o node o que o faz passar de inteiro para string, fazendo o caminho de volta
        likeBtn.src="imgs/like2.png"
        likeBtn.style.width="22%"
        likeBtn.style.height="100%"
        painelBtns_nodes[3].removeAttribute('onclick')
    }else{
        painelBtns_nodes[2].nodeValue="0"
        likeBtn.src="imgs/like.png"
        let onclick_atribute=document.createAttribute('onclick')
        onclick_atribute.value="descurtir(this.id)"
        painelBtns_nodes[3].setAttributeNode(onclick_atribute) 
        }
    }

function comentarGeral(){
    let mensagem=document.getElementById('areaComment').value  //====>  BLOCO DE CRIAÇÃO DE ELEMENTOS, ATRIBUTOS E VALORES <======
    if (mensagem != ''){
        let a=document.createElement('div') //div pai motorComentario
        let b=document.createAttribute('class')
        b.value="motorComentario"
        let c=document.createAttribute('style')
        c.value="max-height:140px"
        let d=document.createAttribute('id')
        d.value="i" + contD
        let e1=document.createElement('span')
        e1.innerHTML="User "
        let e2=document.createAttribute('class')
        e2.value="nickname"
        let e=document.createElement('h5') //h5 
        e.innerHTML="says:"
        let e3=document.createAttribute('class')
        e3.value=""
        let f=document.createElement('span') //span
        f.innerHTML="qqr coisa"
        let g=document.createAttribute('class')
        g.value="nickname"
        let h=document.createElement('section') //section
        h.innerHTML=mensagem
        let i=document.createAttribute('class')
        i.value="commentField"
        let j=document.createElement('div') //div botao de respostas
        let k=document.createAttribute('class')
        k.value="btnReply"
        let l=document.createAttribute('id')
        l.value="i_reply" + contR
        let m=document.createAttribute('onclick')
        m.value="showResponses(this.id)"
        let n=document.createElement('div') //div painel de botões
        let o=document.createAttribute('class')
        o.value="painelBtns"
        let p=document.createAttribute('id')
        p.value="bt"+contD
        let q=document.createElement('img') //img like
        let r=document.createAttribute('src')
        r.value="imgs/like.png"
        let s=document.createAttribute('alt')
        s.value="botao_de_like"
        let s1=document.createAttribute('onclick')
        s1.value="curtir(this.id)"
        let t=document.createElement('img') // img dislike
        let u=document.createAttribute('src')
        u.value="imgs/dislike.png"
        let v=document.createAttribute('alt')
        v.value="botao_de_dislike"
        let v1=document.createAttribute('onclick')
        v1.value="descurtir(this.id)"
        let w =document.createElement('img') //img responder
        let x=document.createAttribute('src')
        x.value="imgs/reply.png"
        let y=document.createAttribute('alt')
        y.value="botao_de_reply"
        let z=document.createAttribute('onclick')
        z.value="comentarInicio(this.parentElement.id)"
        let a1=document.createElement('hr')


        
        
        a.setAttributeNode(b) //=======> BLOCO DE ATRIBUIÇÃO DE PARÂMETROS NO ELEMENTOS <======== 
        a.setAttributeNode(c) // atribuindo atributos já valorados a div motorComentário
        a.setAttributeNode(d)

        e.setAttributeNode(e3)
        e1.setAttributeNode(e2)

        f.setAttributeNode(g)

        h.setAttributeNode(i)

        j.setAttributeNode(k)
        j.setAttributeNode(l)
        j.setAttributeNode(m)

        n.setAttributeNode(o)
        n.setAttributeNode(p)

        q.setAttributeNode(r)
        q.setAttributeNode(s)
        q.setAttributeNode(s1)

        t.setAttributeNode(u)
        t.setAttributeNode(v)
        t.setAttributeNode(v1)

        w.setAttributeNode(x)
        w.setAttributeNode(y)
        w.setAttributeNode(z)

        let aa=document.getElementById('comSec') //Selecionei o o botão de enviar //=======> BLOCO DE INSERÇÃO E POSICIONAMENTO NA PÁGINA <=======
    
        a.appendChild(e) //coloquei os elementos dentro da div motorCmomentário começando pelo primeiro e terminando com o último, pq uso o método appendChild (joga no final do contâiner)
        a.appendChild(h)
        a.appendChild(j)
        a.appendChild(n)

        let e4=e.childNodes
        e.insertBefore(e1, e4[0])

        n.appendChild(q)
        n.appendChild(t)
        n.appendChild(w)

        aa.appendChild(a) //coloquei a div motorComentário no final do container comSec
        aa.appendChild(a1)
        toggleComments()
    }else{
    alert('Doh! Vc esqueceu de digitar (de novo)!')
    }
}

function comentarInicio(num){
    if(respostaOnOff== false){
        let j=document.createElement('label')     ///bloco de criação da label 'Resposta'
        j.innerHTML="Resposta:"
        let n=document.createAttribute('style')
        n.value="display:block;"
        let o=document.createAttribute('class')
        o.value="alinhaRESP"
        let v=document.createAttribute("id")
        v.value="lblResp"+ contR
        j.setAttributeNode(n)
        j.setAttributeNode(o)
        j.setAttributeNode(v)
        let a=document.createElement('textarea') ///bloco de criação do textarea
        let b=document.createAttribute('class')
        b.value="alinhaRESP"
        let c=document.createAttribute('id')
        c.value="areaComment" + contR
        let d=document.createAttribute('type')
        d.value="text"
        let e=document.createAttribute('name')
        e.value="f_resposta"
        let f=document.createAttribute('size')
        f.value="200"
        let g=document.createAttribute('style')
        g.value="display:block;"
        let h=document.createAttribute('maxlength')
        h.value=180
        let i=document.createAttribute('placeholder')
        i.value="Enter up to 150 characters"
        a.setAttributeNode(b)
        a.setAttributeNode(c)
        a.setAttributeNode(d)
        a.setAttributeNode(e)
        a.setAttributeNode(f)
        a.setAttributeNode(g)
        a.setAttributeNode(h)
        a.setAttributeNode(i)
        let p=document.createElement('button') //bloco de criação do botão
        p.innerHTML="Enviar"
        let q=document.createAttribute('class')
        q.value="alinhaRESP"
        let r=document.createAttribute('type')
        r.value="submit"
        let u=document.createAttribute('id')
        u.value="btnResp" + contR
        let z=document.createAttribute('onclick')
        z.value="comentarTermino(this.id)"
        p.setAttributeNode(q)
        p.setAttributeNode(r)
        p.setAttributeNode(u)
        p.setAttributeNode(z)
        
        let k=document.getElementById(num) //Selecionei o painel de botões     //BLOCO DE INSERÇÃO E POSICIONAMENTO NA PÁGINA
        let l=k.parentElement //selecionei o parentNode do painel de botões
        let m=k.nextSibling //selecionei o nextSibling do painel de botões
        l.insertBefore(j,m)  //inseri o elemento 'j', antes do elemento 'm'
        l.insertBefore(a,m) //inseri o elemento 'a', antes do elemento 'm'  //k.insertBefore(a,l) 'K' É O CONTÂINER, 'A' É O ELEMENTO NOVO E 'L' É ANTES DE QUEM ELE VAI SER CRIADO // k.appendChild(a)
        l.insertBefore(p,m) //inseri o elemento 'p', antes do elemento 'm'
        //let k=document.getElementById(num) //painel de botões
        //let l=k.parentNode //contâiner do painel => motorComentario (seu parentNode)
        // l.appendChild(a)
        l.style.maxHeight="fit-content"
        respostaOnOff=true
    }else{
        let s=document.getElementById('areaComment' + contR) //remoção da textarea        //BLOCO DE REMOÇÃO
        s.remove()

        let t=document.getElementById('btnResp' + contR) //remoção do botão
        t.remove()

        let x=document.getElementById('lblResp' + contR) //remoção do label
        x.remove()

        respostaOnOff=false
        contR++
    }
}

function comentarTermino(num){
    let mensagem=document.getElementById('areaComment'+contR).value  //====>  BLOCO DE CRIAÇÃO DE ELEMENTOS, ATRIBUTOS E VALORES <======
    let a=document.createElement('div') //div pai motorComentario
    let b=document.createAttribute('class')
    b.value="motorComentario"
    let c=document.createAttribute('style')
    c.value="max-height:140px"
    let d=document.createAttribute('id')
    d.value="i" + contD
    let e1=document.createElement('span')
    e1.innerHTML="User "
    let e2=document.createAttribute('class')
    e2.value="nickname"
    let e=document.createElement('h5') //h5 
    e.innerHTML="responded "
    let e3=document.createAttribute('class')
    e3.value="alnhaRESP"
    let f=document.createElement('span') //span
    f.innerHTML="qqr coisa"
    let g=document.createAttribute('class')
    g.value="nickname"
    let h=document.createElement('section') //section
    h.innerHTML=mensagem
    let i=document.createAttribute('class')
    i.value="areaResposta alnhaRESP"
    let j=document.createElement('div') //div botao de respostas
    let k=document.createAttribute('class')
    k.value="btnReply"
    let l=document.createAttribute('id')
    l.value="i_reply" + contR
    let m=document.createAttribute('onclick')
    m.value="showResponses(this.id)"
    let n=document.createElement('div') //div painel de botões
    let o=document.createAttribute('class')
    o.value="painelBtns alnhaRESP"
    let p=document.createAttribute('id')
    p.value="bt"+contD
    let q=document.createElement('img') //img like
    let r=document.createAttribute('src')
    r.value="imgs/like.png"
    let s=document.createAttribute('alt')
    s.value="botao_de_like"
    let t=document.createElement('img') // img dislike
    let u=document.createAttribute('src')
    u.value="imgs/dislike.png"
    let v=document.createAttribute('alt')
    v.value="botao_de_dislike"
    let w =document.createElement('img') //img responder
    let x=document.createAttribute('src')
    x.value="imgs/reply.png"
    let y=document.createAttribute('alt')
    y.value="botao_de_reply"
    let z=document.createAttribute('onclick')
    z.value="comentarInicio(this.parentElement.id)"
    

    a.setAttributeNode(b) //=======> BLOCO DE ATRIBUIÇÃO DE PARÂMETROS NO ELEMENTOS <======== 
    a.setAttributeNode(c) // atribuindo atributos já valorados a div motorComentário
    a.setAttributeNode(d)

    e.setAttributeNode(e3)
    e1.setAttributeNode(e2)

    f.setAttributeNode(g)

    h.setAttributeNode(i)

    j.setAttributeNode(k)
    j.setAttributeNode(l)
    j.setAttributeNode(m)

    n.setAttributeNode(o)
    n.setAttributeNode(p)

    q.setAttributeNode(r)
    q.setAttributeNode(s)

    t.setAttributeNode(u)
    t.setAttributeNode(v)

    w.setAttributeNode(x)
    w.setAttributeNode(y)
    w.setAttributeNode(z)

    let aa=document.getElementById(num) //Selecionei o o botão de enviar //=======> BLOCO DE INSERÇÃO E POSICIONAMENTO NA PÁGINA <=======
    let ab=aa.parentElement //selecionei a div pai do botão de enviar
     //selecionei a proxima sibling a partir do pai do botão de enviar (é um texto)

   
    a.appendChild(e) //coloquei os elementos dentro da div motorCmomentário começando pelo primeiro e terminando com o último, pq uso o método appendChild (joga no final do contâiner)
    a.appendChild(h)
    a.appendChild(j)
    a.appendChild(n)

    let e4=e.childNodes
    e.appendChild(f)
    e.insertBefore(e1, e4[0])

    n.appendChild(q)
    n.appendChild(t)
    n.appendChild(w)
    
    ab.appendChild(a) //coloquei a div motorComentário antes do next sibling de seu pai

    ad=document.getElementById('areaComment'+contR)
    ae=document.getElementById('btnResp'+contR)
    af=document.getElementById('lblResp'+contR)

    ad.remove()
    ae.remove()
    af.remove()

    contR++
    contD++
    respostaOnOff=false
    toggleComments()
}
// let ativo=document.activeElement
window.addEventListener("load", inicia)
window.onscroll=fixoNoTopo

