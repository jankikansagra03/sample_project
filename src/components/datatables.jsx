<div className="flex flex-col">
    <div data-hs-datatable='{
    "pageLength": 10,
    "pagingOptions": {
      "pageBtnClasses": "min-w-10 flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
    },
    "selecting": true,
    "rowSelectingOptions": {
      "selectAllSelector": "#hs-table-search-checkbox-all"
    },
    "language": {
      "zeroRecords": "<div className=\"py-10 px-5 flex flex-col justify-center items-center text-center\"><svg className=\"shrink-0 size-6 text-gray-500" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/></svg><div className=\"max-w-sm mx-auto\"><p className=\"mt-2 text-sm text-gray-600">No search results</p></div></div>"
    }
  }'>
        <div className="py-3">
            <div className="relative max-w-xs w-full">
                <label htmlFor="hs-table-input-search" className="sr-only">Search</label>
                <input type="text" name="hs-table-search" id="hs-table-input-search" className="py-1.5 sm:py-2 px-3 ps-9 block w-full border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Search for items" data-hs-datatable-search="" />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                    <svg className="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div className="min-h-130 overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                    <table className="min-w-full">
                        <thead className="border-y border-gray-200">
                            <tr>
                                <th scope="col" className="py-1 px-3 pe-0 --exclude-from-ordering">
                                    <div className="flex items-center h-5">
                                        <input id="hs-table-search-checkbox-all" type="checkbox" className="border-gray-300 rounded-sm text-blue-600 checked:border-blue-500 focus:ring-blue-500" />
                                        <label htmlFor="hs-table-search-checkbox-all" className="sr-only">Checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="py-1 group text-start font-normal focus:outline-hidden">
                                    <div className="py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200">
                                        Name
                                        <svg className="size-3.5 ms-1 -me-0.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path className="hs-datatable-ordering-desc:text-blue-600" d="m7 15 5 5 5-5"></path>
                                            <path className="hs-datatable-ordering-asc:text-blue-600" d="m7 9 5-5 5 5"></path>
                                        </svg>
                                    </div>
                                </th>

                                <th scope="col" className="py-1 group text-start font-normal focus:outline-hidden">
                                    <div className="py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200">
                                        Age
                                        <svg className="size-3.5 ms-1 -me-0.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path className="hs-datatable-ordering-desc:text-blue-600" d="m7 15 5 5 5-5"></path>
                                            <path className="hs-datatable-ordering-asc:text-blue-600" d="m7 9 5-5 5 5"></path>
                                        </svg>
                                    </div>
                                </th>

                                <th scope="col" className="py-1 group text-start font-normal focus:outline-hidden">
                                    <div className="py-1 px-2.5 inline-flex items-center border border-transparent text-sm text-gray-500 rounded-md hover:border-gray-200">
                                        Address
                                        <svg className="size-3.5 ms-1 -me-0.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path className="hs-datatable-ordering-desc:text-blue-600" d="m7 15 5 5 5-5"></path>
                                            <path className="hs-datatable-ordering-asc:text-blue-600" d="m7 9 5-5 5 5"></path>
                                        </svg>
                                    </div>
                                </th>

                                <th scope="col" className="py-2 px-3 text-end font-normal text-sm text-gray-500 --exclude-from-ordering">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="py-3 ps-3">
                                    <div className="flex items-center h-5">
                                        <input id="hs-table-search-checkbox-1" type="checkbox" className="border-gray-300 rounded-sm text-blue-600 checked:border-blue-500 focus:ring-blue-500" data-hs-datatable-row-selecting-individual="" />
                                        <label htmlFor="hs-table-search-checkbox-1" className="sr-only">Checkbox</label>
                                    </div>
                                </td>
                                <td className="p-3 whitespace-nowrap text-sm font-medium text-gray-800">Christina Bersh</td>
                                <td className="p-3 whitespace-nowrap text-sm text-gray-800">45</td>
                                <td className="p-3 whitespace-nowrap text-sm text-gray-800">4222 River Rd, Columbus</td>
                                <td className="p-3 whitespace-nowrap text-end text-sm font-medium">
                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none">Delete</button>
                                </td>
                            </tr>

                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="py-1 px-4 hidden" data-hs-datatable-paging="">
            <nav className="flex items-center space-x-1">
                <button type="button" className="p-2.5 min-w-10 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-datatable-paging-prev="">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                </button>
                <div className="flex items-center space-x-1 [&>.active]:bg-gray-100" data-hs-datatable-paging-pages=""></div>
                <button type="button" className="p-2.5 min-w-10 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-datatable-paging-next="">
                    <span className="sr-only">Next</span>
                    <span aria-hidden="true">»</span>
                </button>
            </nav>
        </div>
    </div>
</div>