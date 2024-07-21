export interface Props {
  onHandleSubmit: () => void;
}

export interface PlanetState {
  items: Planets[];
  isloading: boolean;
}

export interface Planets {
  name: string;
  climate: string;
  gravity: string;
  population: string;
}

export interface State {
  value: string;
  planets: Planets[];
  prevSearch: string;
  isLoading: boolean;
}

export interface PlanetDetails {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}
