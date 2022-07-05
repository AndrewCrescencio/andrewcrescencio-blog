import { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
// import type { NextPage } from "next";

type LayoutProps = {
  children: ReactElement;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Andrew Crescencio's blog"
          key="title"
        />
        <meta name="author" content="Author: Andrew Crescencio" />
        <meta
          property="description"
          content="Andrew's Crescencio blog about frontend"
        />

        <meta
          property="keywords"
          content="andrew, crescencio, frontend, front-end, blog"
        />
        <meta property="og:site_name" content="Andrew's Blog" />
      </Head>
      <main>{children}</main>
    </>
  );
};
