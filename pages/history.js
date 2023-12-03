import Header2 from './components/Header'
import React, { useState } from 'react'
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import {
    Table,
    Header,
    HeaderRow,
    Body,
    Row,
    HeaderCell,
    Cell,
  } from "@table-library/react-table-library/table";

const theme = useTheme([
  getTheme(),
  {
    HeaderRow: `
      background-color: #00FFF0;
    `,
    Row: `
      &:nth-of-type(odd) {
        background-color: #F2BFFF;
      }

      &:nth-of-type(even) {
        background-color: #00FFF0;
      }
    `,
  },
]);
const nodes = [
  {
    id: 1,
    profile_code: 'PrinterA4-01',
    name: 'FileDautien.pdf',
    internal_machine: "PrinterA4-01",
    paper_copy: 1,
    sum_paper: 455,
    time: '20/10/2023 3:15',
    time_re: '20/10/2023 3:15',
    kind_paper: 'A4',
    evaluate: "3 sao",
    edit: "Chỉnh Sửa",
    again: "In lần nữa",
  },
];

const printer = () => {
    const [search, setSearch] = useState("");
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };
    const data = {
        nodes: nodes.filter((item) =>
          item.profile_code.toLowerCase().includes(search.toLowerCase())
        ),
      };
  return(
    <>
      <Header2></Header2>
        <label className='search' htmlFor="search">
        Search: 
            <input id="search" type="text" value={search} onChange={handleSearch} />
        </label>
        <br />
        <Table data={data} theme={theme}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>Mã hồ sơ</HeaderCell>
                <HeaderCell>Tên tài liêu</HeaderCell>
                <HeaderCell>Tên máy in</HeaderCell>
                <HeaderCell>Số bản copy</HeaderCell>
                <HeaderCell>Tổng số trang</HeaderCell>
                <HeaderCell>Thời gian đăng ký</HeaderCell>
                <HeaderCell>Thời gian nhận</HeaderCell>
                <HeaderCell>Loại giấy</HeaderCell>
                <HeaderCell>Đánh giá</HeaderCell>
                <HeaderCell>Nhận xét</HeaderCell>
                <HeaderCell></HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                  <Cell>{item.profile_code}</Cell>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.internal_machine}</Cell>
                  <Cell>{item.paper_copy}</Cell>
                  <Cell>{item.sum_paper}</Cell>
                  <Cell>{item.time}</Cell>
                  <Cell>{item.time_re}</Cell>
                  <Cell>{item.kind_paper}</Cell>
                  <Cell>{item.evaluate}</Cell>
                  <Cell>{item.edit}</Cell>
                  <Cell>{item.again}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </>
  ); 
};
export default printer;