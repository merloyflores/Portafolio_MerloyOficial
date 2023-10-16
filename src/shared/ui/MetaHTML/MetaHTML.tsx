import * as React from "react";

type MetaHTMLProps = {
  children: React.ReactNode;
};

export const MetaHTML: React.FC<MetaHTMLProps> = ({ children }) => (
  <>
    <link rel="icon" href="/icons/favicon.ico" />
    {children}
  </>
);
