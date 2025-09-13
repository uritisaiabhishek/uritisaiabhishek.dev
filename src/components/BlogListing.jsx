import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function BlogListing() {

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title:"My First Blog",
      slug: "my-first-blog",
      excerpt: "some content comes here"
    },
    {
      id: 2,
      title:"My second Blog",
      slug: "my-second-blog"
    }
  ]);

  return (
    <>
        
{/* <!-- blog --> */}
<section className="section">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h2 className="section-title">Blogs</h2>
      </div>
      
      {blogs.map(blog =>(
        <div key={blog.id} className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <article className="card shadow">
            <img className="rounded card-img-top" src="/images/blog/post-2.jpg" alt="post-thumb" />
            <div className="card-body">
              <h4 className="card-title">
                <Link className="text-dark" to={`/blog/${blog.slug}`} >
                  {blog.title}
                </Link>
              </h4>
              {blog.excerpt && 
                <p className="cars-text">
                  {blog.excerpt}
                </p>
              }
              <Link to={`/blog/${blog.slug}`} className="btn btn-xs btn-primary">Read More</Link>
            </div>
          </article>
        </div>
      ))}

    </div>
  </div>
</section>
    </>
  )
}

export default BlogListing