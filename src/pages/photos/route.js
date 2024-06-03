import {
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Photos from ".";
export const photosRoute = [
  {
    key: "/photos",
    Element: Photos,
    label: "Photos",
    icon: HomeOutlined,
    InfoCircleOutlined,
    ContactsOutlined,
    UserOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
