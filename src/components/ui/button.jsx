export default function Button({ children }) {
    return (
        <button className="rounded-xl bg-primary px-10 py-4 text-secondary font-bold text-xl uppercase hover:scale-[1.03] hover:rounded-lg duration-200">
            {children}
        </button>
    );
}