import { FaTrash } from "react-icons/fa";
import "./styles.css";
function Card({ transaction }) {
  return transaction.type === "entrada" ? (
    <div className="entrada">
      <div className="divDados">
        <h1>{transaction.description}</h1>
        <label>{transaction.type}</label>
      </div>
      <div className="divValorBt">
        <p>{"R$" + transaction.value}</p>
        <div className="button">
          <FaTrash />
        </div>
      </div>
    </div>
  ) : (
    <div className="saida">
      <div className="divDados">
        <h1>{transaction.description}</h1>
        <label>{transaction.type}</label>
      </div>
      <div className="divValorBt">
        <p>{"R$" + transaction.value}</p>

        <div className="button">
          <FaTrash />
        </div>
      </div>
    </div>
  );
}
export default Card;
