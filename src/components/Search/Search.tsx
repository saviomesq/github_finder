import { BsSearch } from "react-icons/bs";
import { useState } from "react";

interface SearchProps {
  loadUser: (userName: string) => Promise<void>;
}
export const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <h2>Busque por usuários</h2>
      <p>Conheça seus melhores repositórios</p>
      <div>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};
