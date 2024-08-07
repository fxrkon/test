import React from "react";

interface TotalProps {
    items: { amount: number; kg: number; date: string }[];
}

const Total: React.FC<TotalProps> = ({ items }) => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const totalForThisMonth = items
        .filter((item) => {
            const itemDate = new Date(item.date);
            return itemDate.getMonth() === currentMonth && itemDate.getFullYear() === currentYear;
        })
        .reduce((sum, item) => sum + item.amount, 0);

    const totalForAllTime = items.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
            <div className="bg-white flex flex-col justify-evenly px-2 h-[120px] rounded-md shadow">
                <h1>เดือนนี้</h1>
                <p className="font-bold text-xl flex items-center gap-2">
                    <span className="font-normal text-sm">฿</span> {totalForThisMonth}
                </p>
            </div>
            <div className="bg-white flex flex-col justify-evenly px-2 h-[120px] rounded-md shadow">
                <h1>ทั้งหมด</h1>
                <p className="font-bold text-xl flex items-center gap-2">
                    <span className="font-normal text-sm">฿</span> {totalForAllTime}
                </p>
            </div>
        </div>
    );
};

export default Total;
