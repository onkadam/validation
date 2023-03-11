import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form id="box">
        <lable>Select Title : </lable>
        <select className="selTit">
          <option>Mr</option>
          <option>Mrs</option>
          <option>Miss</option>
        </select>
        <br />
        <br />
        <lable>Enter First Name : </lable>
        <input className="fname" type="text"></input>
        <br />
        <br />
        <lable>Enter Middle Name : </lable>
        <input className="fname" type="text"></input>
        <br />
        <br />
        <lable>Enter Last Name : </lable>
        <input className="fname" type="text"></input>
        <br />
        <br />
        <lable>Your Full Name : </lable>
        <input className="fname" type="text"></input>
      </form>
    </div>
  );
}
