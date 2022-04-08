import "./stylesForm.css";
import { useState } from "react";

function Form({ listTransactions, setListTransactions, setIniciou, addItem }) {
  const [item, setItem] = useState({
    description: "Sem descrição",
    value: 0,
    type: "entrada",
  });
  function enviar(item) {
    return addItem(item);
  }
  return (
    <div className="divForm">
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="divUm">
          <p>Descrição</p>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) =>
              setItem({ ...item, description: event.target.value })
            }
          />
          <label>Ex:Compra de roupas</label>
        </div>
        <div className="divDois">
          <div className="divTres">
            <p>Valor</p>
            <input
              type="text"
              placeholder="Valor"
              onChange={(event) =>
                setItem({ ...item, value: event.target.value })
              }
            />
          </div>
          <div className="divQuatro">
            <p>Tipo de valor</p>
            <select
              onChange={(event) =>
                setItem({ ...item, type: event.target.value })
              }
            >
              <option value="entrada">Entrada</option>
              <option value="saída">Saída</option>
            </select>
          </div>
        </div>
        <button type="submit" onClick={() => enviar(item)}>
          Inserir valor
        </button>
      </form>
    </div>
  );
}
export default Form;
