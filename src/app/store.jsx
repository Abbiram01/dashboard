import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "../features/users/usersSlice";
import rewardsReducer from "../features/rewards/rewardsSlice";
import activitiesReducer from "../features/activities/activitiesSlice";


export const store = configureStore({
  reducer: {
    users: usersReducer,
    activities: activitiesReducer,
    rewards: rewardsReducer,
  },
});

export default store;