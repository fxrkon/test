import React, { useState, useEffect } from "react";
import Form from "./Form.tsx";
import List from "./List.tsx";
import Total from "./Total.tsx";

interface Items {
    amount: number;
    kg: number;
    date: string;
}

const Page1: React.FC = () => {
    const [items, setItems] = useState<Items[]>([]);
    const [amount, setAmount] = useState<string>("");
    const [kg, setKg] = useState<string>("");
    const [amountError, setAmountError] = useState<string>("");
    const [kgError, setKgError] = useState<string>("");
    const [formValid, setFormValid] = useState<boolean>(false);
    const [listEmpty, setListEmpty] = useState<boolean>(false);

    const amountInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value);
    };

    const kgInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKg(event.target.value);
    };

    const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setAmountError("");
        setKgError("");
        let valid = true;
        if (amount.trim() === "") {
            setAmountError("จำนวนว่าง");
            valid = false;
            setFormValid(true);
        } else if (isNaN(Number(amount))) {
            setAmountError("ต้องเป็นตัวเลข");
            valid = false;
            setFormValid(true);
        }

        if (kg.trim() === "") {
            setKgError("Weight is required");
            valid = false;
            setFormValid(true);
        } else if (isNaN(Number(kg))) {
            setKgError("ต้องเป็นตัวเลข");
            valid = false;
            setFormValid(true);
        }

        if (!valid) return;
        addItem(Number(amount), Number(kg));
    };

    const addItem = (amount: number, kg: number) => {
        const date = new Date().toISOString().split("T")[0]; // ใช้รูปแบบวันที่แบบ ISO
        setItems([{ amount, kg, date }, ...items]);
        setAmount("");
        setKg("");
    };

    useEffect(() => {
        setAmountError("");
    }, [amount]);

    useEffect(() => {
        setKgError("");
    }, [kg]);

    useEffect(() => {
        setListEmpty(items.length === 0);
    }, [items]);

    return (
        <div className="mt-6">
            <div>
                <div className=" w-[95%] m-auto">
                    <Total items={items} />
                </div>
            </div>
            <div className="relative grid grid-cols-[1fr] gap-16 w-[95%] h-auto min-h-[40vh] lg:h-[500px] mx-auto mt-6 lg:px-19 lg:grid-cols-[3fr_3fr] lg:gap-6">
                <div className="bg-white h-[450px] xl:h-auto shadow">
                    <Form
                        items={items}
                        amount={amount}
                        kg={kg}
                        amountInput={amountInput}
                        kgInput={kgInput}
                        formSubmit={formSubmit}
                        amountError={amountError}
                        kgError={kgError}
                        formValid={formValid}
                    />
                </div>
                <div className="bg-white h-[450px] overflow-y-auto xl:h-auto shadow">
                    <List items={items} listEmpty={listEmpty} />
                </div>
            </div>
        </div>
    );
};

export default Page1;
