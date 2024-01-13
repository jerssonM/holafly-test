"use client";
import { useQuery } from "react-query";
import { useMemo, useState } from "react";
import { Card, Spinner } from "keep-react";
import { useSession } from "next-auth/react";

import { PlanStatus } from "../services/models";
import { PlanCard } from "../components/plan-card";
import { TabsPlans } from "../components/tabs-plans";
import { QUERIES, QUERY_CACHE_CONFIG } from "../constants";
import { fetchMobilePlans } from "../services/mobile-plans.service";

export const HomeContainer = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { data: session } = useSession();
  const mobilePlansQuery = useQuery({
    queryKey: [QUERIES.MOBILE_PLANS, session?.user?.id],
    queryFn: () => fetchMobilePlans(1),
    enabled: Boolean(session?.user?.id),
    ...QUERY_CACHE_CONFIG,
  });

  const isLoading = mobilePlansQuery.isFetching || mobilePlansQuery.isLoading;

  const filteredPlans = useMemo(() => {
    if (mobilePlansQuery.data?.length) {
      const activePendingPlans = [PlanStatus.Active, PlanStatus.Pending];
      return mobilePlansQuery.data.filter(({ status }) =>
        tabIndex === 0
          ? activePendingPlans.includes(status as PlanStatus)
          : status === PlanStatus.Expired
      );
    }
    return [];
  }, [mobilePlansQuery.data, tabIndex]);

  return (
    <Card>
      <Card.Title className="p-4">
        Mobile plans - {session?.user.name}
      </Card.Title>
      <Card.Container>
        {isLoading ? (
          <div className="h-96 flex justify-center items-center">
            <Spinner color="info" size="xl" />
          </div>
        ) : (
          <TabsPlans tabIndex={tabIndex} onChangeTabIndex={setTabIndex}>
            <div className="grid grid-cols-1 lg:md:grid-cols-4 md:grid-cols-3 gap-4">
              {filteredPlans.map((plan) => (
                <PlanCard plan={plan} key={plan.id} />
              ))}
            </div>
          </TabsPlans>
        )}
      </Card.Container>
    </Card>
  );
};
