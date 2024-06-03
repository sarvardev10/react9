import {
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import Albom from ".";

export const albomRoute = [
  {
    key: "/albom",
    Element: Albom,
    label: "Albom",
    icon: HomeOutlined,
    InfoCircleOutlined,
    ContactsOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
