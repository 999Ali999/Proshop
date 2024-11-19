import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/index.css'; // Adjust the path as necessary

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  const location = useLocation();
  const currentPage = parseInt(location.pathname.split('/').pop());

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/page/${x + 1}`
                : `/admin/productlist/${x + 1}`
            }
            className={`page-link ${currentPage === x + 1 ? 'active' : ''}`}
          >
            {x + 1}
          </Link>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
