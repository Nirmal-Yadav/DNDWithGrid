import React from "react";
import DropArea from "../DND/DropArea";
import "./Table.css";

function Table({ element }) {
  // Define a table configuration with rowSpan and colSpan information
  const tableConfig = [
    [
      { content: <DropArea element={element} />, rowSpan: 2 }, // spans two rows
      { content: <DropArea element={element} /> },
      { content: <DropArea element={element} /> }
    ],
    [
      // Omit the first cell in this row because it's spanned from above
      { content: <DropArea element={element} /> },
      { content: <DropArea element={element} /> },
      { content: <DropArea element={element} /> },

    ],
    [
      { content: <DropArea element={element} /> },
      { content: <DropArea element={element} />, colSpan: 2 } // spans two columns
    ]
  ];

  return (
    <div>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          {tableConfig.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => {
                // Check if the cell should be skipped based on rowSpan or colSpan
                if (
                  rowIndex > 0 &&
                  tableConfig[rowIndex - 1][colIndex]?.rowSpan > 1 &&
                  rowIndex < rowIndex + tableConfig[rowIndex - 1][colIndex].rowSpan
                ) {
                  // Skip cell if it's covered by a previous rowSpan
                  return null;
                }

                if (
                  colIndex > 0 &&
                  tableConfig[rowIndex][colIndex - 1]?.colSpan > 1 &&
                  colIndex < colIndex + tableConfig[rowIndex][colIndex - 1].colSpan
                ) {
                  // Skip cell if it's covered by a previous colSpan
                  return null;
                }

                return (
                  <td
                    key={colIndex}
                    rowSpan={cell.rowSpan || 1}
                    colSpan={cell.colSpan || 1}
                    style={{ border: "1px solid black" }}
                  >
                    {cell.content}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
