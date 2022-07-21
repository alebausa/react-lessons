import React from 'react';
import cats from '../images/cats.jpeg';

export default function Articles() {
  return (
    <section className="section">
      <article className="card">
        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro maiores ratione quidem tempore, ex magnam error quos numquam laudantium obcaecati sunt quis doloremque, laborum consequatur eveniet, eum dolor delectus?</p>
      </article>
      <article className="card">
        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam porro maiores ratione quidem tempore, ex magnam error quos numquam laudantium obcaecati sunt quis doloremque, laborum consequatur eveniet, eum dolor delectus?</p>
        <img width="300px" src={cats} alt="Imagen de gatitos lindos" />
      </article>
    </section>
  )
}
