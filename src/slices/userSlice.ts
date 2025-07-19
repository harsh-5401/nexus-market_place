import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import usersData from "../data/users.json";

// Define Item interface
export interface Item {
  name: string;
  description: string;
  image: string;
}

// Define User interface
export interface User {
  id: number;
  name: string;
  email: string;
  mobile: string;
  status: "Active" | "Inactive";
  item: Item;
}

// Define the state interface
interface UserState {
  users: User[];
  filteredUsers: User[];
  isLoading: boolean;
  error: string | null;
  searchTerm: string;
}

// Initial state
const initialState: UserState = {
  users: [],
  filteredUsers: [],
  isLoading: false,
  error: null,
  searchTerm: "",
};

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call with a delay
      return new Promise<User[]>((resolve) => {
        setTimeout(() => {
          resolve(usersData as unknown as User[]);
        }, 500);
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      return rejectWithValue("Failed to fetch users");
    }
  }
);

// Create the user slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      if (action.payload === "") {
        state.filteredUsers = state.users;
      } else {
        const searchTermLower = action.payload.toLowerCase();
        state.filteredUsers = state.users.filter(
          (user) =>
            user.name.toLowerCase().includes(searchTermLower) ||
            user.email.toLowerCase().includes(searchTermLower) ||
            user.mobile.includes(searchTermLower) ||
            user.status.toLowerCase().includes(searchTermLower) ||
            user.item.name.toLowerCase().includes(searchTermLower) ||
            user.item.description.toLowerCase().includes(searchTermLower)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchTerm } = userSlice.actions;
export default userSlice.reducer; 