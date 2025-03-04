import type { SingletonBase } from "elysia";
import type { Services } from "../services";

export type ElysiaSingleton = SingletonBase & { store: { services: Services } }
