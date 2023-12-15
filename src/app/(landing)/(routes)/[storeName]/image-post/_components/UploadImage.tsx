import { useState } from "react";
import { FaTrash } from "react-icons/fa";

import {
  Box,
  Button,
  Center,
  Flex,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

import ImageCrop from "antd-img-crop";
import { message, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

import "./styles/customUploadStyle.css";

interface Props {
  onUploadImage: (image: string) => void;
}

const getBase64 = (img: File | Blob, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const UploadImage = ({ onUploadImage }: Props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | undefined>();
  const toast = useToast();

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      const canProcessFile = beforeUpload(info.file.originFileObj as RcFile);

      if (canProcessFile) {
        getBase64(info.file.originFileObj as RcFile, (url) => {
          setLoading(false);
          setImageUrl(url);
          onUploadImage(url);
        });
      } else {
        toast({
          title: "File upload rejected.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setLoading(false);
      }
    }
  };

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      toast({
        title: "You can only upload JPG/PNG file!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      toast({
        title: "Image must be smaller than 2MB!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    return isJpgOrPng && isLt2M;
  };

  const handleRemove = () => {
    setImageUrl("");
    onUploadImage("");
    toast({
      title: "Image has been removed.",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  };

  const uploadButton = (
    <Center color="#FFF" w="100%" h="100%">
      <Stack>
        <Box>{loading ? <LoadingOutlined /> : <PlusOutlined />}</Box>
        <Text marginTop={2}>Upload</Text>
      </Stack>
    </Center>
  );

  return (
    <Center>
      <Flex direction="column" alignItems="center">
        <ImageCrop rotationSlider>
          <>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="http://localhost:3000/api/upload-image"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{ width: "100%", borderRadius: "5px" }}
                />
              ) : (
                uploadButton
              )}
              {/* <Box>Test</Box> */}
            </Upload>
          </>
        </ImageCrop>
        <Button colorScheme="pink" onClick={handleRemove}>
          <FaTrash />
        </Button>
      </Flex>
    </Center>
  );
};

export default UploadImage;
