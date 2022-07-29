import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import Button from "../components/Button";
import { changePage } from "../features/Job/JobSlice";
const PageBtnContainer = () => {
  const dispatch= useDispatch()
  const { numOfPages, page } = useSelector((store) => store.Job);
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  console.log(pages);

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };
  const nextPage = () => {
   let newPage = page + 1;
   if (newPage > numOfPages) {
     newPage = 1;
   }
     dispatch(changePage(newPage));
  };
  return (
    <Wrapper>
      <Button className="prev-btn" handleChange={prevPage}>
        <HiChevronDoubleLeft /> Prev
      </Button>
      <div className="btn-container">
        {pages.map((pageNumber) => {
          return (
            <Button
              key={pageNumber.index}
              className={`pageBtn ${page === pageNumber ? "active" : ""}`}
              handleChange={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </Button>
          );
        })}
      </div>
      <Button className="prev-btn" handleChange={nextPage}>
        next
        <HiChevronDoubleRight />
      </Button>
    </Wrapper>
  );
};

export default PageBtnContainer;
