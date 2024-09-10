import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../Component/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';


const socialList = 
[
    { link: "#", 
    iconName: "icofont-facebook", 
    className: "facebook", }, 
    
    { link: "#", 
    iconName: "icofont-twitter", 
    className: "twitter", }, 
    
    { link: "#", 
    iconName: "icofont-linkedin", 
    className: "linkedin", }, 
    
    { link: "#", 
    iconName: "icofont-instagram", 
    className: "instagram", }, 
    
    { link: "#", 
    iconName: "icofont-pinterest", 
    className: "pinterest", },
];
const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams()

    const result = blog.filter((b) => b.id === Number(id));
    console.log(result[2]);
n

    return (
        <div>
            <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />

            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row jutify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-col-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className='post-thumb'>
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className='lab-ul'>
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque iste, neque modi corporis pariatur alias omnis nesciunt vitae facere numquam tenetur repellat consequatur ab deserunt rem beatae dolorum adipisci nam reiciendis quidem placeat harum at natus. Voluptate cumque molestiae ut?</p>
                                                                    <blockquote>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis hic necessitatibus veritatis vero quos a magnam nisi, accusantium provident odit velit tenetur non ipsum asperiores officia, mollitia nobis omnis?</p>
                                                                        <title>
                                                                            <a href="#">...Malissa Munter</a>
                                                                        </title>
                                                                    </blockquote>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in quisquam ipsum aliquid quis. Quod, consequatur. Quae accusamus, possimus aut cumque dolore hic harum deleniti, asperiores necessitatibus vel debitis tenetur, quos distinctio doloremque dolor ipsam nihil natus qui modi dignissimos!</p>
                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam illo cumque recusandae voluptates magni at blanditiis iusto. Voluptas labore debitis odio est doloremque, nobis autem consequatur sint odit provident ipsa corporis id doloribus eos temporibus! Voluptatem nisi, eos culpa provident explicabo doloribus vero sequi in quam quibusdam quas odit consequuntur.</p>

                                                                    <div className="video-thumb">
                                                                        <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                        <a href="https://youtube.com/shorts/y3onPBgr1qs?si=HQkFWMmO_cmSCfgS"
                                                                            className='video-button popup'
                                                                            target='_blank'
                                                                        > <i className='icofont-ui-play'></i></a>

                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa dolores aliquam corrupti hic quidem beatae quam nisi harum molestiae! Est, ut iusto? Inventore at quos ratione fuga voluptates ducimus eum debitis voluptate. Esse itaque voluptatibus sapiente corrupti sunt cupiditate fugiat.</p>

                                                                    <div className="tags-section">
                                                                        <ul className='tags lab-ul'>
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className='lab-ul social-icons'>
                                                                            {
                                                                                socialList.map((val, i)=>(
                                                                                    <li key={i}>
                                                                                        <a href="#" className={val.className}> 
                                                                                            <i className={val.iconName}></i></a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>

                                            <div className='navigations-part'>
                                                <div className="left">
                                                    <a href="#" className='prev'>
                                                        <i className='icofont-double-left'></i> Previous Blog
                                                    </a>
                                                    <a href="#" className='title'>
                                                        Evisculate Parallel Processes via Technical Sound Models Authoritative
                                                    </a>
                                                </div>
                                                <div className="right">
                                                    <a href="#" className='prev'>
                                                    <i className='icofont-double-right'></i> Previous Blog
                                                        
                                                    </a>
                                                    <a href="#" className='title'>
                                                    Evisculate Parallel Processes via Technical Sound Models Authoritative

                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>


                        <div className="col-lg-4 col-12">
                            <aside>
                              <Tags/>
                              <PopularPost/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
