import React from 'react';

export default async function Page({ params }) {
  return <div>page: {params?.locale}</div>;
}
