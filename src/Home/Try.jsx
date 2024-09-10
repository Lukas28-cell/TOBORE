import React from 'react'
import { FaUser } from 'react-icons/fa'

const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc = "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
{
iconName: 'icofont-users-alt-4',
count: '12600',
text: 'Marchant Enrolled',
},
{
iconName: 'icofont-graduate-alt',
count: '30',
text: 'Certified Courses',
},
{
iconName: 'icofont-notification',
count: '100',
text: 'Rewards and GitCards',
},
];

const Try = () => {
  return (
    <div >
       
      <div className=' bg-red-500 h-[20em]'>
        {/* <div className=' bg-blue-400 rounded-full w-10 p-8 m-9 h-12'>
            <FaUser className=' justify-center items-center h-60'/>
        </div> */}
        {
            countList.map((item, id) =>{
                <div key={id}>
              <i className={item.iconName}></i>

                </div>

            })
        }
        <p>{subTitle}</p>
      </div>
      
    </div>
  )
}

export default Try
