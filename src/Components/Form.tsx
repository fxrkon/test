import React from "react";
interface FormProps {
    items: { amount: number; kg: number }[];
    amount: string;
    kg: string;
    formSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    amountInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    kgInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    amountError: string;
    kgError: string;
    formValid: boolean;
}

const Form: React.FC<FormProps> = ({
    amount,
    kg,
    formSubmit,
    amountInput,
    kgInput,
    amountError,
    kgError,
    formValid,
}) => {
    return (
        <div>
            <form action="" onSubmit={formSubmit} className="p-6">
                <div>
                    <h1 className="text-center text-xl">บันทึกการขาย</h1>
                </div>
                <div className="mt-10">
                    <label htmlFor="" className="block py-3">
                        จำนวน
                    </label>
                    <input
                        type="text"
                        onChange={amountInput}
                        value={amount}
                        className="bg-[#F1F9FF] py-2 px-2 w-full"
                    />
                    <p>
                        <span
                            className={`text-[12px] ${
                                formValid ? "text-red-500 opacity-100" : "opacity-0"
                            }`}
                        >
                            {amountError}
                        </span>
                        <span className="opacity-0">empty</span>
                    </p>
                </div>
                <div className="mt-8">
                    <label htmlFor="" className="block py-3">
                        จำนวน kg.
                    </label>
                    <input
                        type="text"
                        onChange={kgInput}
                        value={kg}
                        className="bg-[#F1F9FF] py-2 px-2 w-full"
                    />
                    <p>
                        <span
                            className={`text-[12px] ${
                                formValid ? "text-red-500 opacity-100" : "opacity-0"
                            }`}
                        >
                            {kgError}
                        </span>
                        <span className="opacity-0">empty</span>
                    </p>
                </div>
                <div className="mt-10 text-center">
                    <button className="px-12 py-2 bg-red-500 text-white rounded active:scale-[1.02] transition-all hover:opacity-90">
                        บันทึก
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
