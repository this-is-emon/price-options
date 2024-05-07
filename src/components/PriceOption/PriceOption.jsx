import { checkPropTypes } from "prop-types";

const PriceOption = ({ option }) => {
  return (
    <div>
      <p className="text-center">{option.name}</p>
    </div>
  );
};

PriceOption.prototype = {
  option: checkPropTypes.object,
};

export default PriceOption;
