import React from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import Button from '../components/Button'
const PageBtnContainer = () => {
  const prevPage=()=>{
    console.log('prevpage')
  }
  const nextPage = () => {
    console.log("nextPage");
  };
  return (
    <Wrapper>
      <Button className="prev-btn" handleChange={prevPage}>
        <HiChevronDoubleLeft /> Prev
      </Button>
      <div className="btn-container">page button</div>
      <Button className="prev-btn" handleChange={nextPage}>
        next
        <HiChevronDoubleRight />
      </Button>
    </Wrapper>
  );
}

export default PageBtnContainer