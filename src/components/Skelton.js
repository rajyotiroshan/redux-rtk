import classNames from "classnames";

/**
 *
 * @param {times} no of times to show skelton
 */
function Skelton({ times, className }) {
  /*   const boxes = [];

  for (let i = 0; i < times; i++) {
    boxes.push(<div key={i}></div>);
  }
  return boxes; */

  //another way
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  );
  const innerClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );

  //Array(times) => create new array of size times
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames}></div>
        </div>
      );
    });

  return boxes;
}

export default Skelton;
