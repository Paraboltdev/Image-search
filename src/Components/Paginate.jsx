import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

export  function Paginate({data}) {

    const items=[...data]

    function Items({ currentItems }) {
        return (
          <>
            {currentItems &&
              currentItems.map((item) => (
                <div>
                  <h3>Item #{item}</h3>
                </div>
              ))}
          </>
        );
      }
     // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);


  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + result;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / result));
  }, [itemOffset, result]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * result) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };




    return (
        <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    )
}


export default Paginate
