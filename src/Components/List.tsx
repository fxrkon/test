import React from "react";
interface ListProps {
    items: { amount: number; kg: number; date: string }[];
    listEmpty: boolean;
}

const List: React.FC<ListProps> = ({ items, listEmpty }) => {
    return (
        <div className="relative h-full">
            <div className="grid grid-cols-3 bg-red-500 py-3">
                <p className="text-center text-white">จำนวน</p>
                <p className="text-center text-white">กิโล</p>
                <p className="text-center text-white">วันเวลา</p>
            </div>
            <div className="">
                {items.map((item, index) => (
                    <div
                        className={`grid grid-cols-3 ${
                            index % 2 === 0 ? "bg-white" : "bg-gray-100"
                        }`}
                        key={index}
                    >
                        <p className="px-2 py-2 border-b border-solid border-red-100">
                            {item.amount}
                        </p>
                        <p className="px-2 py-2 border-b border-red-100">{item.kg}</p>
                        <p className="px-2 py-2 border-b border-red-100">{item.date}</p>
                    </div>
                ))}
            </div>
            {listEmpty && (
                <div className="flex justify-center items-center h-[85%]">รายการว่าง </div>
            )}
        </div>
    );
};

export default List;
