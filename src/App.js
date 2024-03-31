import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import UserInputForm from "./components2/UserInputForm";
//Real-time Input: Create a form that captures user 
//input and displays it in real-time as the user
//types.
function App() {
  return (
    <div>
      <Header/>
       <UserInputForm/>
       
    </div>
      
  );
}

export default App;
