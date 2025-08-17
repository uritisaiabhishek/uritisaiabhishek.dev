import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { id: filename.replace(/\.md$/, "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "posts", `${params.id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      postData: {
        id: params.id,
        contentHtml,
        ...matterResult.data,
      },
    },
  };
}

export default function Post({ postData }) {
  return (
    <>
        <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
        <p className="text-gray-500 mb-6">{postData.date}</p>
        <div
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
    </>
  );
}
