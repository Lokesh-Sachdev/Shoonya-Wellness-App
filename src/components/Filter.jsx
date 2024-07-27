import React from "react";

const Filter = ({ router }) => {
  const handleFilter = (e) => {
    router.push({
      pathname: "/",
      query: { ...router.query, filter: e.target.value },
    });
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        <select
          onChange={handleFilter}
          name=""
          id=""
          className="border rounded p-2 text-black h-[42px] w-80"
        >
          <option value="">Filter by Type</option>
          <option value="Yoga">Yoga</option>
          <option value="Medication">Medication</option>
          <option value="Detox">Detox</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
