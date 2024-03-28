import { tr } from "date-fns/locale";

export const MENUITEMS = [
  {
    menutitle: "General",
    menucontent: "Dashboards,Widgets",
    Items: [
      {
        title: "Dashboard",
        icon: "home",
        type: "link",
        path: `${process.env.PUBLIC_URL}/dashboard`
      }
      ],
  },

  {
    menutitle: "Venues",
    menucontent: "Ready to use Apps",
    Items: [
      {
        title: "All Venues",
        icon: "project",
        type: "sub",
        badge: "badge badge-light-secondary",
        badgetxt: "New",
        active: true,
        children: [
          { path: `${process.env.PUBLIC_URL}/venues-list`, type: "link", title: "Venues-List" },
          { path: `${process.env.PUBLIC_URL}/vendors/add-venue`, type: "link", title: "Create New" },
        ],
      },
    ],
  },
  {
    menutitle: "Photographers",
    menucontent: "Ready to use Apps",
    Items: [
      {
        title: "All Photographers",
        icon: "project",
        type: "sub",
        active: true,
        children: [
          { path: `${process.env.PUBLIC_URL}/photographer-list`, type: "link", title: "Photographer-List" },
          { path: `${process.env.PUBLIC_URL}/vendors/add-photographer`, type: "link", title: "Create New" },
        ],
      },
    ],
  },
  {
    menutitle: "Destination Wedding",
    menucontent: "Ready to use Apps",
    Items: [
      {
        title: "All Destination Wedding",
        icon: "project",
        type: "sub",
        active: true,
        children: [
          { path: `${process.env.PUBLIC_URL}/destination-list`, type: "link", title: "Destination-List" },
          { path: `${process.env.PUBLIC_URL}/vendors/add-destination`, type: "link", title: "Create New" },
        ],
      },
    ],
  },
  {
    menutitle: "Account",
    menucontent: "Ready to use Apps",
    Items: [
      
      {
        title: "Settings",
        icon: "user",
        path: `${process.env.PUBLIC_URL}/app/users/profile`,
        type: "sub",
        bookmark: true,
        active: true,
        children: [
          { path: `${process.env.PUBLIC_URL}/users/edit`, type: "link", title: "Account Edit" },
        ],
      }
    ],
  },
];
