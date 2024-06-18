import React from 'react';

export const page = async ({ params }) => {
  return <div>page: {params?.locale}</div>;
};
