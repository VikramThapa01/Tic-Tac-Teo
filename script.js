let turn = 'X';
let isGameOver = false;
let isGameDraw = false;
let count = 0;
const chnageTurn = ()=> {
    return turn == "X"?"O":"X";
}

const winner = ()=>{
    ebt = document.getElementsByClassName("boxtext");
    winpos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    winpos.forEach(wp=>{
        if((ebt[wp[0]].innerText==ebt[wp[1]].innerText) && (ebt[wp[1]].innerText==ebt[wp[2]].innerText) && (ebt[wp[0]].innerText!="") && !isGameOver){
            ebt[wp[0]].classList.add("won");
            ebt[wp[1]].classList.add("won");
            ebt[wp[2]].classList.add("won");
            document.querySelector('.next_turn').innerHTML = "<b style='color:red;font-size:6vw;'>"+ebt[wp[0]].innerText+" WON</b>";
            isGameOver = true;
        }
    })
    count =  count + 1;
    console.log("count="+count);
    if(count==9 && !isGameOver){
        isGameDraw = true;
    }
}

function reset_board(){
    let box = document.getElementsByClassName('boxtext');
    Array.from(box).forEach(mark=>{
        mark.innerText="";
        mark.classList.remove("won");
    })
    let allboxes = document.getElementsByClassName("box");
    Array.from(allboxes).forEach(eachbox => {
        eachbox.classList.remove("alreadymarked");
    })
    turn = "X";
    isGameOver = false;
    count = 0;
    isGameDraw = false;
    document.querySelector(".next_turn").innerText = "Turn of " + turn;
}


let allboxes = document.getElementsByClassName("box");
Array.from(allboxes).forEach(eachbox => {
    let box_text = eachbox.querySelector(".boxtext");
    eachbox.addEventListener('click',()=>{
        if(box_text.innerText == "" && !isGameOver){
            box_text.innerText = turn;
            turn = chnageTurn();
            winner();
            if(!isGameOver && !isGameDraw){
                document.querySelector(".next_turn").innerText = "Turn of " + turn;
                
            }else if(isGameDraw){
                document.querySelector(".next_turn").innerText = "Reset";
                document.querySelector('.next_turn').innerHTML = "<b style='color:red;font-size:6vw;'>DRWA</b><br>";
            }
           
        }else{
            eachbox.classList.add("alreadymarked");
        }
    })
})
