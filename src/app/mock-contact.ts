import { Contact } from "./contact";

export const CONTACTS: Contact[] = [
  {
    id: 1,
    name: "Тарас Тополя",
    description: 'Фронтмен групи "Антитіла"',
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    gender: "men",
    favorite: false
  },
  {
    id: 2,
    name: "Юлія Саніна",
    description: "Cолістка українського гурту «The Hardkiss»",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    gender: "women",
    favorite: false
  },
  {
    id: 3,
    name: "Аніта Луценко",
    description:
      "Українська спортсменка, професійний тренер, відомий фахівець зі схуднення, телеведуча («Зважені та щасливі»)",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    gender: "women",
    favorite: true
  }
];
