import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Wrapper from '../assets/wrappers/ChartsContainer'
import Button from './Button'
const ChartContainer = () => {
  const [toggleBar,SettoggleBar]=useState(true);
  const { monthlyApplications } = useSelector((store) => store.Stats);
  console.log(monthlyApplications);
  return (
    <Wrapper>
      <h4>Monthly Application</h4>
      <Button type="buton" onClick={() => SettoggleBar(!toggleBar)}>
        {toggleBar ?'Area Chat':'Bar Chat'}
      </Button>
    </Wrapper>
  );
}

export default ChartContainer