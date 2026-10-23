import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { GuidePage } from "@/pages/guide-page";
import { HomePage } from "@/pages/home-page";
import { NotFoundPage } from "@/pages/not-found-page";
import { PlannerPage } from "@/pages/planner-page";
import { ROUTES } from "@/shared/config/routes.config";
import { MainLayout } from "../layouts/main-layout";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.PLANNER} element={<PlannerPage />} />
          <Route path={ROUTES.GUIDE} element={<GuidePage />} />
        </Route>
        <Route>
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};