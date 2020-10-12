export interface UsuariosResp {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Usuario[];
  ad: Empresa;
}

export interface Empresa {
  company: string;
  url: string;
  text: string;
}

export interface Usuario {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
