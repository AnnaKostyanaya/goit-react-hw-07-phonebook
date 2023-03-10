import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL= "https://63faac997a045e192b5d14b5.mockapi.io"

export const fetchContacts = createAsyncThunk(
'contacts/fetchContacts',
async (_, { rejectWithValue }) => {
try {
    const contacts = await axios.get('api/phonebook/contacts');
    return contacts.data;
} catch (error) {
    return rejectWithValue(error.message);
}
},
);

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async ({id, name, number }, thunkAPI) => {
    try {
        const response = await axios.post("/api/phonebook/contacts", { id, name, number });
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    }
    );

    export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`/api/phonebook/contacts/${id}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    }
    );
