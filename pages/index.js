import {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
// import fs from 'fs';
import globalServices from './api/hello';

export default function Home({slugs, data}) {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    // globalServices.getProduct({
    //   'category.id': 2,
    // }, (response, err) => {
    //   if (!err) {
    //     setListProduct(response);
    //   }
    // });
  }, []);
// console.log(listProduct);
  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Vito's Test Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //       <a>This is Vito's Next.js Example blog!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>

    //       <a>
    //       slugs:
    //         {slugs.map(slug => {
    //           return (
    //             <div key={slug}>
    //               <Link href={"/blog/" + slug}>
    //                 <a>{"/blog/" + slug}</a>
    //               </Link>
    //             </div>
    //           );
    //         })}
    //       </a>
          
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
    <>
      <Head>
        <title>Vito&apos;s Test Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={'relative'}>
        <div className={'flex items-start lg:items-center'}>
          <div className="flex flex-col items-start">

            <div className={('mt-5')}>
              <a href="/MoshReactTutorial">
                To Mosh React Tutorial
              </a>
            </div>
            <div className={('mt-5')}>
              <a href="/ReduxTutorial">
                To Redux Tutorial
              </a>
            </div>
          </div>
        </div>
        <div>
          slugs:
          {/* {slugs.map(slug => {
            return (
              <div key={slug}>
                <Link href={"/blog/" + slug}>
                  <a>{"/blog/" + slug}</a>
                </Link>
              </div>
            );
          })} */}
        </div>
        <div> 
          {/* {listProduct.map(product => 
            (
              <div key={product.id}>
                {product.name}
              </div>
            )
          )} */}
        </div>
      </div>

      <div className="py-10 px-4 lg:px-0">
        <div className="flex items-center justify-between lg:justify-center">
          <span className="text-xl lg:text-4xl font-extrabold text-dark-grey lg:text-primary-blue" style={{ fontFamily: 'Nunito-Regular' }}>
            Promo
          </span>

          <div href="/promo" className="font-inter font-semibold text-base text-primary-blue block lg:hidden">
            LIHAT SEMUA PROMO
          </div>
        </div>
        <div className={('w-full lg:w-10/12 xl:w-8/12 mx-auto')}>

          <div className="hidden lg:block my-20">
            <div>
              
            </div>
          </div>
        </div>
        <div className="lg:flex justify-center hidden">
          <button onClick={(e) => this.href(e, '/promo')}
            style={{
              color: '#FFFFFF',
              borderRadius: '17.5px',
              fontFamily: 'Inter-Regular',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '17px',
              backgroundColor: '#0045E5',
              padding: '5px 39px 5px 39px',
            }}
          >
            Lihat Semua
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: '#F7F7F7' }} className="py-5 px-3 lg:px-0">
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl lg:text-4xl font-extrabold text-dark-grey lg:text-primary-blue" style={{ fontFamily: 'Nunito-Regular' }}>
            Partner Kami
          </span >
        </div>
      </div>

      <div className={('flex-col lg:flex-row')} style={{ backgroundColor: '#0045E5' }}>
        <div className="mr-0 lg:mr-28 w-full lg:w-2/5 px-4 lg:px-0">
          <span>
            FAQ
          </span>

          <div className="text-right mt-5 block lg:hidden">
            <div href="/faq" className="text-base font-semibold uppercase text-kuning-ap font-inter">
              LIHAT SEMUA FAQ
            </div>
          </div>
        </div>

        <div className={('hidden lg:block')}>
          <div className="mt-3"
            style={{
              fontFamily: 'Inter-Regular',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '24px',
              color: '#FFFFFF',
            }}
          >
            Ingin Cari Tahu yang Lain?
          </div>
          <button className="" onClick={(e) => this.href(e, '/faq')}
            style={{
              background: '#00DDC7',
              borderRadius: '17.5px',
              fontFamily: 'Inter-Regular',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '17px',
              color: '#003BC4',
              padding: '5px 39px 5px 39px',
              marginTop: '1.3rem',
            }}
          >
            Temukan Disini
          </button>
        </div>
      </div>

      <div>
        <div className={'flex flex-col justify-center relative h-full w-11/12 mx-auto'}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-start space-x-0 lg:space-x-3 space-y-2 lg:space-y-0 mt-5 lg:mt-5">
            <a className="mr-3" href="https://astrapay.onelink.me/9OXk/astrapaydownloadios">
              Test
            </a>
            <a href="https://astrapay.onelink.me/8z2t/fc8b7d5f">
              Test
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

// export const getStaticProps = async () => {
  // const url = globalServices.endpoint.product;
  // const files = fs.readdirSync("posts");
  // const res = await fetch(url)
  // const data = await res.json(); 
  // return {
  //   props: {
  //     slugs: files.map(filename => filename.replace(".md", "")),
  //     data: data
  //   }
  // };
// };
