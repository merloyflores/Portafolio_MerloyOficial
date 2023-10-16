import * as React from "react";
import { BackgroundAnimation } from "../Background";
import { Footer } from "../Footer";
import { Header } from "../Header";

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <>
    <Header />
    <BackgroundAnimation />
    {children}
    <Footer />
  </>
);
