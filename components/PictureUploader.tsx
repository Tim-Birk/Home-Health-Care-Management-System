import * as _ from "lodash";
import { Upload, Button } from "antd";
import { Dispatch, SetStateAction } from "react";
import { UploadOutlined } from "@ant-design/icons";

export const PictureUploader = ({
  handleSetImages,
  setPictureState,
}: {
  handleSetImages: (images: any) => void;
  setPictureState: Dispatch<
    SetStateAction<{
      isQueryLoading: boolean;
      isPicUploading: boolean;
    }>
  >;
}) => {
  const uploadProps = {
    name: "file",
    accept: "image/*",
    action: (file) =>
      `${process.env.APIURL}?key=${process.env.APIKEY}&path=/${process.env.PROJECTID}-${process.env.BRANCH}/${file.name}`,
    data: (file) => ({ fileUpload: file }),
    // headers: {
    //   // "Access-Control-Allow-Origin": "*",
    //   "Content-type": "image/*, application/pdf, application/json",
    //   // "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT",
    //   // "Access-Control-Allow-Headers": "*",
    // },
    onChange: async (info) => {
      if (info.file.status === "uploading") {
        setPictureState((state) => ({ ...state, isPicUploading: true }));
      }

      if (info.file.status === "done") {
        const { size, type, filename } = info.file.response;

        var img = new Image();
        img.onload = function () {
          const height = _.get(this, "naturalHeight");
          const width = _.get(this, "naturalWidth");

          handleSetImages({
            create: {
              handle: _.get(info, "file.response.url").replace(
                process.env.CDNBASE,
                ""
              ),
              fileName: filename,
              height,
              width,
              size,
              mimeType: type,
            },
          });
        };

        img.src = info.file.response.url;

        setPictureState((state) => ({ ...state, isPicUploading: false }));
      } else if (info.file.status === "error") {
        setPictureState((state) => ({ ...state, isPicUploading: false }));
      }
    },
  };

  return (
    <Upload {...uploadProps}>
      <Button>
        <UploadOutlined /> Click to Upload
      </Button>
    </Upload>
  );
};
