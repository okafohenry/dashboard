import { MdDashboard } from 'react-icons/md';
import { AiFillPieChart } from 'react-icons/ai';
import { BsArrowLeftRight, BsFillCreditCardFill } from 'react-icons/bs';

export const sidebar_links = [ 
    {
        icon: <MdDashboard />,
        name: "Dashboard",
        path: "/dashboard"
    }, 
    {
        icon: <BsArrowLeftRight />,
        name: "Transaction",
        path: "/transaction"
    },
    {
        icon: <AiFillPieChart />,
        name: "Analysis",
        path: "/analysis"
    },  
    {
        icon: <BsFillCreditCardFill />,
        name: "Cards",
        path: "/cards"
    },
]