import { Categoria } from "./categoria";
import { Usuario } from "./usuario";




export class Produto{
  public id: number;
  public nome: string;
  public preco: number;
  public disponibilidade: string;
  public produtor: string;
  public quantidadekg: number;
  public foto: string;
  public categoria: Categoria;
  public usuario: Usuario;

  }
