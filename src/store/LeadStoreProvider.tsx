"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { LeadAppStore, makeLeadStore } from "./store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<LeadAppStore>();
  if (!storeRef.current) {
    storeRef.current = makeLeadStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
