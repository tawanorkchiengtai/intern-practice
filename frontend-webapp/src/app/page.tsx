import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
export default function Home() {
  return (
    <>
      <Navbar id="home" />
      <Overview />
    </>
  );
}
