import {color} from "@/style/variables";

const SvgSelector = ({svg}) => {
  switch (svg) {
    //---HEADER---\\
    case "Burger":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill={color.text[1]}>
          <g id="_01_align_center" data-name="01 align center">
            <rect y="11" width="24" height="2"/>
            <rect y="4" width="24" height="2"/>
            <rect y="18" width="24" height="2"/>
          </g>
        </svg>
      );
    default:
      return <></>;
  }
};

export default SvgSelector;