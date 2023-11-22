import React from 'react';
import { BiTimeFive } from 'react-icons/bi';    //imported icons

const Data = [
  {
    id:1,
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg',
    title: 'web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quidem',
    company: 'Novac Linus Co.'
  },
  {
    id:2,
    image: 'https://images.pexels.com/photos/586570/pexels-photo-586570.jpeg',
    title: 'UI Designer',
    time: '14Hrs',
    location: 'Manchester',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quidem',
    company: 'Liquid Accessments'
  },
  {
    id:3,
    image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Software Engineer',
    time: '1Hr',
    location: 'Mancity',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quidem',
    company: 'Wentech Associates'
  },
  {
    id:4,
    image: 'https://images.pexels.com/photos/2305098/pexels-photo-2305098.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Technical Consultant',
    time: '1Hr',
    location: 'Mexico',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quidem',
    company: 'Zonghou Consulting'
  },
  {
    id:5,
    image: 'https://images.pexels.com/photos/6209566/pexels-photo-6209566.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Software Developer',
    time: '2Hrs',
    location: 'Abu-Dhabi',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quidem',
    company: 'Al-Nazir Pvt Ltd'
  },
  {
    id:6,
    image: 'https://images.pexels.com/photos/2881370/pexels-photo-2881370.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Technical Staff',
    time: '12Hrs',
    location: 'London',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quidem',
    company: 'Britannia'
  },
  {
    id:7,
    image: 'https://images.pexels.com/photos/6209566/pexels-photo-6209566.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'senior Software Architect',
    time: '2Hrs',
    location: 'India',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quidem',
    company: 'Infosys'
  },
  {
    id:8,
    image: 'https://images.pexels.com/photos/2566121/pexels-photo-2566121.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Research Assistant',
    time: '3Hrs',
    location: 'Germany',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quidem',
    company: 'Volvo Group'
  },
];


const Jobs = () => {
  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
      {
        Data.map(({id,image,title,time,location,desc,company}) =>{
          return(
            <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded
         [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white
             '>{title}</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive />{time}
            </span> 
          </span>
          <h6 className='text-[#ccc]'>{location}</h6>

          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
           group-hover:text-white'>
            {desc}
          </p>

          <div className='company flex items-center gap-2'>
            <img src={image}
             alt='Company' className='w-[10%]' />
            <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
          </div>

          <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px]
           font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>
         </div>
          );
        })
      }
      </div> 
    </div>
  )
}

export default Jobs