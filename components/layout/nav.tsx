import Navbar from "./xnavbar";
import { getServerSession } from "next-auth/next";

export default async function Nav() {
  const session = await getServerSession();
  return <Navbar session={session} />;
}
