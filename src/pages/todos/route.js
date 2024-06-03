import {
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Todos from ".";

export const todosRoute = [
  {
    key: "/todos",
    Element: Todos,
    label: "Todos",
    icon: HomeOutlined,
    InfoCircleOutlined,
    ContactsOutlined,
    UserOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
