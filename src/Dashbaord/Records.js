import React from "react";

const Records = ({ data }) => {
  return (
    <table className="min-w-full border-collapse block md:table">
      <thead className="block md:table-header-group">
        <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
          <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            id
          </th>
          <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            pool
          </th>
          <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            token 0 amount
          </th>
          <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            token 0 address
          </th>
          <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            token 1 amount
          </th>
          <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            token 1 address
          </th>
          <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
            in_range
          </th>
        </tr>
      </thead>
      <tbody class="block md:table-row-group">
        {data.map((item) => (
          <tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              {item.id}{" "}
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              {item.pool}{" "}
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              {item.tokens[0].amount}{" "}
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              {item.tokens[0].asset.address}{" "}
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              {item.tokens[1].amount}{" "}
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              {item.tokens[1].asset.address}{" "}
            </td>
            <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
              {item.in_range}{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Records;
