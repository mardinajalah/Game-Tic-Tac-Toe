const board = document.getElementById("board")
const player = document.getElementById("player")

const textBoard = Array(9).fill(null)

let bulat = true

textBoard.map((value, i) => {
  const boards = document.createElement("bottom")
  
  function hendelclick(i) {
    if(textBoard[i] || winer(textBoard)){
      return;
    }
    
    if(bulat){
      boards.textContent = "x"
      textBoard[i] = "x"
      player.textContent = "player : o"
      bulat = false
    } else {
      boards.textContent = "o"
      textBoard[i] = "o"
      player.textContent = "player : x"
      bulat = true
    }
    
    const win = winer(textBoard)
    if(win) {
      player.textContent = "Winer Player " + win
    }
  }
  
  boards.textContent = value
  boards.className = "boards"
  boards.id = "boards"
  boards.onclick = () => hendelclick(i)
  board.appendChild(boards)
})


const winer = (textBoard) => {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  
  for(let i = 0; i < win.length; i++){
    const [a, b, c] = win[i]
   if(textBoard[a] && textBoard[a] === textBoard[b] && textBoard[a] === textBoard[c]){
     return textBoard[a]
   }
  }
  
  return false
}