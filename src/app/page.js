import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';
import { BLOG_TITLE } from '@/constants';
import { getBlogPostList } from '@/helpers/file-helpers';

export const metadata = {
  title: BLOG_TITLE
};

function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      <React.Suspense>
        <BlogList />
      </React.Suspense>
    </div>
  );
}

async function BlogList() {
  const blogPosts = await getBlogPostList();

  return blogPosts.map(({ slug, ...delegated}) => (
    <BlogSummaryCard
      key={slug}
      slug={slug}
      {...delegated}
    />
  ));
}

export default Home;
