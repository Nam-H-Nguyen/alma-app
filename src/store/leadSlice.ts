import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LeadRootState } from "./store";

export type Lead = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  linkedin: string;
  visas: string[];
  inquiry: string;
  status: "PENDING" | "REACHED_OUT";
  createdAt: string;
  updatedAt: string;
};

const initialLead: Lead = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  linkedin: "",
  visas: [],
  inquiry: "",
  status: "PENDING",
  createdAt: "",
  updatedAt: "",
};

type LeadState = {
  leads: Lead[];
};

const initialState: LeadState = {
  leads: [initialLead],
};

const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    addLead(state, action: PayloadAction<Lead>) {
      state.leads.push(action.payload);
    },
    updateLeadStatusState(
      state,
      action: PayloadAction<{ id: string; status: "PENDING" | "REACHED_OUT" }>
    ) {
      const lead = state.leads.find((lead) => lead.id === action.payload.id);
      if (lead) {
        lead.status = action.payload.status;
        lead.updatedAt = new Date().toISOString();
      }
    },
  },
});

export const getLeads = (state: LeadRootState) => state.leads;
export const { addLead, updateLeadStatusState } = leadSlice.actions;
export default leadSlice.reducer;
