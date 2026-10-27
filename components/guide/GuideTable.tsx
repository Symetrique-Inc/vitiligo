import React from 'react';

interface GuideTableProps {
  headers: string[];
  rows: (React.ReactNode[])[];
}

export const GuideTable: React.FC<GuideTableProps> = ({ headers, rows }) => {
  return (
    <div className="table-scroll overflow-x-auto my-5 border border-[#DDE5F5] rounded-md bg-white shadow-xs">
      <table className="w-full border-collapse min-w-[480px] text-xs sm:text-[13px] leading-relaxed">
        <thead>
          <tr className="bg-[#EAF2FF] border-b border-[#DDE5F5]">
            {headers.map((h, i) => (
              <th
                key={i}
                scope="col"
                className="p-3.5 sm:p-4 text-left font-semibold text-[#0B1F6B] align-top"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIndex) => (
            <tr
              key={rIndex}
              className="border-b border-[#EAF2FF] last:border-b-0 hover:bg-[#F9FBFF] transition-colors"
            >
              {row.map((cell, cIndex) => (
                <td
                  key={cIndex}
                  className="p-3.5 sm:p-4 text-left align-top text-[#1E2A4A]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
