import CustomerReviews from "@/components/customers/customers";

export default function Reviews() {
    return (
        <div className="flex flex-col">
            <h1 className="flex justify-center text-4xl items-center font-inter font-bold pt-20">What our customers say</h1>
            <CustomerReviews/>
        </div>
    );
}