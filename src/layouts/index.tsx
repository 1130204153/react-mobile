import React, { ReactChild, useEffect } from 'react';

interface LayoutsProps {
  children: ReactChild;
}

function Layouts(props: LayoutsProps) {
  const { children } = props;

  function mobileAdapt() {
    // 设计稿为375，写样式时为设计稿大小/100rem
    document.getElementsByTagName('html')[0].style.fontSize = `${
      window.screen.width / 3.75
    }px`;
  }

  useEffect(() => {
    mobileAdapt();
  }, []);

  return <div>{children}</div>;
}

export default Layouts;
