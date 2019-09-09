function Away(){
    const [awayValue, awaySetValue] = useState(32);

    
  const awayFieldScore = () => {
    awaySetValue(awayValue + 3);
  };

  const awayTouchDownScore = () => {
    awaySetValue(awayValue + 7);
  };



}

export default Away;