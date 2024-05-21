const HeadingIcon = ({ text = "empty text" }) => {
  return (
    <div className="flex items-center pb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="12"
        viewBox="0 0 32 12"
        fill="none"
      >
        <path
          d="M0.226497 6.22949L6 12.003L11.7735 6.22949L6 0.455989L0.226497 6.22949ZM31.7735 6.22949L26 0.455989L20.2265 6.22949L26 12.003L31.7735 6.22949ZM6 7.22949H26V5.22949H6V7.22949Z"
          fill="#C99B4C"
        />
      </svg>
      <p className="text-center text-sm ml-1">{text}</p>
    </div>
  );
};

export default HeadingIcon;
