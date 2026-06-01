import OrderItem from "./OrderItem";
import { FaKeyboard } from "react-icons/fa6";
import { TbHeadphonesFilled } from "react-icons/tb";
import { FaMouse } from "react-icons/fa";
import { MdOutlineCable } from "react-icons/md";
import { RiHardDrive3Fill } from "react-icons/ri";

function App() {
  const orders = [
    {id: 1, icon: <FaKeyboard />, name: "Mechanical Keyboard", qty: 1, price: 28000},
    {id: 2, icon: <TbHeadphonesFilled />, name: "Headphones", qty: 1, price: 45000},
    {id: 3, icon: <FaMouse />, name: "Wireless Mouse", qty: 1, price: 21500},
    {id: 4, icon: <MdOutlineCable />, name: "Power Adapter", qty: 2, price: 26600},
    {id: 5, icon: <RiHardDrive3Fill />, name: "External Hard-drive", qty: 2, price: 38800}
  ];
    
  return (
    <div className="flex flex-col py-3 bg-gray-800 text-white rounded-xl w-100">
      <h3 className="font-bold border-y h-15 flex justify-center text-l items-center">Your Order:</h3>
      {orders.map((item, id) => (
       <OrderItem key={item.id} icon={item.icon} name={item.name} qty={item.qty} price={item.price.toLocaleString("en-NG", { style: "currency", currency: "NGN" })
} />
       //<OrderItem key={id} {...item} />
      ))}
      <div className="flex justify-between px-6 border-y font-bold">
        <span>Total:</span>
        <span>{orders.reduce((sum, n) => sum + n.price, 0).toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</span>
      </div>
    </div>
  )
  
}
export default App