import { List, ListItem } from "@mui/material";
import { useState } from "react";

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState("2");

    const menus = [
      {
        id: "1",
        label: "vector6",
        url: "/vector6",
        icon: "/vector6.svg"
      },
      {
        id: "2",
        label: "vector7",
        url: "/vector7",
        icon: "/vector7.svg"
      },
      {
        id: "3",
        label: "group-3131",
        url: "/group-3131",
        icon: "/group-3131.svg"
      },
      {
        id: "4",
        label: "group-3132",
        url: "/group-3132",
        icon: "/group-3132.svg"
      },
      {
        id: "5",
        label: "vector8",
        url: "/vector8",
        icon: "/vector8.svg"
      },
      {
        id: "6",
        label: "bxenvelopesvg",
        url: "/bxenvelopesvg",
        icon: "/bxenvelopesvg.svg"
      },
      {
        id: "6",
        label: "line"
      },
      {
        id: "7",
        label: "group-3130",
        url: "/group-3130",
        icon: "/group-3130.svg"
      },
      {
        id: "8",
        label: "group-3133",
        url: "/group-3133",
        icon: "/group-3133.svg"
      },
      {
        id: "9",
        label: "vector9",
        url: "/vector9",
        icon: "/vector9.svg"
      },
      {
        id: "10",
        label: "group-3134",
        url: "/group-3134",
        icon: "/group-3134.svg"
      },
      {
        id: "11",
        label: "group-3135",
        url: "/group-3135",
        icon: "/group-3135.svg"
      },
      {
        id: "12",
        label: "24more",
        url: "/24more",
        icon: "/24more.svg"
      },
    ]
  return (
    <div className="primaryNavbar">
      <List className="primaryNavbaritem">
          {
            menus.map((page) => (
                page?.icon ? <ListItem key={page.id} className="container" 
                onClick={() => setActiveIndex(page.id)}
                sx={{
                  backgroundColor: activeIndex === page.id ? "#195396" : "transparent"
                }}>
                    <img className="menu-icon" src={page.icon} alt={page.label}/>
                </ListItem> : <div className="menu-line"></div>
              ))
          }
        </List>
    </div>
  );
};

export default Sidebar;