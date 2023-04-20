import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { BiChip } from 'react-icons/bi';

export const ShowChipset = () => {
  const [cpus, setCpus] = useState([]);
  const [cpusTotal, setCpusTotal] = useState('');

  const url = 'https://localhost:44345/api/chipset/get-all-chipset';

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/admin/add-chipset`;
    navigate(path);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setCpus(data.data);
      setCpusTotal(data.total);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='max-h-full block box-border'>
      <div className='m-auto w-[90%]'>
        <div className='flex'>
          <span>
            <BiChip size={40} className='mr-2' />
          </span>
          <h1 className='text-4xl'>SHOW CHIPSETS</h1>
        </div>
        <div className='mt-4'>
          <button onClick={routeChange} className='rounded-lg border-2 border-black p-1 hover:bg-blue-300'>
            CREATE NEW
          </button>
        </div>

        <div className='block box-border mt-4'>
          <table className='table-auto'>
            <thead className='table-header-group align-middle'>
              <tr>
                <th className=''>
                  <div>
                    <input
                      type='text'
                      placeholder='ID'
                      disabled
                      className='bg-white text-center'
                      size={4}
                    />
                  </div>
                </th>
                <th className='bg-green-200'>
                  <div className=''>
                    <input
                      type='text'
                      placeholder='Name'
                      disabled
                      className='text-center'
                      size={4}
                    />
                  </div>
                </th>
                <th className=''>
                  <div>
                    <input
                      type='text'
                      placeholder='Image'
                      disabled
                      className='bg-white text-center'
                      size={6}
                    />
                  </div>
                </th>
                <th className=' bg-green-200'>
                  <div>
                    <input
                      type='text'
                      placeholder='Description'
                      disabled
                      className='text-center'
                      size={12}
                    />
                  </div>
                </th>
                <th className=''>
                  <div>
                    <input
                      type='text'
                      placeholder='Manufacture'
                      disabled
                      className='bg-white text-center'
                      size={12}
                    />
                  </div>
                </th>
                <th className=' bg-green-200'>
                  <div>
                    <input
                      type='text'
                      placeholder='Type'
                      disabled
                      className='text-center'
                      size={4}
                    />
                  </div>
                </th>
                <th className=''>
                  <div>
                    <input
                      type='text'
                      placeholder='CPU Socket'
                      disabled
                      className='bg-white text-center'
                      size={10}
                    />
                  </div>
                </th>
                <th className=' bg-green-200'>
                  <div>
                    <input
                      type='text'
                      placeholder='CPU Temp'
                      disabled
                      className='text-center'
                      size={8}
                    />
                  </div>
                </th>
                <th className=''>
                  <div>
                    <input
                      type='text'
                      placeholder='TDP'
                      disabled
                      className='bg-white text-center'
                      size={4}
                    />
                  </div>
                </th>
                <th className=' bg-green-200'>
                  <div>
                    <input
                      type='text'
                      placeholder='CPU Speed Base'
                      disabled
                      className='text-center'
                      size={12}
                    />
                  </div>
                </th>
                <th className=''>
                  <div>
                    <input
                      type='text'
                      placeholder='CPU Speed Boost'
                      disabled
                      className='bg-white text-center'
                      size={12}
                    />
                  </div>
                </th>
                <th className=' bg-green-200'>
                  <div>
                    <input
                      type='text'
                      placeholder='CPU Thread'
                      disabled
                      className='text-center'
                      size={10}
                    />
                  </div>
                </th>
                <th className=''>
                  <div>
                    <input
                      type='text'
                      placeholder='Semiconductor Size'
                      disabled
                      className='bg-white text-center'
                      size={20}
                    />
                  </div>
                </th>
                <th className=' bg-green-200'>
                  <div>
                    <input
                      type='text'
                      placeholder='PCI'
                      disabled
                      className='text-center'
                      size={4}
                    />
                  </div>
                </th>
                <th className=''>
                  <div>
                    <input
                      type='text'
                      placeholder='Memory channels'
                      disabled
                      className='bg-white text-center'
                      size={12}
                    />
                  </div>
                </th>
                <th className=' bg-green-200'>
                  <div>
                    <input
                      type='text'
                      placeholder='Performance Features'
                      disabled
                      className='text-center'
                      size={20}
                    />
                  </div>
                </th>
                <th className='  '>
                  <div>
                    <input
                      type='text'
                      placeholder='RAM Version'
                      disabled
                      className='bg-white text-center'
                      size={10}
                    />
                  </div>
                </th>
                <th className=' bg-green-200'>
                  <div>
                    <input
                      type='text'
                      placeholder='RAM Speed'
                      disabled
                      className='text-center'
                      size={10}
                    />
                  </div>
                </th>
                <th className=''>
                  <div>
                    <input
                      type='text'
                      placeholder='Laptops'
                      disabled
                      className='bg-white text-center'
                      size={6}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className='align-middle text-center'>
              {cpus[0] ? (
                cpus.map((cpu) => {
                  console.log(cpu);
                  return (
                    <tr>
                      <td>{cpu.id}</td>
                      <td className='bg-green-200'>{cpu.name}</td>
                      <td>{cpu.image}</td>
                      <td className='bg-green-200'>{cpu.description}</td>
                      <td>{cpu.manufacture}</td>
                      <td className='bg-green-200'>{cpu.type}</td>
                      <td>{cpu.cpuSocket}</td>
                      <td className='bg-green-200'>{cpu.Temp}</td>
                      <td>{cpu.tdp}</td>
                      <td className='bg-green-200'>{cpu.cpuSpeedBase}</td>
                      <td>{cpu.cpuSpeedBoost}</td>
                      <td className='bg-green-200'>{cpu.cpuThread}</td>
                      <td>{cpu.semiconductorSize}</td>
                      <td className='bg-green-200'>{cpu.pci}</td>
                      <td>{cpu.memoryChannels}</td>
                      <td className='bg-green-200'>
                        {cpu.performanceFeatures}
                      </td>
                      <td>{cpu.ramVersion}</td>
                      <td className='bg-green-200'>{cpu.ramSpeed}</td>
                      <td>{cpu.laptops}</td>

                      <td>
                        <a
                          href='/CoreAdminData/DeleteEntity/027b46bd-fbcc-4014-9de1-8db3ae9c4d06?dbSetName=Chipsets'
                          className='bg-red-300'
                        >
                          Delete
                        </a>
                      </td>
                      <td>
                        <a
                          href='/CoreAdminData/EditEntity/027b46bd-fbcc-4014-9de1-8db3ae9c4d06?dbSetName=Chipsets'
                          className='bg-yellow-300 hover:bg-yellow-700'
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>Loading...</tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
