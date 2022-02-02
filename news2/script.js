let slideAtual   //BLOCO DE VARIÁVEIS E CONSTANTES GLOBAIS
let slideContador
let marcadorAtual
let marcadorCont
let contR=5
let contD=5
let contador_botao_likeDislike=5
const navRedes=document.getElementById('redesSociais')
const topoRedes=navRedes.offsetTop
let answerSwitch=new Boolean
let likeSwitch= new Boolean


function inicia(){  
    slideContador=0
    marcadorCont=0
    slideAtual=document.getElementsByClassName('dvSlide')[slideContador]
    marcadorAtual=document.getElementsByClassName('base')[marcadorCont]
    sorteiaAdd()
    toggleComments()
    answerSwitch=false
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
    var randomForContainer1=Math.round(Math.random()*2)  //BLOCO DE SORTEIO DA 1a IMAGEM DO BANNER DE PROPAGANDA 
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

function showComments(){ // FUNÇÃO PARA DESOCULTAR A SEÇÃO DE COMENTÁRIOS
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

function showResponses(num){ //FUNÇÃO PARA OCULTAR/DESOCULTAR RESPOSTAS DE COMENTÁRIOS
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
    let divs_commentUnit=document.getElementsByClassName('commentUnit') //CRIEI UM ARRAY COM OS ELEMENTOS DA CLASSE COMMENTUNIT
    for (let i=0;i<divs_commentUnit.length; i++){
        let commentUnit_children=divs_commentUnit[i].children // COMMENTUNIT_CHILDREN É O ARRAY COM OS FILHOS DE COMMENTUNIT EM [I]
        let commentUnit_children_length=commentUnit_children.length //COMMENTUNIT_CHILDREN_LENGTH É UMA VAR COM A QTD DE FILHOS DE CADA COMMENTUNIT
        if (commentUnit_children_length==4){ //O que quer dizer que ele só tem os 5 child básicos de um commentUnit sem resposta.
            commentUnit_children[2].innerHTML="" // #btnReply em [i] fica sem innerHTML
        }else{ 
            commentUnit_children[2].innerHTML="Replies("+(commentUnit_children_length-4)+ ")" // #btnReply em [i] fica com o número correto de respostas.
        }
    }   
}

function curtir(btnId){
    let likeBtn=document.getElementById(btnId) //Identifiquei o id do botão de like
    let painelBtns=likeBtn.parentNode //Identifiquei o seu parentNode
    let painelBtns_nodes=painelBtns.childNodes //Identifiquei os nodeChild do seu pai (seus irmãos)
    console.log(painelBtns_nodes)
    let likeBtn_string=painelBtns_nodes[2].nodeValue //valor como string
    let likeBtn_numberString=likeBtn_string.replace(/"/g, '') //Retiro as aspas da string (era:"0")

    if(likeBtn.style.width=="20%"){ //motivo de dúvida: COMO ESSE VALOR É UM NUMBER, ELE NÃO PRECISA ESTAR ENTRE ASPAS. ESTAVA ENTRE ASPAS E ISSO CAUSAV EU PRECISAR DAR UM CLIQUE DUPLO INICIALMENTE
        let result=parseInt(likeBtn_numberString, 10) // Transiciono o tipo de variável parseInt= Para inteiro (valor de variável, base (10,8,2,16, etc..))
        result+=1  // incremento o valor que, agora, é inteiro (ele =  a ele mesmo mais um)
        painelBtns_nodes[2].nodeValue=result //mando o valor inteiro para o node o que o faz passar de inteiro para string, fazendo o caminho de volta
        likeBtn.src="imgs/like2.png"
        likeBtn.style.width="22%"
        likeBtn.style.height="100%"
        painelBtns_nodes[3].removeAttribute('onclick')
        likeSwitch=true
    }else{
        let result=parseInt(likeBtn_numberString, 10)
        result-=1
        painelBtns_nodes[2].nodeValue=result
        likeBtn.src="imgs/like.png"
        let NEWATTRIBUTE_onclick=document.createAttribute('onclick')
        NEWATTRIBUTE_onclick.value="descurtir(this.id)"
        painelBtns_nodes[3].setAttributeNode(NEWATTRIBUTE_onclick) 
        likeBtn.style.width="20%"
        }
    }

function descurtir(btnId){
    const dislikeBtn=document.getElementById(btnId) //Identifiquei o id do botão de like
    const painelBtns=dislikeBtn.parentNode //Identifiquei o seu parentNode
    const painelBtns_nodes=painelBtns.childNodes //Identifiquei os nodeChild do seu pai (seus irmãos)
    const dislikeBtn_string=painelBtns_nodes[4].nodeValue //valor como string
    const dislikeBtn_numberString=dislikeBtn_string.replace(/"/g, '') //Retiro as aspas da string (era:"0")
    if(dislikeBtn.style.width=="20%"){ //característica de estilo que aponta para um estado do botão (não descurtido)
        let result=parseInt(dislikeBtn_numberString, 10) // Transiciono o tipo de variável parseInt= Para inteiro (valor de variável, base (10,8,2,16, etc..))
        result+=1  // incremento o valor que, agora, é inteiro (ele =  a ele mesmo mais um)
        painelBtns_nodes[4].nodeValue=result //mando o valor inteiro para o node o que o faz passar de inteiro para string, fazendo o caminho de volta
        dislikeBtn.src="imgs/dislike2.png"
        dislikeBtn.style.width="22%"
        dislikeBtn.style.height="100%"
        painelBtns_nodes[1].removeAttribute('onclick')
    } else{
        let result=parseInt(dislikeBtn_numberString, 10)
        result-=1
        painelBtns_nodes[4].nodeValue=result
        dislikeBtn.src="imgs/dislike.png"
        const NEWATTRIBUTE_onclick=document.createAttribute('onclick')
        NEWATTRIBUTE_onclick.value="curtir(this.id)"
        painelBtns_nodes[1].setAttributeNode(NEWATTRIBUTE_onclick)
        dislikeBtn.style.width="20%"
    }
}

function comentarGeral(){
    const message=document.getElementById('commentTextArea').value  //====>  BLOCO DE CRIAÇÃO DE ELEMENTOS, ATRIBUTOS E VALORES <======
    if (message != ''){
        const NEWELEMENT_div_commentUnit=document.createElement('div') //div commentUnit
        const NEWATTRIBUTE_class_commentUnit=document.createAttribute('class')
        NEWATTRIBUTE_class_commentUnit.value="commentUnit"
        const NEWATTRIBUTE_style_maxHeight140=document.createAttribute('style')
        NEWATTRIBUTE_style_maxHeight140.value="max-height:fit-content"
        const NEWATTRIBUTE_id_iCont=document.createAttribute('id')
        NEWATTRIBUTE_id_iCont.value="i" + contD
        const NEWELEMENT_span_user=document.createElement('span')//span
        NEWELEMENT_span_user.innerHTML="User "
        const NEWATTRIBUTE_class_nickname=document.createAttribute('class')
        NEWATTRIBUTE_class_nickname.value="nickname"
        const NEWELEMENT_h5=document.createElement('h5') //h5 
        NEWELEMENT_h5.innerHTML=" says:"
        const NEWELEMENT_span_answer=document.createElement('span') //span
        NEWELEMENT_span_answer.innerHTML="qqr coisa"
        const NEWATTRIBUTE_class_nickname2=document.createAttribute('class')
        NEWATTRIBUTE_class_nickname2.value="nickname"
        const NEWELEMENT_section=document.createElement('section') //section
        NEWELEMENT_section.innerHTML=message
        const NEWATTRIBUTE_class_commentArea=document.createAttribute('class')
        NEWATTRIBUTE_class_commentArea.value="commentField"
        const NEWELEMENT_div_showReplies_btn=document.createElement('div') //div botao de respostas
        const NEWATTRIBUTE_class_showReplies_btn=document.createAttribute('class')
        NEWATTRIBUTE_class_showReplies_btn.value="ShowReplies_Btn"
        const NEWATTRIBUTE_id_i_reply=document.createAttribute('id')
        NEWATTRIBUTE_id_i_reply.value="i_reply" + contR
        const NEWATTRIBUTE_onclick_showResponses=document.createAttribute('onclick')
        NEWATTRIBUTE_onclick_showResponses.value="showResponses(this.id)"
        const NEWELEMENT_div_painelBtns=document.createElement('div') //painelBtns
        const NEWATTRIBUTE_alignRight=document.createAttribute('class')
        NEWATTRIBUTE_alignRight.value="alignRight"
        const NEWATTRIBUTE_class_painelBtns=document.createAttribute('class')
        NEWATTRIBUTE_class_painelBtns.value="painelBtns"
        const NEWATTRIBUTE_id_bt_cont=document.createAttribute('id')
        NEWATTRIBUTE_id_bt_cont.value="bt"+contR
        const NEWELEMENT_img_likeBtn=document.createElement('img') //img like
        const NEWATTRIBUTE_src_likeBtn=document.createAttribute('src')
        NEWATTRIBUTE_src_likeBtn.value="imgs/like.png"
        const NEWATTRIBUTE_alt_likeBtn=document.createAttribute('alt')
        NEWATTRIBUTE_alt_likeBtn.value="like_button"
        const NEWATTRIBUTE_onclick_curtir=document.createAttribute('onclick')
        NEWATTRIBUTE_onclick_curtir.value="curtir(this.id)"
        const NEWATTRIBUTE_id_likeBtn=document.createAttribute('id')
        NEWATTRIBUTE_id_likeBtn.value="likeBtn" + contador_botao_likeDislike
        let NEWATTRIBUTE_style_width20=document.createAttribute('style')
        NEWATTRIBUTE_style_width20.value="width:20%"
        const NEWELEMENT_img_dislikeBtn=document.createElement('img') // img dislike
        const NEWATTRIBUTE_src_dislikeBtn=document.createAttribute('src')
        NEWATTRIBUTE_src_dislikeBtn.value="imgs/dislike.png"
        const NEWATTRIBUTE_alt_dislikeBtn=document.createAttribute('alt')
        NEWATTRIBUTE_alt_dislikeBtn.value="dislikeBtn"
        const NEWATTRIBUTE_onclick_descurtir=document.createAttribute('onclick')
        NEWATTRIBUTE_onclick_descurtir.value="descurtir(this.id)"
        const NEWATTRIBUTE_id_dislikeBtn=document.createAttribute('id')
        NEWATTRIBUTE_id_dislikeBtn.value="dislikeBtn" + contador_botao_likeDislike 
        const NEWELEMENT_img_reply=document.createElement('img') //img responder
        const NEWATTRIBUTE_src_reply=document.createAttribute('src')
        const NEWATTRIBUTE_class_ShowReplies_Btn=document.createAttribute('class')
        NEWATTRIBUTE_class_ShowReplies_Btn.value="ShowReplies_Btn"
        NEWATTRIBUTE_src_reply.value="imgs/reply.png"
        const NEWATTRIBUTE_alt_reply=document.createAttribute('alt')
        NEWATTRIBUTE_alt_reply.value="dislike_button"
        const NEWATTRIBUTE_onclick_comentarInicio=document.createAttribute('onclick')
        NEWATTRIBUTE_onclick_comentarInicio.value="comentarInicio(this.parentElement.id)"
        let NEWATTRIBUTE_style_width20percent=document.createAttribute('style')
        NEWATTRIBUTE_style_width20percent.value="width:20%"

         //=======> BLOCO DE ATRIBUIÇÃO DE PARÂMETROS NO ELEMENTOS <======== 
        
        NEWELEMENT_div_commentUnit.setAttributeNode(NEWATTRIBUTE_class_commentUnit)
        NEWELEMENT_div_commentUnit.setAttributeNode(NEWATTRIBUTE_style_maxHeight140) 
        NEWELEMENT_div_commentUnit.setAttributeNode(NEWATTRIBUTE_id_iCont)

        NEWELEMENT_span_user.setAttributeNode(NEWATTRIBUTE_class_nickname)
        NEWELEMENT_span_answer.setAttributeNode(NEWATTRIBUTE_class_nickname2)

        NEWELEMENT_section.setAttributeNode(NEWATTRIBUTE_class_commentArea)

        NEWELEMENT_div_showReplies_btn.setAttributeNode(NEWATTRIBUTE_id_i_reply)
        NEWELEMENT_div_showReplies_btn.setAttributeNode(NEWATTRIBUTE_class_showReplies_btn)
        NEWELEMENT_div_showReplies_btn.setAttributeNode(NEWATTRIBUTE_onclick_showResponses)

        NEWELEMENT_div_painelBtns.setAttributeNode(NEWATTRIBUTE_class_painelBtns)
        NEWELEMENT_div_painelBtns.setAttributeNode(NEWATTRIBUTE_id_bt_cont)
        

        NEWELEMENT_img_likeBtn.setAttributeNode(NEWATTRIBUTE_src_likeBtn)
        NEWELEMENT_img_likeBtn.setAttributeNode(NEWATTRIBUTE_alt_likeBtn)
        NEWELEMENT_img_likeBtn.setAttributeNode(NEWATTRIBUTE_onclick_curtir)
        NEWELEMENT_img_likeBtn.setAttributeNode(NEWATTRIBUTE_id_likeBtn)
        NEWELEMENT_img_likeBtn.setAttributeNode(NEWATTRIBUTE_style_width20)


        NEWELEMENT_img_dislikeBtn.setAttributeNode(NEWATTRIBUTE_src_dislikeBtn)
        NEWELEMENT_img_dislikeBtn.setAttributeNode(NEWATTRIBUTE_alt_dislikeBtn)
        NEWELEMENT_img_dislikeBtn.setAttributeNode(NEWATTRIBUTE_onclick_descurtir)
        NEWELEMENT_img_dislikeBtn.setAttributeNode(NEWATTRIBUTE_id_dislikeBtn)
        NEWELEMENT_img_dislikeBtn.setAttributeNode(NEWATTRIBUTE_style_width20percent)


        NEWELEMENT_img_reply.setAttributeNode(NEWATTRIBUTE_src_reply)
        NEWELEMENT_img_reply.setAttributeNode(NEWATTRIBUTE_alt_reply)
        NEWELEMENT_img_reply.setAttributeNode(NEWATTRIBUTE_onclick_comentarInicio)


        //=======> BLOCO DE INSERÇÃO E POSICIONAMENTO NA PÁGINA <=======
    
        NEWELEMENT_div_commentUnit.appendChild(NEWELEMENT_h5) //coloquei os elementos dentro da div COMMENTUNIT começando pelo primeiro e terminando com o último, pq uso o método appendChild (joga no final do contâiner)
        NEWELEMENT_div_commentUnit.appendChild(NEWELEMENT_section)
        NEWELEMENT_div_commentUnit.appendChild(NEWELEMENT_div_showReplies_btn)
        NEWELEMENT_div_commentUnit.appendChild(NEWELEMENT_div_painelBtns)

        NEWELEMENT_h5_childNodes=NEWELEMENT_h5.childNodes
        NEWELEMENT_h5.insertBefore(NEWELEMENT_span_answer, NEWELEMENT_h5_childNodes[0]) //<h5> <span> User </span>(o que entra) says:(node 0)

        NEWELEMENT_div_painelBtns.appendChild(NEWELEMENT_img_likeBtn)
        NEWELEMENT_div_painelBtns.appendChild(NEWELEMENT_img_dislikeBtn)
        NEWELEMENT_div_painelBtns.appendChild(NEWELEMENT_img_reply)

        const commentsSection=document.getElementById('commentsSection')
        const labelNewComment=document.getElementsByTagName('label')[0]

        commentsSection.insertBefore(NEWELEMENT_div_commentUnit, labelNewComment) //coloquei a div COMMENTUNIT pronta no final do container commenstSection
        document.getElementById('commentTextArea').value=""
     
        const painelBtns=document.getElementById('bt'+ contR) // Bloco de inserção do TEXTNODE nos botões de like e dislike
        const painelBtns_childNodes=painelBtns.childNodes
        const valueLike=document.createTextNode("0")
        painelBtns.insertBefore(valueLike, painelBtns_childNodes[1])
        const valueDislike=document.createTextNode("0")
        painelBtns.insertBefore(valueDislike, painelBtns_childNodes[3])
        const fixingNode=document.createTextNode("")
        painelBtns.insertBefore(fixingNode, painelBtns_childNodes[0])
        
        contR++
        contador_botao_likeDislike++
        contD++
        toggleComments()

    }else{
    alert('Doh! Vc esqueceu de digitar (de novo)!')
    }
}

function comentarInicio(num){
    if(answerSwitch== false){
        //BLOCO DE CRIAÇÃO DE ELEMENTOS E ATRIBUTOS
        const NEWELEMENT_label=document.createElement('label')     ///bloco de criação da label 'Reply'
        NEWELEMENT_label.innerHTML="Reply:"
        let NEWATTRIBUTE_style_displayBlock=document.createAttribute('style')
        NEWATTRIBUTE_style_displayBlock.value="display:block;"
        const NEWATTRIBUTE_id_labelReply=document.createAttribute("id")
        NEWATTRIBUTE_id_labelReply.value="labelReply"+ contR
        
        const NEWELEMENT_textArea=document.createElement('textarea') ///bloco de criação do textarea
        const NEWATTRIBUTE_id_areaComment=document.createAttribute('id')
        NEWATTRIBUTE_id_areaComment.value="areaComment" + contR
        const NEWATTRIBUTE_type_text=document.createAttribute('type')
        NEWATTRIBUTE_type_text.value="text"
        const NEWATTRIBUTE_name=document.createAttribute('name')
        NEWATTRIBUTE_name.value="f_resposta"
        const NEWATTRIBUTE_size=document.createAttribute('size')
        NEWATTRIBUTE_size.value="200"
        const NEWATTRIBUTE_style_displayBlock2=document.createAttribute('style')
        NEWATTRIBUTE_style_displayBlock2.value="display:block;"
        const NEWATTRIBUTE_style_maxLength=document.createAttribute('maxlength')
        NEWATTRIBUTE_style_maxLength.value=180
        const NEWATTRIBUTE_placeholder=document.createAttribute('placeholder')
        NEWATTRIBUTE_placeholder.value="Enter up to 150 characters"

        const NEWELEMENT_button=document.createElement('button') //bloco de criação do botão
        NEWELEMENT_button.innerHTML="Enviar"
        const NEWATTRIBUTE_class_alignRight3=document.createAttribute('class')
        NEWATTRIBUTE_class_alignRight3.value="alignRight"
        const NEWATTRIBUTE_type=document.createAttribute('type')
        NEWATTRIBUTE_type.value="submit"
        const NEWATTRIBUTE_id_replyThis=document.createAttribute('id')
        NEWATTRIBUTE_id_replyThis.value="replyThis" + contR
        const NEWATTRIBUTE_onclick=document.createAttribute('onclick')
        NEWATTRIBUTE_onclick.value="comentarTermino(this.id)"

        //BLOCO DE ATRIBUIÇÃO DOS ATRIBUTOS

        NEWELEMENT_button.setAttributeNode(NEWATTRIBUTE_type)
        NEWELEMENT_button.setAttributeNode(NEWATTRIBUTE_id_replyThis)
        NEWELEMENT_button.setAttributeNode(NEWATTRIBUTE_onclick)

        NEWELEMENT_label.setAttributeNode(NEWATTRIBUTE_style_displayBlock)
        NEWELEMENT_label.setAttributeNode(NEWATTRIBUTE_id_labelReply)

        NEWELEMENT_textArea.setAttributeNode(NEWATTRIBUTE_id_areaComment)
        NEWELEMENT_textArea.setAttributeNode(NEWATTRIBUTE_type_text)
        NEWELEMENT_textArea.setAttributeNode(NEWATTRIBUTE_name)
        NEWELEMENT_textArea.setAttributeNode(NEWATTRIBUTE_size)
        NEWELEMENT_textArea.setAttributeNode(NEWATTRIBUTE_style_displayBlock2)
        NEWELEMENT_textArea.setAttributeNode(NEWATTRIBUTE_style_maxLength)
        NEWELEMENT_textArea.setAttributeNode(NEWATTRIBUTE_placeholder)
        
        const painelBtns=document.getElementById(num) //Selecionei o painel de botões     //BLOCO DE INSERÇÃO E POSICIONAMENTO NA PÁGINA
        const commentUnit=painelBtns.parentElement //selecionei o parentNode do painel de botões
        const commentUnit_children=commentUnit.children //selecionei o nextSibling do painel de botões
        const commentUnit_children_length=commentUnit_children.length
        const commentUnit_hr=commentUnit_children[commentUnit_children_length]
        commentUnit.appendChild(NEWELEMENT_label)  //inseri o elemento 'j', antes do elemento 'm'
        commentUnit.appendChild(NEWELEMENT_textArea) //inseri o elemento 'a', antes do elemento 'm'  //k.insertBefore(a,l) 'K' É O CONTÂINER, 'A' É O ELEMENTO NOVO E 'L' É ANTES DE QUEM ELE VAI SER CRIADO // k.appendChild(a)
        commentUnit.appendChild(NEWELEMENT_button) //inseri o elemento 'p', antes do elemento 'm'
        
        commentUnit.style.maxHeight="fit-content"
        answerSwitch=true
    }else{ //BLOCO DE REMOÇÃO
        const labelReply=document.getElementById('labelReply' + contR) //remoção do label
        labelReply.remove()

        const textArea=document.getElementById('areaComment' + contR) //remoção da textarea        
        textArea.remove()

        const replyBtn=document.getElementById('replyThis' + contR) //remoção do botão
        replyBtn.remove()
        answerSwitch=false
    }
    
}

function comentarTermino(num){
    let message=document.getElementById('areaComment'+contR).value
    if (message != ''){
        //====================> BLOCO DE CRIAÇÃO DE ELEMENTOS E ATRIBUTOS <====================================================================
        const NEWELEMENT_div_commentUnit=document.createElement('div') //div commentUnit
        const NEWATTRIBUTE_class_commentUnit=document.createAttribute('class')
        NEWATTRIBUTE_class_commentUnit.value="commentUnit floatRight"
        const NEWATTRIBUTE_class_alignRight5=document.createAttribute('class')
        NEWATTRIBUTE_class_alignRight5.value="alignRight"
        const NEWATTRIBUTE_style_maxHeight140=document.createAttribute('style')
        NEWATTRIBUTE_style_maxHeight140.value="max-height:fit-content"
        const NEWATTRIBUTE_id_iCont=document.createAttribute('id')
        NEWATTRIBUTE_id_iCont.value="i" + contD
        const NEWELEMENT_span_user=document.createElement('span')//span
        NEWELEMENT_span_user.innerHTML="User "
        const NEWATTRIBUTE_class_nickname=document.createAttribute('class')
        NEWATTRIBUTE_class_nickname.value="nickname"
        const NEWELEMENT_h5=document.createElement('h5') //h5 
        NEWELEMENT_h5.innerHTML=" says:"
        const NEWELEMENT_span_answer=document.createElement('span') //span
        NEWELEMENT_span_answer.innerHTML="User"
        const NEWATTRIBUTE_class_nickname2=document.createAttribute('class')
        NEWATTRIBUTE_class_nickname2.value="nickname"
        const NEWELEMENT_section=document.createElement('section') //section
        NEWELEMENT_section.innerHTML=message
        const NEWATTRIBUTE_class_commentArea=document.createAttribute('class')
        NEWATTRIBUTE_class_commentArea.value="commentField_reply"
        const NEWELEMENT_div_showReplies_btn=document.createElement('div') //div botao de respostas
        const NEWATTRIBUTE_class_showReplies_btn=document.createAttribute('class')
        NEWATTRIBUTE_class_showReplies_btn.value="ShowReplies_Btn"
        const NEWATTRIBUTE_id_i_reply=document.createAttribute('id')
        NEWATTRIBUTE_id_i_reply.value="i_reply" + contR
        const NEWATTRIBUTE_onclick_showResponses=document.createAttribute('onclick')
        NEWATTRIBUTE_onclick_showResponses.value="showResponses(this.id)"
        const NEWELEMENT_div_painelBtns=document.createElement('div') //painelBtns
        const NEWATTRIBUTE_alignRight=document.createAttribute('class')
        NEWATTRIBUTE_alignRight.value="alignRight"
        const NEWATTRIBUTE_class_painelBtns=document.createAttribute('class')
        NEWATTRIBUTE_class_painelBtns.value="painelBtns"
        const NEWATTRIBUTE_id_bt_cont=document.createAttribute('id')
        NEWATTRIBUTE_id_bt_cont.value="bt"+ contador_botao_likeDislike
        const NEWELEMENT_img_likeBtn=document.createElement('img') //img like
        const NEWATTRIBUTE_src_likeBtn=document.createAttribute('src')
        NEWATTRIBUTE_src_likeBtn.value="imgs/like.png"
        const NEWATTRIBUTE_alt_likeBtn=document.createAttribute('alt')
        NEWATTRIBUTE_alt_likeBtn.value="like_button"
        const NEWATTRIBUTE_onclick_curtir=document.createAttribute('onclick')
        NEWATTRIBUTE_onclick_curtir.value="curtir(this.id)"
        const NEWATTRIBUTE_id_likeBtn=document.createAttribute('id')
        NEWATTRIBUTE_id_likeBtn.value="likeBtn" + contador_botao_likeDislike
        let NEWATTRIBUTE_style_width20=document.createAttribute('style')
        NEWATTRIBUTE_style_width20.value="width:20%"
        const NEWELEMENT_img_dislikeBtn=document.createElement('img') // img dislike
        const NEWATTRIBUTE_src_dislikeBtn=document.createAttribute('src')
        NEWATTRIBUTE_src_dislikeBtn.value="imgs/dislike.png"
        const NEWATTRIBUTE_alt_dislikeBtn=document.createAttribute('alt')
        NEWATTRIBUTE_alt_dislikeBtn.value="dislikeBtn"
        const NEWATTRIBUTE_onclick_descurtir=document.createAttribute('onclick')
        NEWATTRIBUTE_onclick_descurtir.value="descurtir(this.id)"
        const NEWATTRIBUTE_id_dislikeBtn=document.createAttribute('id')
        NEWATTRIBUTE_id_dislikeBtn.value="dislikeBtn" + contador_botao_likeDislike 
        const NEWELEMENT_img_reply=document.createElement('img') //img responder
        const NEWATTRIBUTE_src_reply=document.createAttribute('src')
        NEWATTRIBUTE_src_reply.value="imgs/reply.png"
        const NEWATTRIBUTE_alt_reply=document.createAttribute('alt')
        NEWATTRIBUTE_alt_reply.value="dislike_button"
        const NEWATTRIBUTE_onclick_comentarInicio=document.createAttribute('onclick')
        NEWATTRIBUTE_onclick_comentarInicio.value="comentarInicio(this.parentElement.id)"
        const NEWATTRIBUTE_id_sendReply=document.createAttribute('id')
        NEWATTRIBUTE_id_sendReply.value="sendReply" + contador_botao_likeDislike
        let NEWATTRIBUTE_style_width20percent=document.createAttribute('style')
        NEWATTRIBUTE_style_width20percent.value="width:20%"

         //==================> BLOCO DE ATRIBUIÇÃO DOS NOVOS PARÂMETROS NOS NOVOS ELEMENTOS CRIADOS <=================================================================
        
        NEWELEMENT_div_commentUnit.setAttributeNode(NEWATTRIBUTE_class_commentUnit)
        // NEWELEMENT_div_commentUnit.setAttributeNode(NEWATTRIBUTE_class_alignRight5)
        NEWELEMENT_div_commentUnit.setAttributeNode(NEWATTRIBUTE_style_maxHeight140) 
        NEWELEMENT_div_commentUnit.setAttributeNode(NEWATTRIBUTE_id_iCont)

        NEWELEMENT_span_user.setAttributeNode(NEWATTRIBUTE_class_nickname)
        NEWELEMENT_span_answer.setAttributeNode(NEWATTRIBUTE_class_nickname2)

        NEWELEMENT_section.setAttributeNode(NEWATTRIBUTE_class_commentArea)

        NEWELEMENT_div_showReplies_btn.setAttributeNode(NEWATTRIBUTE_id_i_reply)
        NEWELEMENT_div_showReplies_btn.setAttributeNode(NEWATTRIBUTE_class_showReplies_btn)
        NEWELEMENT_div_showReplies_btn.setAttributeNode(NEWATTRIBUTE_onclick_showResponses)

        NEWELEMENT_div_painelBtns.setAttributeNode(NEWATTRIBUTE_class_painelBtns)
        NEWELEMENT_div_painelBtns.setAttributeNode(NEWATTRIBUTE_id_bt_cont)
        
        NEWELEMENT_img_likeBtn.setAttributeNode(NEWATTRIBUTE_src_likeBtn)
        NEWELEMENT_img_likeBtn.setAttributeNode(NEWATTRIBUTE_alt_likeBtn)
        NEWELEMENT_img_likeBtn.setAttributeNode(NEWATTRIBUTE_onclick_curtir)
        NEWELEMENT_img_likeBtn.setAttributeNode(NEWATTRIBUTE_id_likeBtn)
        NEWELEMENT_img_likeBtn.setAttributeNode(NEWATTRIBUTE_style_width20)

        NEWELEMENT_img_dislikeBtn.setAttributeNode(NEWATTRIBUTE_src_dislikeBtn)
        NEWELEMENT_img_dislikeBtn.setAttributeNode(NEWATTRIBUTE_alt_dislikeBtn)
        NEWELEMENT_img_dislikeBtn.setAttributeNode(NEWATTRIBUTE_onclick_descurtir)
        NEWELEMENT_img_dislikeBtn.setAttributeNode(NEWATTRIBUTE_id_dislikeBtn)
        NEWELEMENT_img_dislikeBtn.setAttributeNode(NEWATTRIBUTE_style_width20percent)

        NEWELEMENT_img_reply.setAttributeNode(NEWATTRIBUTE_src_reply)
        NEWELEMENT_img_reply.setAttributeNode(NEWATTRIBUTE_alt_reply)
        NEWELEMENT_img_reply.setAttributeNode(NEWATTRIBUTE_onclick_comentarInicio)
        NEWELEMENT_img_reply.setAttributeNode(NEWATTRIBUTE_id_sendReply)

        //========================> BLOCO DE INSERÇÃO E POSICIONAMENTO NA PÁGINA <=========================================================
    
        NEWELEMENT_div_commentUnit.appendChild(NEWELEMENT_h5) 
        NEWELEMENT_div_commentUnit.appendChild(NEWELEMENT_section)
        NEWELEMENT_div_commentUnit.appendChild(NEWELEMENT_div_showReplies_btn)
        NEWELEMENT_div_commentUnit.appendChild(NEWELEMENT_div_painelBtns)


        NEWELEMENT_h5_childNodes=NEWELEMENT_h5.childNodes
        NEWELEMENT_h5.insertBefore(NEWELEMENT_span_answer, NEWELEMENT_h5_childNodes[0]) 

        NEWELEMENT_div_painelBtns.appendChild(NEWELEMENT_img_likeBtn)
        NEWELEMENT_div_painelBtns.appendChild(NEWELEMENT_img_dislikeBtn)
        NEWELEMENT_div_painelBtns.appendChild(NEWELEMENT_img_reply)

        const replyBtn_id=document.getElementById(num)
        const commentUnit=replyBtn_id.parentElement 

        commentUnit.appendChild(NEWELEMENT_div_commentUnit)
        
        
       //=======================> BLOCO DE REMOÇÃO DO TEXTAREA DO REPLY <======================================================================

        let goAway_label=document.getElementById("labelReply" + contR)
        let goAway_textArea=document.getElementById("areaComment"+contR)
        let goAway_button=document.getElementById("replyThis"+contR)

        goAway_label.remove()
        goAway_textArea.remove()
        goAway_button.remove()

        // ======================> BLOCO DE INSERÇÃO DO TEXTNODE NOS BOTÕES DE LIKE E DISLIKE <==============================
     
        const painelBtns=document.getElementById('bt'+ contD) 
        const painelBtns_childNodes=painelBtns.childNodes
        console.log(painelBtns_childNodes)
        const valueLike=document.createTextNode("0")
        painelBtns.insertBefore(valueLike, painelBtns_childNodes[1])
        const valueDislike=document.createTextNode("0")
        painelBtns.insertBefore(valueDislike, painelBtns_childNodes[3])
        const fixingNode=document.createTextNode("")
        painelBtns.insertBefore(fixingNode, painelBtns_childNodes[0])
        console.log(painelBtns_childNodes)
        contD++
        contador_botao_likeDislike++

        //===================================================================================================================

        toggleComments()
        answerSwitch=false
        contR++
    }else{
        alert('Doh! Vc esqueceu de digitar (de novo)!')
        }
    }

// let ativo=document.activeElement
window.addEventListener("load", inicia)
window.onscroll=fixoNoTopo

