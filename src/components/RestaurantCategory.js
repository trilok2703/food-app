import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems,setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  }

  return (
    <div>
      {/* Accordion Header */}
      <div
        className="flex justify-between bg-gray-50 mb-4 px-3 py-2 cursor-pointer shadow-md"
        onClick={handleClick}
      >
        <p className="m-0 text-sm font-bold">
          {data.title} ({data.itemCards.length})
        </p>
        {!showItems ? (
          <p>
            <svg
              className="h-6 w-6 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </p>
        ) : (
          <p>
            <svg
              className="h-6 w-6 text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="6 15 12 9 18 15" />
            </svg>
          </p>
        )}
      </div>
      {/* Accordion List */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
