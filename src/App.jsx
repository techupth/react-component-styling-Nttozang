import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button color="primary" />
        <Button color="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert color="error" icon="error" text="This is error alert box"/>
        <Alert color="warning" icon="warning" text="This is warning alert box" />
        <Alert color="info" icon="info" text="This is info alert box" />
        <Alert color="success" icon="success" text="This is success alert box" />
      </div>
    </div>
  );
}

export default App;
