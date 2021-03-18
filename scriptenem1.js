function myFunction() {
    var c = 0
    var re = []
    var q1 = document.quiz.resposta.value;
    var q2 = document.quiz.resposta1.value;
    var q3 = document.quiz.resposta2.value;
    var q4 = document.quiz.resposta3.value;
    var q5 = document.quiz.resposta4.value;
    var q6 = document.quiz.resposta5.value;
    var q7 = document.quiz.resposta6.value;
    var q8 = document.quiz.resposta7.value;
    var q9 = document.quiz.resposta8.value;
    var q10 = document.quiz.resposta9.value;

    if (q1 == "d1") {c++
        var correto1 = document.getElementById('div1')
        correto1.style.backgroundColor = 'green'
    }else{
        var e1 = 'ERROU A 1'
        re.push(e1)
        var errado1 = document.getElementById('div1')
        errado1.style.backgroundColor = 'red'
    }
    if (q2 == "a2") {c++
        var correto2 = document.getElementById('div2')
        correto2.style.backgroundColor = 'green'
    }else{
        var e2 = ' ERROU A 2'
        re.push(e2)
        var errado2 = document.getElementById('div2')
        errado2.style.backgroundColor = 'red'
    }
    if (q3 == "c3") {c++
        var correto3 = document.getElementById('div3')
        correto3.style.backgroundColor = 'green'
    }else{
        var e3 = ' ERROU A 3'
        re.push(e3)
        var errado3 = document.getElementById('div3')
        errado3.style.backgroundColor = 'red'
    }
    if (q4 == "c4") {c++
        var correto4 = document.getElementById('div4')
        correto4.style.backgroundColor = 'green'
    }else{
        var e4 = ' ERROU A 4'
        re.push(e4)
        var errado4 = document.getElementById('div4')
        errado4.style.backgroundColor = 'red'
    }
    if (q5 == "b5") {c++
        var correto5 = document.getElementById('div5')
        correto5.style.backgroundColor = 'green'
    }else{
        var e5 = ' ERROU A 5'
        re.push(e5)
        var errado5 = document.getElementById('div5')
        errado5.style.backgroundColor = 'red'
    }
    if (q6 == "d6") {c++
        var correto6 = document.getElementById('div6')
        correto6.style.backgroundColor = 'green'
    }else{
        var e6 = ' ERROU A 6'
        re.push(e6)
        var errado6 = document.getElementById('div6')
        errado6.style.backgroundColor = 'red'
    }
    if (q7 == "d7") {c++
        var correto7 = document.getElementById('div7')
        correto7.style.backgroundColor = 'green'
    }else{
        var e7 = ' ERROU A 7'
        re.push(e7)
        var errado7= document.getElementById('div7')
        errado7.style.backgroundColor = 'red'
    }
    if (q8 == "a8") {c++
        var correto8 = document.getElementById('div8')
        correto8.style.backgroundColor = 'green'
    }else{
        var e8 = ' ERROU A 8'
        re.push(e8)
        var errado8 = document.getElementById('div8')
        errado8.style.backgroundColor = 'red'
    }
    if (q9 == "d9") {c++
        var correto9 = document.getElementById('div9')
        correto9.style.backgroundColor = 'green'
    }else{
        var e9 = ' ERROU A 9'
        re.push(e9)
        var errado9 = document.getElementById('div9')
        errado9.style.backgroundColor = 'red'
    }
    if (q10 == "b10") {c++
        var correto10 = document.getElementById('div10')
        correto10.style.backgroundColor = 'green'
    }else{
        var e10 = ' ERROU A 10'
        re.push(e10)
        var errado10 = document.getElementById('div10')
        errado10.style.backgroundColor = 'red'
    }
    

    if( c == 10){
        alert('Você acertou todas as questões, parabens!') 
    }else if(c == 0){
        alert('Você errou todas as questões!')
              
    }else{
        alert(`Você acertou ${c} questão/questões `)  
        alert(`${re} `)
       
    }
    
   
   //document.getElementById('demo3').innerHTML = 'Gabarito: <br> Questão 1 = D <br> Questão 2 = A <br> Questão 3 = C <br> Questão 4 = C <br> Questão 5 = B <br> Questão 6 = D <br> Questão 7 = D <br> Questão 8 = A <br> Questão 9 = D <br> Questão 10 = B'    
    
}