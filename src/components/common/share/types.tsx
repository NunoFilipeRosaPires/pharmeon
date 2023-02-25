import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface IShare {
  Component: React.ComponentType<any>;
  args?: object;
  faIcon: IconDefinition;
}
