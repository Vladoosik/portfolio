export interface HeaderLinksProps {
  id: number;
  name: string;
  path: string;
}

export const headerLinks: HeaderLinksProps[] = [
  { id: 21, name: "Case Studies", path: "work" },
  { id: 22, name: "Experiments", path: "petProject" },
  { id: 23, name: "Contact", path: "" },
];

export const caseHeaderLinks: HeaderLinksProps[] = [
  { id: 12, name: "Turn Back Home", path: "/" },
  { id: 13, name: "All Works", path: "" },
  { id: 14, name: "Contact", path: "" },
];
