interface IParams {
  category: string | number;
  sort: string;
}

export { IParams };

interface IPizzaSlice {
  pizzaProps: any[];
  status: string;
}

export default IPizzaSlice;
