const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut architecto similique, tempore veritatis itaque consequuntur sunt, sint excepturi numquam eaque vel sit omnis nam incidunt? Obcaecati animi nihil, sint fugit magni error nisi architecto possimus a aliquam molestias cumque officiis ab pariatur. Corporis architecto vero vitae molestias, maxime neque hic id, quibusdam, officia explicabo commodi optio eligendi nemo praesentium excepturi quo doloremque! Fugiat porro libero, quas aut debitis tempora?";

const blogPosts = [
  {
    id: 1,
    title: "Post 1",
    content: [lorem, lorem, lorem, lorem, lorem, lorem, lorem, lorem],
    isActive: false,
  },
  {id: 2, title: "Post 2", content: lorem, isActive: false},
  {id: 3, title: "Post 3", content: lorem, isActive: false},
];

function getPosts() {
  return blogPosts;
}

export default getPosts;
