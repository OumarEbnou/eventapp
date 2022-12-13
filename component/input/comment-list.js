import { useEffect, useState } from 'react';
import classes from './comment-list.module.css';

function CommentList({data}) {


  return (
    <ul className={classes.comments}>

      {data && data.map((itm) =><li key={itm._id}>
        <p>{itm.comment}</p>
        <div>
          By <address>{itm.name}</address>
        </div>
      </li>

      )}

    </ul>
  );
}

export default CommentList;
