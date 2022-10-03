import { Link } from 'react-router-dom';

import './PostCard.scss';

function PostCard({ post, categories }) {
  const date = new Date(post.created_at);
  console.log(post, categories);


  return (
    <article className='post_card'>
      <Link to={ `/post/${post.slug}` } className='post_card__link'>
        <div className="post_card__img">
          <img src={ post.miniature } alt={ `${post.title}_miniature` } />
        </div>
        <div className="post_card__text">
          <div className="post_card__body">
            <h4 className='post_card__tittle'>{ post.title }</h4>
            <p>{ post.content.slice(0, (post.content.length > 100) ? 100 : post.content.length) }</p>
          </div>
          <div className="post_card__footer">
            {/* { categories.map((value,index) => <span key={index}>{value.category}</span>)} */}
            <span>{ `Por ${post.user} (${date.toDateString()})` }</span>
          </div>
        </div>

      </Link>
    </article >
  )
}

export default PostCard