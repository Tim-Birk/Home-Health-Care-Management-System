import getConfig from "next/config";
import * as _ from "lodash";
import { Upload, Button } from "antd";
import { Dispatch, SetStateAction } from "react";
import { UploadOutlined } from "@ant-design/icons";

const { publicRuntimeConfig } = getConfig();

const {
  APIURL,
  APIKEY,
  PROJECTID,
  BRANCH,
  CDNBASE,
} = publicRuntimeConfig.graphcms;

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
    action: (file) =>
      `${APIURL}?key=${APIKEY}&path=/${PROJECTID}-${BRANCH}/${file.name}`,
    data: (file) => ({ fileUpload: file }),
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
              handle: _.get(info, "file.response.url").replace(CDNBASE, ""),
              fileName: filename,
              height,
              width,
              size,
              mimeType: type,
            },
          });

          setPictureState((state) => ({ ...state, isPicUploading: false }));
        };

        img.src = info.file.response.url;
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
