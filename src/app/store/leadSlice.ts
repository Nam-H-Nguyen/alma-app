// store/leadSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Lead = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  visas: string[];
  resume: string;
  openText: string;
  state: 'PENDING' | 'REACHED_OUT';
}

type LeadState = {
  leads: Lead[];
}

const initialState: LeadState = {
  leads: [],
};

const leadSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    addLead(state, action: PayloadAction<Lead>) {
      state.leads.push(action.payload);
    },
    updateLeadState(state, action: PayloadAction<{ id: string; state: 'PENDING' | 'REACHED_OUT' }>) {
      const lead = state.leads.find(lead => lead.id === action.payload.id);
      if (lead) {
        lead.state = action.payload.state;
      }
    },
  },
});

export const { addLead, updateLeadState } = leadSlice.actions;
export default leadSlice.reducer;
