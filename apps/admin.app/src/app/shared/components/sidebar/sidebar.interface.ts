export interface Sidebar {
  title: string;
  displayText: string;
  id: number;
  route: string;
  isDefault?: boolean;
  icon: MatIcon | SvgIcon;
}
interface MatIcon {
  matIcon: string;
  svgIconPath?: null;
}
interface SvgIcon {
  svgIconPath: string;
  matIcon?: null;
}
