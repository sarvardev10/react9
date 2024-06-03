import Comments from ".";
import {
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
export const commentsRoute = [
  {
    key: "/comments",
    Element: Comments,
    label: "Comments",
    icon: HomeOutlined,
    InfoCircleOutlined,
    ContactsOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
