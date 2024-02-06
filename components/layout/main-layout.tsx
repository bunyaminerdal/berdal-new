import { PropsWithChildren } from "react";
import Sidebar from "./sidebar";
import { Toaster } from "sonner";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="block w-full h-full md:flex ">
      <Sidebar />
      <main className="w-full h-full min-w-[300px] overflow-auto p-2 pb-12 md:pb-2">
        <section className="flex min-h-full justify-center items-center">
          {children}
        </section>
      </main>
      <Toaster />
    </div>
  );
};

export default MainLayout;
