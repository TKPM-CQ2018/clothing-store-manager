import React from "react";
import "./profit.css";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {LineChart, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

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

function ProductDetail({ product }) {
  return (
    <div className='product-detail'>
      <ul className="table-element">
        <li className="id id-detail">{product.id}</li>
        <li className='name name-detail'>
        <a className="link" href={`/products/${product.id}`}>{product.name}</a>
        </li>
        <li className='category name-detail'>{product.category}</li>
        <li className='picture name-detail'>
          <img src={product.thumbnail} alt=""/>
        </li>
        <li className='quantity revenue-detail'>{product.quantity}</li>
        <li className="revenue revenue-detail">{new Intl.NumberFormat('en').format(product.Revenue)}</li>
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

function SalerDetail({ saler }) {
  return (
    <div className='saler-detail'>
      <ul className="table-element">
        <li className="id id-detail">{saler.id}</li>
        <li className='name name-detail'>
        <a className="link" href={`/staffs/${saler.id}`}>{saler.name}</a>
        </li>
        <li className='category name-detail'>{saler.phone}</li>
        <li className='picture name-detail'>
          <img src={saler.avatar} alt={saler.name} width='85' height='110'/>
        </li>
        <li className='quantity revenue-detail'>{saler.quantity}</li>
        <li className="revenue revenue-detail">{new Intl.NumberFormat('en').format(saler.Revenue)}</li>
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
        <a href='/profits/top-products'>View Detail</a>
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
        <a href='/profits/top-salers'>View Detail</a>
      </div>
      <TopTable data={data} type="salers" />

    </div>
  );
}


export function TopProductsChart(props) {
  const data = [{ name:'Áo khoác nỉ có nón', Revenue: 3600000},
  { name:'Đầm công sở', Revenue: 2600000},
  { name:'Áo khoác jean nữ', Revenue: 2400000},
  { name:'Quần tây Pháp', Revenue: 2200000},
  { name:'Đầm lụa đỏ', Revenue: 1900000},
  { name:'Áo vert Pháp', Revenue: 1850000},
  { name:'Áo LV', Revenue: 1600000},
  { name:'A', Revenue: 1400000},
  { name:'B', Revenue: 1100000},
  { name:'C', Revenue: 800000},
  ];

  if (props.filter==='worst'){
    data.reverse();

  }


  return (
    <BarChart width={1200} height={350} data={data} margin={{ top: 5, right: 10, bottom: 5, left: 10 }}>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" dy={10} interval={0} tickFormatter={(value)=>(value.length>13)?value.substr(0,10)+"...":value} />
      <YAxis type="number" dx={-5} domain={[0, dataMax => Math.ceil(dataMax / 500000) * 500000]} tickFormatter={(value) => new Intl.NumberFormat('en', { notation: "compact", compactDisplay: "short" }).format(value)} />
      <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
      <Bar dataKey="Revenue" fill={props.filter==='best'?"#86B63B":"#CC1F1F"} barSize={40} />
    </BarChart>
  );
}

export function TopSalersChart(props) {
  const data = [{ name:'Đoàn Minh Tân', Revenue: 3600000},
  { name:'Hà Minh Cường', Revenue: 2600000},
  { name:'Dương Bội Long', Revenue: 2400000},
  { name:'Huỳnh Hồ Thanh Trà', Revenue: 2200000},
  { name:'Nguyễn Huy Tú', Revenue: 1900000},
  ];

  if (props.filter==='worst'){
    data.reverse();

  }


  return (
    <BarChart width={1200} height={350} data={data} margin={{ top: 5, right: 10, bottom: 5, left: 10 }}>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" dy={10} interval={0} />
      <YAxis type="number" dx={-5} domain={[0, dataMax => Math.ceil(dataMax / 500000) * 500000]} tickFormatter={(value) => new Intl.NumberFormat('en', { notation: "compact", compactDisplay: "short" }).format(value)} />
      <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
      <Bar dataKey="Revenue" fill={props.filter==='best'?"#86B63B":"#CC1F1F"} barSize={40} />
    </BarChart>
  );
}

export function TopProductsDetail(props) {

  const data = [{id:'002', category:'Áo', thumbnail:'/images/thumb1.png', quantity:5, name:'Áo khoác nỉ có nón', Revenue: 3600000},
  {id:'002', category:'Áo', thumbnail:'/images/thumb1.png', quantity:5, name:'Đầm công sở', Revenue: 2600000},
  {id:'002', category:'Áo', thumbnail:'/images/thumb1.png', quantity:5, name:'Áo khoác jean nữ', Revenue: 2400000},
  {id:'002', category:'Áo', thumbnail:'/images/thumb1.png', quantity:5, name:'Quần tây Pháp', Revenue: 2200000},
  {id:'002', category:'Áo', thumbnail:'/images/thumb1.png', quantity:5, name:'Đầm lụa đỏ', Revenue: 1900000},
  {id:'002', category:'Áo', thumbnail:'/images/thumb1.png', quantity:5, name:'Áo vert Pháp', Revenue: 1850000},
  {id:'002', category:'Áo', thumbnail:'/images/thumb1.png', quantity:5, name:'Áo LV', Revenue: 1600000},
  {id:'002', category:'Áo', thumbnail:'/images/thumb1.png', quantity:5, name:'A', Revenue: 1400000},
  {id:'002', category:'Áo', thumbnail:'/images/thumb1.png', quantity:5, name:'B', Revenue: 1100000},
  {id:'002', category:'Áo', thumbnail:'/images/thumb1.png', quantity:5, name:'C', Revenue: 800000},
  ]; 

  if (props.filter==='worst'){
    data.reverse();

  }

  return (
    <div>
      <div className="title">
        <ul>
          <li className='id-detail'>ID</li>
          <li className='name-detail'>Name</li>
          <li className='name-detail'>Category</li>
          <li className='name-detail'>Picture</li>
          <li className='revenue-detail'>Quantity sold</li>
          <li className='revenue-detail'>Revenue</li>
        </ul>
      </div>

      <div className="table">
        {
          data.map((product) => (
            <ProductDetail key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
}

export function TopSalersDetail(props) {

  const data = [{id:'002', phone:'0123456789', avatar:'/images/avt_hmc.jpg', quantity:5, name:'Đoàn Minh Tân', Revenue: 3600000},
  {id:'002', phone:'0123456789', avatar:'/images/avt_hmc.jpg', quantity:5, name:'Hà Minh Cường', Revenue: 2600000},
  {id:'002', phone:'0123456789', avatar:'/images/avt_hmc.jpg', quantity:5, name:'Dương Bội Long', Revenue: 2400000},
  {id:'002', phone:'0123456789', avatar:'/images/avt_hmc.jpg', quantity:5, name:'Huỳnh Hồ Thanh Trà', Revenue: 2200000},
  {id:'002', phone:'0123456789', avatar:'/images/avt_hmc.jpg', quantity:5, name:'Nguyễn Huy Tú', Revenue: 1900000},
  ]; 

  if (props.filter==='worst'){
    data.reverse();

  }

  return (
    <div>
      <div className="title">
        <ul>
          <li className='id-detail'>ID</li>
          <li className='name-detail'>Name</li>
          <li className='name-detail'>Phone</li>
          <li className='name-detail'>Avatar</li>
          <li className='revenue-detail'>Quantity sold</li>
          <li className='revenue-detail'>Revenue</li>
        </ul>
      </div>

      <div className="table">
        {
          data.map((saler) => (
            <SalerDetail key={saler.id} saler={saler} />
          ))
        }
      </div>
    </div>
  );
}