
const PlayButton = ({msg, children,onClick}) => {

  function handleClick(){
    onClick();
  }
  return (
    <div>
        <button onClick={handleClick} >{children}</button>
    </div>
  )
}

export default PlayButton;