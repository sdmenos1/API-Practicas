"use client";
import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import { store } from "@/store";
export default function LayoutComments({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-full w-full absolute bg-gray-50 overflow-y-hidden">
        <Provider store={store}>{children}</Provider>
      </div>
    </>
  );
}
