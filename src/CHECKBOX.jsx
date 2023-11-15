import React from "react";
const Checkbox = ({ isChecked, onChange }) => {
  return <input type="checkbox" defaultChecked={isChecked} onChange={onChange} />;
};
export default Checkbox;
