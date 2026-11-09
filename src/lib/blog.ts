import type { CollectionEntry } from 'astro:content';

export function postCover(post: CollectionEntry<'blog'>) {
  if (post.data.cover) return post.data.cover;
  if (post.data.heroImage) return { src: post.data.heroImage.src, alt: post.data.title };
  return { src: '/covers/default.svg', alt: `${post.data.title}的几何框线封面` };
}
