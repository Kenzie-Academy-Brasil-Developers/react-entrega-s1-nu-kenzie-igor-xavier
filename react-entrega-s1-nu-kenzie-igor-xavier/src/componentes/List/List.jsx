function List({ listTransactions, Card }) {
  return listTransactions.map((transaction, index) => (
    <Card transaction={transaction} key={index} />
  ));
}
export default List;
