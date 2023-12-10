import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";

const Provider = ({ children }: PropsWithChildren) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default Provider;
