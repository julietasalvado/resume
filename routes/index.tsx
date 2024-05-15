import ScreenSize from "../islands/ScreenSize.tsx";
import { CloudBadge } from "../components/CloudBadge.tsx";

export default function Home() {
  return (
    <section className="bg-[#FDE3E9] h-screen">
      <ScreenSize />
      <CloudBadge />
    </section>
  );
}
