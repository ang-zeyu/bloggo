import React from 'react';

import Image from '../../Image/Image';
import Button from '../../Button/Button';
import './Post.css';

const post = props => (
  <article className="post">
    <header>
      <h3 className="post__meta">
        {props.author} <span className="post__date">{props.date}</span>
      </h3>
      <h1 className="post__title">{props.title}</h1>
    </header>
    <div className="post__content" dangerouslySetInnerHTML={{ __html: props.content}}></div>
    <div className="post__actions">
      <Button mode="flat" link={props.id}>
        View
      </Button>
      <Button mode="flat" onClick={props.onStartEdit}>
        Edit
      </Button>
      <Button mode="flat" design="danger" onClick={props.onDelete}>
        Delete
      </Button>
    </div>
  </article>
);

export default post;
