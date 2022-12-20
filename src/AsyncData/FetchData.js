import {useState, useEffect} from 'react';

const fetchData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then((data) => {
      setPosts(data);
    })
  }, []);

  return (
    <div>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default fetchData;
