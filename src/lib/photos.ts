export type Photo = {
  id: string;
  url: string;
  title: string;
  description: string;
};

const Photos: Photo[] = [
  {
    id: "1",
    url: "/p1.jpg",
    title: "Waldon Street",
    description: "this is a beautiful waldon street",
  },
  {
    id: "2",
    url: "/p2.jpg",
    title: "Breakfast Table",
    description: "this is a beautiful breakfast on the table street",
  },
  {
    id: "3",
    url: "/p3.jpg",
    title: "Aeroplan Bicycle",
    description: "Boy riding a bicycle while enjoying flying aeroplane",
  },
  {
    id: "4",
    url: "/p4.jpg",
    title: "Kashmir Valley",
    description: "this is a beautiful kashmit valley ",
  },
  {
    id: "5",
    url: "/p5.jpg",
    title: "Green Nature",
    description: "this is a natural green vegitation waldon street",
  },
  {
    id: "6",
    url: "/p6.jpg",
    title: "Bread Making",
    description: "Old female making breads at home",
  },
  {
    id: "7",
    url: "/p7.jpg",
    title: "NY Tower",
    description: "Gigantic NY tower and NYC USA",
  },
  {
    id: "8",
    url: "/p8.jpg",
    title: "Mountains",
    description: "Amazing falling mountains at Navada",
  },
];

export default Photos;
