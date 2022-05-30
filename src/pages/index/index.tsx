import React, { useContext } from 'react';
import { Button, NoticeBar } from 'antd-mobile';
import { ctx } from '@/context';

function Index() {
  const { userInfo, setUserInfo } = useContext(ctx);

  return (
    <div>
      <NoticeBar content="默认" color="default" />
      <Button
        color="primary"
        onClick={() => {
          setUserInfo({ name: 'zhang' });
        }}
      >
        click
      </Button>
      <div style={{ fontSize: '.14rem' }}>{JSON.stringify(userInfo)}</div>
    </div>
  );
}

export default Index;
