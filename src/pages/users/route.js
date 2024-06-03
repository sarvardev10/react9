import {
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Users from ".";

export const usersRoute = [
  {
    key: "/users",
    Element: Users,
    label: "Users",
    icon: HomeOutlined,
    InfoCircleOutlined,
    ContactsOutlined,
    UserOutlined,
    children: [],
    visible: true,
    access: "main",
  },
];
