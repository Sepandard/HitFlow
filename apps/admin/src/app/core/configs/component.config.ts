export const PACKAGE_CONFIG: PackageConfig[] = [
  {
    title: 'Pages',
    description: "It's mouse movement in specific page",
    route: '/page',
  },  
  {
    title: 'Reports',
    description: "Gives you general report about all pages",
    route: '/report',
  },
].sort((a, b) => a.title.localeCompare(b.title));

export interface PackageConfig {
  title: string;
  description: string;
  imagePath?: string;
  route: string;
}
