"use client";
import { FC, PropsWithChildren } from "react";
import { Card, Tabs } from "keep-react";

interface TabsPlansProps {
  tabIndex: number;
  onChangeTabIndex: (tabIndex: number) => void;
}

export const TabsPlans: FC<PropsWithChildren<TabsPlansProps>> = ({
  children,
  tabIndex,
  onChangeTabIndex,
}) => {
  return (
    <Card>
      <Card.Container>
        <Tabs
          color="error"
          tabIndex={tabIndex}
          onActiveTabChange={onChangeTabIndex}
        >
          <Tabs.Item title="Active/Pending">{children}</Tabs.Item>
          <Tabs.Item title="Expired">{children}</Tabs.Item>
        </Tabs>
      </Card.Container>
    </Card>
  );
};
