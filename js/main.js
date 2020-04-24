var ul = document.getElementById('options_list');
var btn = document.getElementById('button');
var scoreHolder = document.getElementById('scoreHolder');
var questionContainer = document.getElementById('question_container');
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');

var qBank = {
    quesions: [
        {q: 'B.Y.O.B. Stands for?', options: ['Buy Your Own Bottle', 'Bribe Your Own Boss', 'Bring Your Own Bottle', 'Bribe Your Own Boyfriend'], answer:3},
        {q: 'What is my full name?', options: ['Abdulrahman Ahmed Albediri', 'Abdulrahman Ibrahim Albediri', 'Abdulrahman Hamed Albediri', 'Abdulrahman Mohammed Albediri'],answer:1},
        {q: 'Complete this series of numbers: 9 = 4, 21 = 9, 22 = 9, 24 = 10, 8 = 5, 7 = 5, 99 = 10, 100 = 7, 16 =?, 17 =?', options: ['9 and 3', '4 and 8', '7 and 9', '12 and 10'], answer:3},
        {q: 'There are eight men sitting on a couch. Three legs break and six men leave. How many legs are remaining?', options: ['3', '4', '5', '6'], answer:3},
        {q: 'How many colors does a rainbow have?', options: ['6', '7', '8', '9'], answer:2},
        {q: 'What is the color of the blackbox (the device designed to record the sounds from a cockpit and withstand a plane crash)?', options: ['Black', 'Green', 'Grey', 'Orange'], answer:4},
        {q: 'Who comes first the chicken or the egg? Explain!', options: ['Egg','Chicken','Both', 'No Answer'], answer:2},
        {q: 'If 2+3=8, 3+7=27, 4+5=32, 5+8=60, 6+7=72, Then 7+8 = ? hint: it is easy.', options: ['98', '86', '74', '82'], answer:1}, 
    ],

    index : 0,
    load : function(){
        if (this.index<=this.quesions.length-1){
            questionContainer.innerHTML=this.index+1+'. '+this.quesions[this.index].q;
            a1.innerHTML=this.quesions[this.index].options[0];
            a2.innerHTML=this.quesions[this.index].options[1];
            a3.innerHTML=this.quesions[this.index].options[2];
            a4.innerHTML=this.quesions[this.index].options[3];
            this.scoreHolder();
        }

        else {
            questionContainer.innerHTML='You are finished!'
            a1.style.display='none';
            a2.style.display='none';
            a3.style.display='none';
            a4.style.display='none';
        }

    },

    next: function(){
        this.index++;
        this.load();
    },
    check: function(element){
        var id = element.id.split('');

        if (id[id.length-1]==this.quesions[this.index].answer){
            this.score++;
            element.className='Correct';
            element.innerHTML='Correct';
            this.scoreHolder();
        }

        else {
            element.className='Wrong';
            element.innerHTML='Wrong';
        }

    },

    notClickable: function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents='none';
        }
    },

    clickable: function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents='auto';
            ul.children[i].className='';
        }
    },

    score:0, 
    scoreHolder: function(){
        scoreHolder.innerHTML=this.quesions.length+"/"+this.score;
    }
}

window.onload = qBank.load();

function button(element){
    qBank.check(element);
    qBank.notClickable();
}

function next(){
    qBank.next();
    qBank.clickable();
}
// for shuffling the questions
/* Math.random  */