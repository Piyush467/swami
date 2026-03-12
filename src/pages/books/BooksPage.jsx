
import BooksHero from "./BooksHero"
import BooksGrid from "./BooksGrid"
import Author from "../../components/Author";


export default function BooksPage() {
  return (
    <main className="bg-[#FFFCDD] min-h-screen pt-24">
      <BooksHero />
      <BooksGrid/>
      <Author/>
     
    </main>
  );
}