import * as React from 'react';

interface Props {
    name: string;
}

const SecondeComponent = (props: Props) => {
  return (
    <div>
      <p>Meu segundo componente</p>
      <p>O nome dele é {props.name}</p>
    </div>
  );
};

export default SecondeComponent;
