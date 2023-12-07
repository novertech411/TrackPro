import SideBar from "@/components/SideBar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex">
      <SideBar />
      <div className="flex-1 h-screen overflow-y-scroll px-8 pt-16  ">
        {children}
      </div>
    </div>
  );
}
