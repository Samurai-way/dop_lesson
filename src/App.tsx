import {Fragment} from 'react';
import {Example_3} from "./examples/example_3/Example_3";

export type UserType = {
  [key: string]: { name: string, id: string }
};

const DATA_7: UserType[] = [
  {u1: {name: 'Gleb', id: '1'}},
  {u2: {name: 'Dima', id: '2'}},
  {u3: {name: 'Svetlana', id: '3'}},
  {u4: {name: 'Artur', id: '4'}},
  {u5: {name: 'Vera', id: '5'}},
  {u6: {name: 'Vlad', id: '6'}},
];

export const App = () => {
  return (
    <Fragment>
      <Example_3 />
    </Fragment>
  );
};
