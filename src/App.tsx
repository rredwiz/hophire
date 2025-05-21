import Button from './Components/Button.tsx';
import NavTitle from './Components/nav/NavTitle.tsx';

function App() {
  const handleClick = () => {
    alert('button was clicked');
  }

  return (
    <div>
      <NavTitle/>
      <Button label="click me" onClick={handleClick}/>
    </div>
  ) 
}

export default App;