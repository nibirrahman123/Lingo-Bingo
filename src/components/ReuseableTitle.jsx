import PropTypes from "prop-types";
const ReuseableTitle = ({title, paragraph}) => {
    return (
        <div className="  bg-[#eef7ffe0] rounded-xl py-5 px-3">
            <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-color">{title}</h2>
            <p className="text-secondary-color font-medium">{paragraph}</p>
            </div>
        </div>
    );
};


export default ReuseableTitle;

ReuseableTitle.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string
}