import { Search } from "../components/Search/Search";
import { useState } from "react";
import { UserProps } from "../types/user";
export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const loadUser = await fetch(`https://api.github.com/users/${userName}`);
    const data = await loadUser.json();
    console.log(data);
    // setUser(data);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
    </div>
  );
};
