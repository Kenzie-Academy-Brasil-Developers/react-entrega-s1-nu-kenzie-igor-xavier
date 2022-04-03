import "./App.css";
import { useState } from "react";
import Logo from "./Logo.png";
import Logo2 from "./Logo2.png";
import figmaImg from "./figmaImg.png";
import Form from "./componentes/Form/Form";
import List from "./componentes/List/List";
import Card from "./componentes/Card/Card";
import TotalMoney from "./componentes/TotalMoney/TotalMoney";
function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  const [iniciou, setIniciou] = useState(false);
  function addItem(item) {
    return setListTransactions([...listTransactions, item]);
  }
  return (
    <div className="App">
      {iniciou === false ? (
        <body className="Dark">
          <div className="incio">
            <div className="divEsq">
              <div>
                <img className="logoInicio" src={Logo2} />
                <h2>Centralize o controle das suas finanças</h2>
                <p>de forma rápida e segura</p>
                <button onClick={() => setIniciou(true)}>Iniciar</button>
              </div>
              <div className="imgNova">
                <img className="imgInicio" src={figmaImg} />
              </div>
            </div>
          </div>
        </body>
      ) : (
        <body className="Light">
          <div className="divPai">
            <header>
              <img className="Logo" src={Logo} />
              <button
                className="voltarInicio"
                onClick={() => setIniciou(false)}
              >
                Inicio
              </button>
            </header>
            <div className="FormVt">
              <Form
                setIniciou={setIniciou}
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                addItem={addItem}
              />
              <TotalMoney listTransactions={listTransactions} />
            </div>
            <div>
              <List listTransactions={listTransactions} Card={Card} />
            </div>
          </div>
        </body>
      )}
    </div>
  );
}

export default App;
