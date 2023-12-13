import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createMessages } from '../store/messagesSlice';

const UpdatedMessageComponent = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages.value);
  const status = useSelector((state) => state.messages.status);

  useEffect(() => {
    dispatch(createMessages());
  }, [dispatch]);

  return (
    <div>
      <h1>Updated Random Message:</h1>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : status === 'failed' ? (
        <p className="error-message">Error loading message</p>
      ) : (
        <p className='message-content'>{message}</p>
      )}
    </div>
  );
};

export default UpdatedMessageComponent;