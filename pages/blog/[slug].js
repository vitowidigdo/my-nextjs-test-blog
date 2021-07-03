import React from 'react'
import fs from 'fs';
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

export default function Posts({htmlString, data}) {
    return (
        <div>
            <Head>
                <title>{data.title}</title>
                <meta title="description" content={data.description} />
            </Head>
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </div>
    )
}

// TEST EDIT FILE USING VIM

// .map all of the array of paths that we need
export const getStaticPaths = () => {
    const files = fs.readdirSync('posts');
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', "")
        }
    }));
    return {
        paths,
        fallback: false
    }
}

// fetch all of the data from the files to become props
export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMetaData = fs
      .readFileSync(path.join("posts", slug + ".md"))
      .toString();
  
    const parsedMarkdown = matter(markdownWithMetaData);
  
    const htmlString = marked(parsedMarkdown.content);
  
    return {
      props: {
        htmlString,
        data: parsedMarkdown.data
      }
    };
  };
