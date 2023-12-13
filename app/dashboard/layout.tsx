import SideBar from "@/components/SideBar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex bg-[#F1F4FA] ">
      <SideBar />
      <div className="flex-1 h-screen overflow-y-scroll  ">{children}</div>
    </div>
  );
}
