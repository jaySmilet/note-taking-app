import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import NewNote from './NewNote';
import './style.css';

export default function App() {
  return (
    <div className="my-4">
      <Routes>
        <Route path="/" element={<h2>Hi</h2>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h2>Show</h2>} />
          <Route path="edit" element={<h2>Edit</h2>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
