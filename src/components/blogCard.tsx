import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface Blog {
  id: number;
  imageSrc: string;
  category: string;
  Date: string;
  title: string;
  link: string;
  content: string;
  author: string;
  authorPic: string;
  tags: string[];
}

interface BlogCardProps {
  blogs: Blog[];
  currentPage: number;
  selectedCategory: string | null;
  pageSize: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);
  console.log(filteredBlogs);

  return (
    <div className="blogs-wraper grid">
      {Array.isArray(filteredBlogs) ? (
        filteredBlogs.map((elem) => (
          <Link to={`/blogs/${elem.id}/`} className="blog-chips" key={elem.id}>
            <img src={elem.imageSrc} alt="thumbnails img" />
            <div className="blog-chips-dsec">
              <div className="category category2">
                <div className="blogCatagoryLable">{elem.category}</div>
                <div className="date"><MdDateRange />{elem.Date}</div>
              </div>
              <h3 className="postCardTitle">{elem.title}</h3>
            </div>
          </Link>
        ))
      ) : (
        <p>Error: Unable to fetch blogs</p>
      )}
    </div>
  );
};

export default BlogCard;
