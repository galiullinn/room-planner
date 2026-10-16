import { Grid, useViewMode } from "@/entities/scene";
import { Canvas } from "@react-three/fiber";
import { Scene2D } from "../scene2d/Scene2D";
import { Scene3D } from "../scene3d/Scene3D";
import styles from "./PlannerViewport.module.css";

interface PlannerViewportProps {
  className?: string;
}

export const PlannerViewport = (props: PlannerViewportProps) => {
  const { className } = props;
  const viewMode = useViewMode();

  return (
    <Canvas
      className={`${styles.PlannerViewport} ${className ?? ""}`}
      fallback={<div>Loading...</div>}
    >
      {viewMode === "2d" ? <Scene2D /> : <Scene3D />}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} />
      <Grid />
    </Canvas>
  );
};
