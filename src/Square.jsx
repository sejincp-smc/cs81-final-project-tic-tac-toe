function Square(props) {
  let squareClass = 'square';

  if (props.value === 'X') squareClass += ' x-player';
  else if (props.value === 'O') squareClass += ' o-player';

  // Before Start Game
  if (props.disabled) squareClass += ' disabled';

  return (
    <button className={squareClass} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;