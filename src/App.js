import "./App.css";
import LoginForm from "./components/LoginForm";
import UpdateComponent from "./components/UpdateComponent";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <UpdateComponent />
        </div>
        <div className="col">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default App;
