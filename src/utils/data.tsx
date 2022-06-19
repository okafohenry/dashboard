import { MdAccountBalanceWallet, MdDashboard, MdSavings } from 'react-icons/md';
import { AiFillPieChart } from 'react-icons/ai';
import { BsArrowLeftRight, BsFillCreditCardFill } from 'react-icons/bs';
import { IoPaperPlane } from 'react-icons/io5';
import { GiReceiveMoney } from 'react-icons/gi';

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


export const dashboard_sections = {
    section_one: [
        {
            color: '#068374',
            backgroundColor: 'rgba(6, 131, 116, 0.05)',
            icon:<MdSavings /> ,
            headerText: "Savings",
            amount: "120000"
        },
        {
            color: '#EF6274',
            backgroundColor: 'rgba(219, 22, 47, 0.05)',
            icon: <GiReceiveMoney />,
            headerText: "Income",
            amount: "120000"
        },
        {
            color: '#1168B1',
            backgroundColor: 'rgba(8, 75, 131, 0.05)',
            icon: <IoPaperPlane />,
            headerText: "Expenses",
            amount: "120000"
        },
        {
            color: '#B43D8C',
            backgroundColor: 'rgba(141, 59, 114, 0.08)',
            icon: <MdAccountBalanceWallet />,
            headerText: "Balance",
            amount: "120000"
        }
    ]
}


export const card_balance = {
    balance: 110000
}






