import { useState } from "react";
import Player from "./component/Player";
import GameBoard from "./component/GameBoard";

function App() {
  const [activePlayer, selectActivePlayer] = useState("X");

  function activeSquareHandler() {
    selectActivePlayer((curActivePlayer) =>
      curActivePlayer === "X" ? "O" : "X"
    );
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={activeSquareHandler}
          activePlayerSymbol={activePlayer}
        />
      </div>
      log
    </main>
  );
}

export default App;
