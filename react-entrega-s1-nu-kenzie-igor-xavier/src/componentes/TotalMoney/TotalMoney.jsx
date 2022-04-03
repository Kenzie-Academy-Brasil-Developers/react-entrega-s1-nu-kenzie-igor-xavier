import "./TotalMoneyStyles.css";
function TotalMoney({ listTransactions }) {
  const total = listTransactions.reduce((acc, valor) => {
    return valor.type == "entrada"
      ? acc + parseInt(valor.value)
      : acc - parseInt(valor.value);
  }, 0);
  return (
    <div className="total">
      <div className="valorTotal">
        <h2 className="totalH2">Valor Total:</h2>
        <label className="totalLabel">O valor se refere ao saldo</label>
      </div>
      <p className="totalP">{"$" + total}</p>
    </div>
  );
}
export default TotalMoney;
