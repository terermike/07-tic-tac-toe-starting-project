export default function GameOver({ winner, onSelect }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>Has Drawn</p>}
      <p>
        <button onClick={onSelect}>Rematch!</button>
      </p>
    </div>
  );
}
