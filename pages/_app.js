import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
  <Navbar />
  <main className="max-w-3xl mx-auto p-6">
    <Component {...pageProps} />
    </main>
    <Footer />
  </>;
}
