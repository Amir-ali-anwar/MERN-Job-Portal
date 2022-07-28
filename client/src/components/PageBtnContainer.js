import React from 'react'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import Button from '../components/Button'
const PageBtnContainer = () => {
  return (
    <Wrapper>
      <Button className="prev-btn">
        <HiChevronDoubleLeft /> Prev
      </Button>
      <div className='btn-container'>
        page button 
      </div>
      <Button className="prev-btn">
        next
        <HiChevronDoubleRight />
      </Button>
    </Wrapper>
  );
}

export default PageBtnContainer