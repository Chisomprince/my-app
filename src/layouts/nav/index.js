import React, { useEffect, useState } from "react";
import Desktop from "./desktop";
import Mobile from "./mobile";

function Appbar() {
  useEffect(() => {
    if (window.innerWidth <= 600) {
      setDrawerActivate(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setDrawerActivate(true);
      } else {
        setDrawerActivate(false);
      }
    });
  }, []);
  const [drawerActivate, setDrawerActivate] = useState(false);

  return <div>{drawerActivate ? <Mobile /> : <Desktop />}</div>;
}
export default Appbar;
