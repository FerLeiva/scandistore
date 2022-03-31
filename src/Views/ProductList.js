import React from 'react';
import Card from '../Components/Card';

export default function ProductList() {
  return (
    <>
      <h2 style={{textAlign: 'center', margin:'2rem'}}>List of products</h2>
      <div style={{display:'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  )
}
