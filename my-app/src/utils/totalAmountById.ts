function totalAmountById(pizzasArr, id): { amount: number } {
  const filteredPizzasArr = pizzasArr.filter((pizza) => pizza.id === id);

  const totalAmountById = { amount: 0 };

  if (filteredPizzasArr.length)
    filteredPizzasArr.map((pizza) => (totalAmountById.amount += pizza.amount));
  return totalAmountById;
}

export default totalAmountById;
