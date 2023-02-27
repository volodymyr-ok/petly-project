import  symbol from "../../assets/svg/symbol.svg"
import PropTypes from 'prop-types';

export const SvgMarkup = (width, height, SvgName) =>{
  const useTag = `<use xlink:href="${symbol}#${SvgName}" />`;
return (
    <svg width={width} height={height} dangerouslySetInnerHTML={{__html: useTag }} />
);
}

SvgMarkup.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    SvgName: PropTypes.string,
  };
  