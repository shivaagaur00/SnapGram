import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Client, Account } from 'appwrite';  // Import Appwrite SDK
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')  // Replace with your Appwrite endpoint
  .setProject('676910bc000097b65a8d');  // Replace with your Appwrite project ID

// Initialize Appwrite account
const account = new Account(client);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App account={account} />
  </BrowserRouter>
);
