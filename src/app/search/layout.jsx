import SearchHeader from "@/components/SearchHeader";
import "../globals.css";

export default function Layout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
