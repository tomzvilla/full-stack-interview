export default function TodoSkeleton() {
    return (
        <>
            {Array(3).fill(null).map((_, index) => (
                <div key={index} className={`rounded-xl h-[120px] shadow-xl bg-gray-100`}>
                    <div className='p-4 animate-pulse my-2'>
                        <div className={`h-2 bg-gray-500 rounded w-[150px]`}>
                            {/* TITLE */}
                        </div>
                        <div className={`mt-5 h-2 bg-gray-500 rounded`}>
                            {/* DESCRIPTION */}
                        </div>
                        <div className="flex items-center">
                            <div className="h-2 mt-5 bg-gray-500 rounded w-[90px]"></div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}