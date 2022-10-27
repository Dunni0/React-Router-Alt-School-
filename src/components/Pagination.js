import React from "react";
// import './pagination.css';


function Pagination({ totalPage, handlePageBtn }) {
  return (
    <>

    <div className="pagination">
      {Array.from({ length: totalPage }, (value, index) => index + 1).map(
        (each) => {
            console.log(each);
          return <button className="pagination__item" onClick={()=> handlePageBtn(each)}>{each}</button>;
        }
      )}
    </div>


    </>

  );
}

export default Pagination;