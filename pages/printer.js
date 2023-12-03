import Header from './components/Header'
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
const theme = useTheme([
  getTheme(),
  {
    HeaderRow: `
      background-color: #eaf5fd;
    `,
    Row: `
      &:nth-of-type(odd) {
        background-color: #d2e9fb;
      }

      &:nth-of-type(even) {
        background-color: #eaf5fd;
      }
    `,
  },
]);
const nodes = [
  {
    id: 1,
    internal_machine: "PrinterA4-01",
    basis: "1",
    building:  "A4",
    floor:  "5",
    brand: "Canon",
    color: "X",
    paper: "200 Trang",
    paper_max: "500 Trang",
    kind_paper: "A4",
    status: "Hoạt động",
    edit: "Chỉnh Sửa",
  },
  {
    id: 2,
    internal_machine: "PrinterH6-01",
    basis: "2",
    building:  "C6",
    floor:  "6",
    brand: "Canon",
    color: "",
    paper: "400 Trang",
    paper_max: "500 Trang",
    kind_paper: "A4",
    status: "Không Hoạt động",
    edit: "Chỉnh Sửa",
  },
  {
    id: 3,
    internal_machine: "PrinterC3-01",
    basis: "1",
    building:  "BK",
    floor:  "3",
    brand: "HP",
    color: "X",
    paper: "0 Trang",
    paper_max: "500 Trang",
    kind_paper: "A5",
    status: "Hết giấy",
    edit: "Chỉnh Sửa",
  },
];

const COLUMNS = [
  { label: 'Tên máy in', renderCell: (item) => item.internal_machine, resize: true  },
  {
    label: 'Cơ sở',renderCell: (item) => item.basis, resize: true 
  },
  { label: 'Toà', renderCell: (item) => item.building, resize: true  },
  {
    label: 'Tầng',
    renderCell: (item) => item.floor, resize: true 
  },
  { label: 'Nhãn Hiệu', renderCell: (item) => item.brand, resize: true  },
  { label: 'Màu', renderCell: (item) => item.color, resize: true  },
  { label: 'Số lượng giấy khả dụng', renderCell: (item) => item.paper, resize: true },
  { label: 'Số lượng giấy tối đa', renderCell: (item) => item.paper_max, resize: true  },
  { label: 'Loại giấy', renderCell: (item) => item.kind_paper, resize: true  },
  { label: 'Tình trạng máy in', renderCell: (item) => item.status, resize: true  },
  { label: '', renderCell: (item) => item.edit },
];

const printer = () => {
  const data = { nodes };

  return(
    <>
      <Header></Header>
      <CompactTable columns={COLUMNS} data={data} theme={theme}/>
    </>
  ); 
};
export default printer;