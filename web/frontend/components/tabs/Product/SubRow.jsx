import React from 'react'
import Switchbutton from '../../common/Switchbutton'
// import image from "../HomePage"
import image from '../../../../public/profile.jpeg'
import { Button } from '@shopify/polaris'



const SubRow = ({ data }) => {
  console.log(data, "variants")
  return (
    <>
      {
        data.variants.map((x, i) => {
          return (
            <>
              <tr>
                {x != null && data.variants.length > 1
                  ?
                  <><td>
                    <div className="image">
                      <img src={x.image_id == null
                        ?
                        image
                        :
                        data.images.map((item, j) => {
                          console.log(item.src)
                          return (
                            <>
                              {x.image_id == item.id ? item.src : ''}
                            </>
                          )
                        })} alt="product" style={{ height: "45px", width: "50px" }} />
                    </div>
                    <strong>{data.title}</strong>{" "}:{"  "}{x.title}
                  </td>
                    <td>
                      <div className="switch">
                        <Switchbutton variants={x} />
                      </div>
                    </td>
                    <td>
                      <div className="editButton">
                        <Button><i class="fas fa-cog text-muted" ></i></Button>
                      </div>
                    </td>
                  </>
                  :
                  <p>No Variants</p>}
              </tr>
            </>
          )
        })
      }
    </>
  )
}

export default SubRow