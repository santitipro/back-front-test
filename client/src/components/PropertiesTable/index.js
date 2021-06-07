import { useMemo } from "react";
import { useTable, useFilters, useSortBy, useGlobalFilter } from "react-table";
import PropTypes from "prop-types";

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

const PropertiesTable = ({ properties }) => {
  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
        Cell: (cell) => {
          return `${cell.value.substr(0, 50)}...`;
        },
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Image",
        accessor: "image",
        Cell: (cell) => {
          return <img width="200" alt="" src={cell.value} />;
        },
      },
    ],
    [properties]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data: properties,
        defaultColumn,
      },
      useFilters,
      useGlobalFilter,
      useSortBy
    );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

PropertiesTable.propTypes = {
  properties: PropTypes.array.isRequired,
};

export default PropertiesTable;
