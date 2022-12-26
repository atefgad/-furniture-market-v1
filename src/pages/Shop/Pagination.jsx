import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Col } from "reactstrap";
import { Loading, ProductCard } from "../../components";

export default function Pagination(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    //console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );

    setItemOffset(newOffset);

    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      {currentItems.length === 0 ? (
        <div>
          <h2>No Products are found</h2>
        </div>
      ) : (
        currentItems.map((item) => (
          <Col lg="4" md="6" key={item.id}>
            <ProductCard item={item} />
          </Col>
        ))
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel={<i className="ri-arrow-right-s-line fs-2"></i>}
        previousLabel={<i className="ri-arrow-left-s-line fs-2"></i>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}
