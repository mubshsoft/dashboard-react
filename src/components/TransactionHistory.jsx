import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: 'Active',
    key: '0',
  },
  {
    label: 'In-Active',
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'All',
    key: '3',
  },
];
const options = { year: 'numeric', month: 'short', day: '2-digit' };
  const currentDate = new Date().toLocaleDateString('en-US', options);
const TransactionHistory = () => {
  return (
    <>
      <div className="bg-white rounded-md  p-4 border border-gary-200">
            <div className="flex flex-wrap items-center justify-between">
              <h2 className='font-semibold sm:text-sm  md:text-xl lg:text-2x py-3 font-custom'>Transaction History</h2>
              <button
                id="dropdownActionButton"
                data-dropdown-toggle="dropdownAction"
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
              >
                <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
                <div className='flex items-center gap-2' onClick={(e) => e.preventDefault()}>
                
                <AiOutlineCalendar  className='text-lg' />
                <Space>Action
                <RiArrowDownSLine />
                </Space>
                </div>

                </Dropdown>
              </button>
           
            </div>
            <div className='flex gap-10 cursor-pointer'>
              <div className='bg-gray-300 px-5 py-2  rounded-lg flex items-center gap-3'><p>Recepient</p><RiArrowDownSLine /></div>
              <div className='bg-gray-300 px-5 py-2  rounded-lg flex items-center gap-3'><p>Amount</p><RiArrowDownSLine /></div>
              <div className='bg-gray-300 px-5 py-2  rounded-lg flex items-center gap-3'><p>Status</p><RiArrowDownSLine /></div>
            </div>
            <div className="relative overflow-x-auto sm:rounded-lg">
              <div className="flex items-center justify-between py-1 bg-white dark:bg-gray-800">

              </div>
              <table className="w-full text-sm text-left text-gray-500 dark-text-gray-400">
                <thead className="text-xs text-gray-700 dark-bg-gray-700 dark-text-gray-400">
                  <tr className='border-b'>
                    <th scope="col" className="p-4">Customer</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Invoice</th>
                    <th scope="col" className="px-6 py-3">People</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark-bg-gray-800 dark-border-gray-700 hover-bg-gray-50 dark-hover-bg-gray-600">
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark-text-white">
                    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                      <div className="pl-3 font-custom">
                        <div className="font-semibold text-sm">Flyod Johntosan</div>
                        <div className="font-normal text-gray-500 text-xs">johntosan@gmail.com</div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                    <div className="flex items-center bg-white text-black border border-gray-300 rounded-full justify-center py-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Success
                      </div>
                    </td>
                    <td className="px-6 py-4"> 
                      <div className="flex items-center font-semibold text-black font-custom">
                        <div className="h-2.5 w-2.5"></div> 
                        {currentDate}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {/* <!-- Modal toggle --> */}
                      <p className='font-custom text-black text-sm font-semibold'>$100,00</p>
                    </td>
                    <td>
                    <div className="flex">
                        <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                        <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                        <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                      </div>
                    </td>
                  </tr>


                  <tr className="bg-white dark-bg-gray-800 hover-bg-gray-50 dark-hover-bg-gray-600">
                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark-text-white">
                    <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                      <div className="pl-3">
                      <div className="font-semibold text-sm">Leslie Livingston</div>
                        <div className="font-normal text-gray-500 text-xs">leslie@flowbite.com</div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                    <div className="flex items-center bg-white text-black border border-gray-300 rounded-full justify-center py-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2"></div> Pending
                      </div>
                    </td>
                    <td className="px-6 py-4"> 
                      <div className="flex items-center font-semibold text-black font-custom">
                        <div className="h-2.5 w-2.5"></div> 
                        {currentDate}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className='font-custom text-black text-sm font-semibold'>$100,00</p>
                    </td>
                    <td>
                    <div className="flex">
                        <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow" />
                        <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                        <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <!-- Edit user modal --> */}
              <div id="editUserModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md-inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                  {/* <!-- Modal content --> */}
                  <form action="#" className="relative bg-white rounded-lg shadow dark-bg-gray-700">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark-border-gray-600">
                      <h3 className="text-xl font-semibold text-gray-900 dark-text-white">
                        Edit user
                      </h3>
                      <button type="button" className="text-gray-400 bg-transparent hover-bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white" data-modal-hide="editUserModal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-6 space-y-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm-col-span-3">
                          <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark-text-white">First Name</label>
                          <input type="text" name="first-name" id="first-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-ring-blue-600 focus-border-blue-600 block w-full p-2.5 dark-bg-gray-600 dark-border-gray-500 dark-placeholder-gray-400 dark-text-white dark-focus-ring-blue-500 dark-focus-border-blue-500" placeholder="Bonnie" required="" />
                        </div>
                        <div className="col-span-6 sm-col-span-3">
                          <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark-text-white">Last Name</label>
                          <input type="text" name="last-name" id="last-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-ring-blue-600 focus-border-blue-600 block w-full p-2.5 dark-bg-gray-600 dark-border-gray-500 dark-placeholder-gray-400 dark-text-white dark-focus-ring-blue-500 dark-focus-border-blue-500" placeholder="Green" required="" />
                        </div>
                        <div className="col-span-6 sm-col-span-3">
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark-text-white">Email</label>
                          <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-ring-blue-600 focus-border-blue-600 block w-full p-2.5 dark-bg-gray-600 dark-border-gray-500 dark-placeholder-gray-400 dark-text-white dark-focus-ring-blue-500 dark-focus-border-blue-500" placeholder="example@company.com" required="" />
                        </div>
                        <div className="col-span-6 sm-col-span-3">
                          <label htmlFor="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark-text-white">Phone Number</label>
                          <input type="number" name="phone-number" id="phone-number" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-ring-blue-600 focus-border-blue-600 block w-full p-2.5 dark-bg-gray-600 dark-border-gray-500 dark-placeholder-gray-400 dark-text-white dark-focus-ring-blue-500 dark-focus-border-blue-500" placeholder="e.g. +(12)3456 789" required="" />
                        </div>
                        <div className="col-span-6 sm-col-span-3">
                          <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark-text-white">Department</label>
                          <input type="text" name="department" id="department" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-ring-blue-600 focus-border-blue-600 block w-full p-2.5 dark-bg-gray-600 dark-border-gray-500 dark-placeholder-gray-400 dark-text-white dark-focus-ring-blue-500 dark-focus-border-blue-500" placeholder="Development" required="" />
                        </div>
                        <div className="col-span-6 sm-col-span-3">
                          <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark-text-white">Company</label>
                          <input type="number" name="company" id="company" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-ring-blue-600 focus-border-blue-600 block w-full p-2.5 dark-bg-gray-600 dark-border-gray-500 dark-placeholder-gray-400 dark-text-white dark-focus-ring-blue-500 dark-focus-border-blue-500" placeholder="123456" required="" />
                        </div>
                        <div className="col-span-6 sm-col-span-3">
                          <label htmlFor="current-password" className="block mb-2 text-sm font-medium text-gray-900 dark-text-white">Current Password</label>
                          <input type="password" name="current-password" id="current-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-ring-blue-600 focus-border-blue-600 block w-full p-2.5 dark-bg-gray-600 dark-border-gray-500 dark-placeholder-gray-400 dark-text-white dark-focus-ring-blue-500 dark-focus-border-blue-500" placeholder="••••••••" required="" />
                        </div>
                        <div className="col-span-6 sm-col-span-3">
                          <label htmlFor="new-password" className="block mb-2 text-sm font-medium text-gray-900 dark-text-white">New Password</label>
                          <input type="password" name="new-password" id="new-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-ring-blue-600 focus-border-blue-600 block w-full p-2.5 dark-bg-gray-600 dark-border-gray-500 dark-placeholder-gray-400 dark-text-white dark-focus-ring-blue-500 dark-focus-border-blue-500" placeholder="••••••••" required="" />
                        </div>
                      </div>
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="flex justify-end p-4 border-t border-gray-300 rounded-b dark-border-gray-600">
                      <button type="button" className="text-gray-600 dark-text-gray-400 bg-gray-100 hover-bg-gray-200 dark-hover-bg-gray-600 hover-text-gray-900 dark-hover-text-white border border-gray-300 dark-border-gray-600 rounded-lg text-sm px-6 py-2.5 w-1/5 mr-2" data-modal-hide="editUserModal">Cancel</button>
                      <button type="submit" className="bg-blue-600 hover-bg-blue-700 text-white dark-bg-blue-500 dark-hover-bg-blue-600 font-medium rounded-lg text-sm px-6 py-2.5 w-1/5" data-modal-hide="editUserModal">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
    </>
  )
}

export default TransactionHistory
