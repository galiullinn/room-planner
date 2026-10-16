import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { MainLayout } from "../layouts/main-layout";
import { ROUTES } from "@/shared/config/routes.config";
import { HomePage } from "@/pages/home-page";
import { PlannerPage } from "@/pages/planner-page";
import { GuidePage } from "@/pages/guide-page";
import { NotFoundPage } from "@/pages/not-found-page";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} Component={HomePage} />
          <Route path={ROUTES.PLANNER} Component={PlannerPage} />
          <Route path={ROUTES.GUIDE} Component={GuidePage} />
        </Route>
        <Route>
          <Route path={ROUTES.NOT_FOUND} Component={NotFoundPage} />
        </Route>
      </Routes>
    </Suspense>
  );
};
