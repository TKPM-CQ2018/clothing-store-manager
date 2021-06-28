import React from "react";
import "./profit.css";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export function ProfitChart() {
  const data = [{ time: '20/04', Revenue: 2040000, Profit: 704000 },
  { time: '21/04', Revenue: 2040000, Profit: 704000 },
  { time: '22/04', Revenue: 2540000, Profit: 944000 },
  { time: '23/04', Revenue: 1770000, Profit: 504000 },
  { time: '24/04', Revenue: 2390000, Profit: 804000 },
  { time: '25/04', Revenue: 2500000, Profit: 808000 },
  { time: '26/04', Revenue: 2750000, Profit: 1106000 },
  { time: '27/04', Revenue: 2899000, Profit: 1204000 },
  { time: '28/04', Revenue: 3040000, Profit: 1240000 },
  { time: '29/04', Revenue: 3280000, Profit: 1360000 },
  { time: '30/04', Revenue: 3590000, Profit: 1590000 },
  { time: '01/05', Revenue: 3050000, Profit: 1065000 },
  ];

  return (
    <LineChart width={1200} height={350} data={data} margin={{ top: 5, right: 10, bottom: 5, left: 10 }}>
      <Line type="monotone" dataKey="Revenue" stroke="#1241E7" />
      <Line type="monotone" dataKey="Profit" stroke="#FFEA2D" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="time" dy={10} />
      <YAxis type="number" dx={-5} domain={[0, dataMax => Math.ceil(dataMax / 500000) * 500000]} tickFormatter={(value) => new Intl.NumberFormat('en', { notation: "compact", compactDisplay: "short" }).format(value)} />
      <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
    </LineChart>
  );
}

// function Product({ product }) {
//   return (
//     <div className="table-element">
//       <div className="id">{product.id}</div>
//       <a className="link name" href={`/products/${product.id}`}>
//         <div>{product.name}</div>
//       </a>
//       <div className="total-revenue">{new Intl.NumberFormat('en').format(product.totalRevenue)}</div>
//     </div>
//   );
// }

function Product({ product }) {
  return (
    <div >
      <ul className="table-element">
        <li className="id">{product.id}</li>
        <li className='name'>
        <a className="link" href={`/products/${product.id}`}>{product.name}</a>
        </li>
        <li className="total-revenue">{new Intl.NumberFormat('en').format(product.totalRevenue)}</li>
      </ul>
    </div>
  );
}

function Saler({ saler }) {
  return (
    <div >
      <ul className="table-element">
        <li className="id">{saler.id}</li>
        <li className='name'>
        <a className="link" href={`/staffs/${saler.id}`}>{saler.name}</a>
        </li>
        <li className="total-revenue">{new Intl.NumberFormat('en').format(saler.totalRevenue)}</li>
      </ul>
    </div>
  );
}

function TopTable(props) {
  return (
    <div>
      <div className="title">
        <ul>
          <li className='id'>ID</li>
          <li className='name'>Name</li>
          <li className='total-revenue'>Total Revenue</li>
        </ul>
      </div>

      <div className="table">
        {(props.type === "products") ?
          props.data.map((product) => (
            <Product key={product.id} product={product} />
          )) :
          props.data.map((saler) => (
            <Saler key={saler.id} saler={saler} />
          ))
        }
      </div>
    </div>
  );
}

export function MaterialUIDatePickers(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date(props.date));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        label={props.label}
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}


export function TopProducts() {
  const data = [{ id: '002', name: 'Áo khoác nỉ có nón', totalRevenue: 1200000 },
  { id: '003', name: 'Đầm công sở', totalRevenue: 1200000 },
  { id: '004', name: 'Áo khoác jean nữ', totalRevenue: 1200000 }
  ];
  return (
    <div>
      <div className="table-name">
        <h1>Top Products</h1>
        <a>View Detail</a>
      </div>
      <TopTable data={data} type="products" />

    </div>
  );
}


export function TopSalers() {
  const data = [{ id: '002', name: 'Đoàn Minh Tân', totalRevenue: 2200000 },
  { id: '003', name: 'Hà Minh Cường', totalRevenue: 1800000 },
  { id: '004', name: 'Dương Bội Long', totalRevenue: 1200000 }
  ];
  return (
    <div>
      <div className="table-name">
        <h1>Top Salers</h1>
        <a>View Detail</a>
      </div>
      <TopTable data={data} type="salers" />

    </div>
  );
}
