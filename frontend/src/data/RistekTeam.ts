import { TeamType } from "@/types/image";
import { dataFostiAllMembers } from "./dataMemberFosti";

export const ristekTeam: TeamType[] = dataFostiAllMembers.filter(
  (member) => member.role === "RISTEK",
);
