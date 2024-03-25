import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function changeHandler(event) {
    setPlayerName(event.target.value);
  }

  function onSelect() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing && (
          <input
            type="text"
            required
            value={playerName}
            onChange={changeHandler}
          />
        )}
        {!isEditing && <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onSelect}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
