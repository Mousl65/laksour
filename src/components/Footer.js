import React from 'react'
import SimpleReactFooter from 'simple-react-footer';

const Footer = () => {

     const columns = [{
            title: "colone1",
            resources: [{
              name: "Item 1",
              link: "/item1"
            },{
              name: "Item 2",
              link: "/item2"
            },{
              name: "Item 3",
              link: "/item3"
            },]
          },{
            title: "colone2",
            resources: [{
              name: "Item 4",
              link: "/item4"
            },{
              name: "Item 5",
              link: "/item5"
            },{
                  name: "Item 6",
                  link: "/item6"
                }] 
     },{
            title: "colone3",
            resources: [{
              name: "Item 7",
              link: "/item7"
            },{
              name: "Item 8",
              link: "/item8"
            },{
                  name: "Item 9",
                  link: "/item9"
                }]
          }];
    
    return (
 <footer>
 <div className='footer' >
     <div className='colone'>   
          <SimpleReactFooter   columns= {columns}/>   
     </div>   
    <div className='colone2'>     
        <div className="socialNetwork2">
            <ul>
                 <li>
                    <a href="https://www.facebook.com" target="_blank"
                       rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                </li>
                <li>
                    <a href="https://www.google.com" target="_blank"
                    rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://www.google.com" target="_blank"
                    rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                </li>
                <li>
                    <a href="https://www.google.com" target="_blank"
                    rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href="https://www.google.com" target="_blank"
                    rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                </li>
              </ul>
            </div> 
           <div className='copyrigh'>  <h5>© 2023 copyright : ASSOCIATION LAKSOUR </h5></div>
     </div> 
 </div>
        
 </footer>
    )
}

export default Footer
