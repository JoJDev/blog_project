import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../PostCard/PostCard';

import './Posts.scss';

function Posts() {
	const [posts, setPosts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [isLoadding, setIsLoadding] = useState(false);

	const postsURL = `${import.meta.env.VITE_BLOG_API_BASE_URL}blog/posts/`;
	const categoriesURL = `${import.meta.env.VITE_BLOG_API_BASE_URL}blog/categories/`
	const postArray = () => {
		return posts.map((item, index) => <PostCard
			key={ item.id }
			post={ item }
			// categories={ categories.filter((value, index) => { console.log(item.categories[index], value.id); return item.categories[index] == value.id }) }
			categories={ posts.categories}

		/>);
	}


	const loadHandle = () => {
		/*---------------------------- Tests ---------------------------------*/
		setIsLoadding(true);
		setPosts([
			{
				"id": "1",
				"title": "python",
				"slug": "python-slug",
				"created_at": "2022-08-26T13:27:31.858797-05:00",
				"content": "python content",
				"user": "dan",
				"published": true,
				"miniature": "src/assets/logo.png",
				"categories": [1]

			},
			{
				"id": "2",
				"title": "python2",
				"slug": "python-slug-2",
				"created_at": "2022-08-26T13:27:31.858797-05:00",
				"content": "python content 2 asd aasfas dfsadf sgkjsadfsd sf sdf sdf sd asd asd asd asd as sa sfasd asdsd asfasf aasfdasf sd asasfdasfasdaiaojdsf",
				"description": "python description 2",
				"user": "dan",
				"published": true,
				"miniature": "src/assets/tech-background.jpg",
				"categories": [2, 3]
			},
		])

		setCategories([
			{
				"id": 1,
				"category": "Python"
			},
			{
				"id": 2,
				"category": "Tech"
			},
			{
				"id": 3,
				"category": "Web"
			},
			{
				"id": 4,
				"category": "Backend"
			},

		])
		/*--------------------------------------------------------------------*/

		// setIsLoadding(false);
		axios.get(categoriesURL)
			.then(res => {
				setCategories(res.data);
			})
			.catch(error => console.log(error, isLoadding));


		axios.get(postsURL)
			.then(res => {
				setIsLoadding(true);
				setPosts(res.data);
				// console.log(posts);
				// console.log(isLoadding);
			})
			.catch(error => console.log(error, isLoadding));
	}

	useEffect(loadHandle, []);

	return (
		<section className='posts__section'>
			<div className='posts__group_links'>
				<button>Ultimas entradas</button>
				<button>Categoria 1</button>
				<button>Categoria 2</button>
				<button>Categoria 3</button>
				<button>Categoria 4</button>
			</div>
			<div className="posts__container">
				{ isLoadding && postArray() }
			</div>

		</section>
	)
}

export default Posts