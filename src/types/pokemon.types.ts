export type PokeTypes = {
  id: number;
  name: string;
  url: string;
  types: [{ slot: number; type: { name: string; url: string } }];
  height: number;
  weight: number;
};
