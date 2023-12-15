"use client";

import { Platform } from "@/components/PlatformIconList";

import ImagePostForm from "./_components/ImagePostForm";

export interface Post {
  image?: string;
  socialName: string;
  caption: string;
  platform?: Platform;
}

const ImagePostPage = () => {
  const handleSubmit = (post: Post) => {
    console.log(post);
  };

  return <ImagePostForm onPost={handleSubmit} />;
};

export default ImagePostPage;
