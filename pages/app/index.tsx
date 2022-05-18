import { signOut } from "next-auth/react";

export default function App(){
  return (
    <div>
      <button onClick={() => signOut({ callbackUrl: 'https://localhost:3000/' })}>SingOut</button>
    </div>
  );
}