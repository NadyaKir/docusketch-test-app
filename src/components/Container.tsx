import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1rem",
        width: "9rem",
        minHeight: "5rem",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
