/** Progress state stored in localStorage */
export interface ProgressState {
  completedPages: string[];
  lastVisited: string | null;
  updatedAt: string;
}

/** Theme options */
export type Theme = "light" | "dark";
