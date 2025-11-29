"use client";

import { useQuery } from "@tanstack/react-query";
import { getShows } from "@/lib/api/shows";

export function useShows() {
  return useQuery({
    queryKey: ["shows"],
    queryFn: getShows,
    staleTime: 60 * 60 * 1000,
  });
}
