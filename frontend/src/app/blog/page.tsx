import React from "react";
import styles from "./BlogIndex.module.css";
import { BLOGS_DATABASE } from "../../lib/blogs";

export default async function BlogIndexPage() {
  const posts = Object.values(BLOGS_DATABASE);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending Guides & Deals</h1>
      <p className={styles.subtitle}>
        Uncover the latest promo codes, verified savings, and shopping recommendations based on trending Pinterest finds.
      </p>

      <div className={styles.grid}>
        {posts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={post.bannerImage}
                alt={post.title}
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.content}>
              <span className={styles.tag}>{post.category}</span>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.desc}>{post.description}</p>
              <div className={styles.footer}>
                <span>{post.publishDate}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
