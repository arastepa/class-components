export interface Props {
  onHandleSubmit: () => void;
}

export interface PropsApp {}

export interface Planets {
  name: string;
  climate: string;
  gravity: string;
  population: string;
}

export interface State {
  value: string;
  planets: Planets[];
}
