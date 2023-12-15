"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Box, Button, Center, FormLabel, Input, Text } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

import { Post } from "../page";
import PackageBox from "@/components/PackageBox";
import PlatformIconList, { Platform } from "@/components/PlatformIconList";
import UploadImage from "./UploadImage";

interface Props {
  onPost: (post: Post) => void;
}

const schema = z.object({
  socialName: z.string().min(1, { message: "Social name can not be empty" }),
  caption: z.string().min(1, { message: "Caption can not be empty" }),
});

type FormData = z.infer<typeof schema>;

const ImagePostForm = ({ onPost }: Props) => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>();
  const [uploadImageUrl, setUploadedImageUrl] = useState<string>();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onUploadImage = (imageUrl: string) => {
    setUploadedImageUrl(imageUrl);
  };

  const onSubmit = (data: Post) => {
    if (!uploadImageUrl) {
      // TODO: Refactor toast code.
      toast({
        title: 'Please upload image before submit the post',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });

      return;
    }

    onPost({ ...data, platform: selectedPlatform, image: uploadImageUrl });
    reset();
    toast({
      title: 'Success!',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Box margin={5}>
      <PackageBox />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel marginTop={2}>Image</FormLabel>
        <UploadImage onUploadImage={onUploadImage} />
        <PlatformIconList
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <FormLabel>Social Name</FormLabel>
        <Input
          {...register("socialName")}
          id="socialName"
          placeholder="กรุณาใส่ชื่อบัญชีโซเชียล"
        />
        {errors.socialName && (
          <Text color="red">{errors.socialName.message}</Text>
        )}
        <FormLabel>Caption</FormLabel>
        <Input
          {...register("caption")}
          id="caption"
          placeholder="พิมพ์ข้อความของคุณ"
        />
        {errors.caption && <Text color="red">{errors.caption.message}</Text>}
        <Center marginTop={2}>
          <Button
            bgGradient="linear(to-r, #FE53BB, #09FBD3)"
            type="submit"
            width="100%"
          >
            Post
          </Button>
        </Center>
      </form>
    </Box>
  );
};

export default ImagePostForm;
