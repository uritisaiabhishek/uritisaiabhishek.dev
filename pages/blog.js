import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <>
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <ul>
          {allPostsData.map(({ id, title, date, description }) => (
            <li key={id} className="mb-6">
              <Link href={`/blog/${id}`} className="text-2xl font-semibold text-blue-600 hover:underline">
                {title}
              </Link>
              <p className="text-gray-600">{description}</p>
              <small className="text-gray-400">{date}</small>
            </li>
          ))}
        </ul>
    </>
  );
}
