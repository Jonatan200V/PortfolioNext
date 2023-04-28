export interface IconsLinks {
  id: number;
  href: string;
  icon: JSX.Element;
  name: string;
  color: number;
}
export interface Tech {
  id: number;
  name: string;
  icon: JSX.Element;
  description: string;
  list?: number;
}

export interface Projects {
  id: number;
  name: string;
  imageMobile: string;
  imageDesktop: string;
  description: string;
  linkDeploy?: string;
  linkYoutube?: string;
  linkGithub?: string;
  techsFrontend?: number[];
  techsFrontendMobile?: number[];
  techsBackend: number[];
  techsController: number[];
}
