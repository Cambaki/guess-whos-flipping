import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="app-layout">
      <Navigation />
      <main className="main-content">{children}</main>
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Guess Who's Flipping. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
