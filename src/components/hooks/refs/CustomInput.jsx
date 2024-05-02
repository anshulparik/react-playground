import { forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} {...props} />
    </div>
  );
});

export default CustomInput;
