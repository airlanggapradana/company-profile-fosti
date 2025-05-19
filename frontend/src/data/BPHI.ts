import { TeamType } from "@/types/image";
import { dataFostiAllMembers } from "./dataMemberFosti";

export const bphiTeam: TeamType[] = dataFostiAllMembers.filter(
  (member) => member.role === "BPHI",
);
