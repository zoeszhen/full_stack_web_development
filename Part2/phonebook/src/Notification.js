import React from 'react';

export const Notification = ({ message, messageStyle }) => message && <div style={messageStyle}>{message}</div>;
